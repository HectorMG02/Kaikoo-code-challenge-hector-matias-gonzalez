<template>
  <div
    class="relative card m-1 border-2 text-white cursor-pointer bg-card-bg"
    :class="borderColor"
    @mouseover="addHoverClass"
    @mouseleave="removeHoverClass"
  >
    <champion-lanes :lanes="champion.lanes"></champion-lanes>
    <champion-difficulty
      :champion-difficulty="champion.difficulty"
    ></champion-difficulty>

    <div class="flex flex-col items-center justify-center z-20 m-3">
      <champion-image
        :champion-image="champion.img"
        :border-color="imgBorderColor"
      ></champion-image>

      <p class="font-bold text-xl mt-4">
        <button class="text-xs" @click="toggleFavorite(champion)">
          <img
            v-if="isFavorite"
            src="https://img.icons8.com/color/512/filled-star.png"
            alt="heart"
            class="w-4 h-4"
          />

          <img
            v-else
            src="https://img.icons8.com/color/512/000000/star--v1.png"
            alt="heart"
            class="w-4 h-4"
          />
        </button>
        {{ champion.name }}
      </p>

      <p class="text-grey font-normal text-gray-400 text-sm mb-4">
        {{ champion.description_en }}
      </p>

      <div data-v-30a4dac2="" class="flex justify-between text-grey mb-2">
        <champion-power-spike
          v-for="(spike, index) in champion.gamePowerSpike"
          :key="index + spike"
          :spike="spike"
          :spike-index="index"
        ></champion-power-spike>
      </div>
    </div>
  </div>
</template>

<script>
import ChampionDifficulty from "./ChampionDifficulty.vue";
import ChampionImage from "./ChampionImage.vue";

export default {
  components: { ChampionDifficulty, ChampionImage },
  data() {
    return {
      borderColor: "border-card-border",
      imgBorderColor: "border-indigo-300",
      isFavorite: this.checkChampionIsFavorite(this.champion),
    };
  },
  methods: {
    addHoverClass() {
      this.$el.style.backgroundImage = `url(${this.champion.backgroundImg})`;
      this.$el.style.backgroundSize = "cover";

      this.$el.style.backgroundPosition = "center";
      this.$el.style.backgroundRepeat = "no-repeat";
      this.$el.style.backgroundBlendMode = "soft-light";

      this.borderColor = "border-indigo-500";
      this.imgBorderColor = "border-indigo-500";
    },
    removeHoverClass() {
      this.$el.style.backgroundImage = "";
      this.$el.style.backgroundColor = "";

      this.borderColor = "border-card-border";
      this.imgBorderColor = "border-indigo-300";
    },
    checkChampionIsFavorite({ nameId }) {
      const favoriteChampions = JSON.parse(
        localStorage.getItem("favoriteChampions")
      );

      if (favoriteChampions) {
        if (favoriteChampions.includes(nameId)) {
          return true;
        }
      }

      return false;
    },
    toggleFavorite({ nameId }) {
      const favoriteChampions = JSON.parse(
        localStorage.getItem("favoriteChampions")
      );

      if (!favoriteChampions) {
        localStorage.setItem("favoriteChampions", JSON.stringify([nameId]));
        this.isFavorite = true;
        return;
      }

      if (favoriteChampions.includes(nameId)) {
        const newFavoriteChampions = favoriteChampions.filter(
          (champion) => champion !== nameId
        );

        localStorage.setItem(
          "favoriteChampions",
          JSON.stringify(newFavoriteChampions)
        );

        this.isFavorite = false;
      } else {
        localStorage.setItem(
          "favoriteChampions",
          JSON.stringify([...favoriteChampions, nameId])
        );

        this.isFavorite = true;
      }
    },
  },
  props: ["champion"],
};
</script>
