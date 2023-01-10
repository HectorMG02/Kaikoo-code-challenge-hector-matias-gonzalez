<template>
  <div class="relative flex shadow-sm ml-14 h-15 top-0.5">
    <div
      class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
    >
      <i class="fas fa-search fa-fw">🔎</i>
    </div>
    <input
      id="search"
      type="text"
      class="form-input py-3 pl-10 block transition duration-150 ease-in-out sm:text-sm sm:leading-5 text-gray-300 leading-5 bg-filter-dark focus:w-full hover:w-full rounded-sm"
      :class="{
        'w-10': filterClone.championName === '',
        'w-full': filterClone.championName !== '',
      }"
      placeholder="Search champion"
      v-model="filterClone.championName"
      @keydown="onKeyDown"
      @input="
        if (filterClone.championName === '')
          changeFilter({ ...filter, championName: '' });
      "
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
  methods: {
    onKeyDown(e) {
      if (e.keyCode === 13) {
        this.changeFilter({
          ...this.filter,
          championName: this.filterClone.championName,
        });
      }
    },
  },
};
</script>
