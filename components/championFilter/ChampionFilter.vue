<template>
  <div class="flex">
    <lanes-filter
      :lanes="lanes"
      :filter="filter"
      :changeFilter="changeFilter"
    ></lanes-filter>

    <div class="ml-5">
      <input-selector
        :difficulties="difficulties"
        :filter="filter"
        :changeFilter="changeFilter"
        :placeholder="'Difficulty'"
      ></input-selector>
    </div>

    <div class="ml-5">
      <input-selector
        :difficulties="championNames"
        :filter="filter"
        :changeFilter="changeFilter"
        :placeholder="'Search Champion'"
      ></input-selector>
    </div>
  </div>
</template>

<script>
import InputSelector from "./InputSelector.vue";
import LanesFilter from "./LanesFilter.vue";
export default {
  components: { LanesFilter, InputSelector },
  props: ["lanes", "difficulties", "championNames", "filter", "changeFilter"],
};
</script>
