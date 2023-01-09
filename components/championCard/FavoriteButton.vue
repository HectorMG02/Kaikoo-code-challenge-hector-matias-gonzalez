<template>
  <button class="text-xs" @click="toggleFavorite(champion)">
    <img
      v-if="champion.isFavorite"
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
</template>

<script>
import { toggleFavorite } from "../../helpers/championsLocalStorage";

export default {
  props: ["champion", "changeFilter", "filter"],
  methods: {
    toggleFavorite(champion) {
      toggleFavorite(champion);
      this.changeFilter(this.filter);
    },
  },
};
</script>
