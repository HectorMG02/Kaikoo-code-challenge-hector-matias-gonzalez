<template>
  <div class="grid grid-cols-5 m-10">
    <div class="col-span-1" v-for="champion in champions" :key="champion.id">
      <champion-card :champion="champion"></champion-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  async asyncData({ $axios }) {
    const response = await $axios.$get(
      "https://back.kaikoo.pro:8888/api/champions"
    );

    const parseUrlName = (name) => {
      return name.replace(/[' ]/g, "").split(" ").join("");
    };

    response.forEach((champion) => {
      champion.img = `https://cdn.communitydragon.org/latest/champion/${parseUrlName(
        champion.name
      )}/square`;
      champion.backgroundImg = `https://cdn.communitydragon.org/latest/champion/${parseUrlName(
        champion.name
      )}/splash-art/centered`;
    });

    return { champions: response };
  },
  data() {
    return {
      champions: [],
    };
  },
};
</script>
