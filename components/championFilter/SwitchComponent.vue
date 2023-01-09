<template>
  <div class="flex items-center justify-between mb-4 ml-5">
    <label for="favorites-switch" class="text-gray-300 mx-3">Favoritos</label>
    <input
      id="favorites-switch"
      type="checkbox"
      class="leading-tight focus:outline-none focus:shadow-outline"
      :checked="filterClone.favorite"
      @change="
        changeFilter({
          ...filter,
          favorites: !filterClone.favorite,
        })
      "
      v-model="filterClone.favorite"
    />
  </div>
</template>

<script>
export default {
  props: ["filter", "changeFilter"],
  data() {
    return {
      filterClone: this.filter,
    };
  },
};
</script>
