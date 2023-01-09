<template>
  <div class="flex">
    <lanes-filter
      :lanes="lanes"
      :filter="filter"
      :changeFilter="changeFilter"
    ></lanes-filter>

    <div class="relative rounded-md shadow-sm ml-5">
      <select
        class="form-select py-2 px-3 leading-5 rounded-md shadow-sm bg-white focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out"
      >
        <option value="all">All</option>
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>
    </div>
  </div>
</template>

<script>
import LanesFilter from "./LanesFilter.vue";
export default {
  components: { LanesFilter },
  props: ["lanes", "filter", "changeFilter"],
};
</script>
