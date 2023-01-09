<template>
  <div class="content container w-full mx-auto my-5">
    <h2 class="text-3xl font-bold text-white mb-8">Champions</h2>
    <champion-filter
      :lanes="lanes"
      :difficulties="difficulties"
      :championNames="allChampions.map((champion) => champion.name)"
      :filter="filter"
      :changeFilter="changeFilter"
    ></champion-filter>
    <div class="grid grid-cols-5">
      <div
        class="col-span-1"
        v-for="champion in filteredChampions"
        :key="champion.id"
      >
        <champion-card
          :champion="champion"
          :changeFilter="changeFilter"
          :filter="filter"
        ></champion-card>
      </div>
    </div>
  </div>
</template>

<script>
import { checkChampionIsFavorite } from "../helpers/championsLocalStorage";

export default {
  name: "IndexPage",
  async asyncData({ $axios }) {
    const response = await $axios.$get(
      "https://back.kaikoo.pro:8888/api/champions"
    );

    response.forEach((champion) => {
      champion.img = `https://cdn.communitydragon.org/latest/champion/${champion.nameId}/square`;
      champion.backgroundImg = `https://cdn.communitydragon.org/latest/champion/${champion.nameId}/splash-art/centered`;

      champion.isFavorite = checkChampionIsFavorite(champion);
    });

    return { filteredChampions: response, allChampions: response };
  },
  data() {
    return {
      allChampions: [],
      filteredChampions: [],
      lanes: ["fill", "top", "jungle", "middle", "bottom", "utility"],
      difficulties: ["easy", "average", "hard", "severe"],
      filter: {
        lane: "fill",
        difficulty: "",
        championName: "",
        favorites: false,
      },
    };
  },
  methods: {
    changeFilter(params) {
      this.filter = params;

      this.filteredChampions = this.allChampions.filter((champion) => {
        if (this.filter.lane !== "fill") {
          if (!champion.lanes.includes(this.filter.lane.toUpperCase())) {
            return false;
          }
        }

        if (this.filter.difficulty !== "") {
          if (champion.difficulty !== this.filter.difficulty) {
            return false;
          }
        }

        if (this.filter.championName !== "") {
          if (
            !champion.name
              .toLowerCase()
              .includes(this.filter.championName.toLowerCase())
          ) {
            return false;
          }
        }

        if (this.filter.favorites) {
          if (!checkChampionIsFavorite(champion)) {
            return false;
          }
        }

        return true;
      });
    },
  },
};
</script>
