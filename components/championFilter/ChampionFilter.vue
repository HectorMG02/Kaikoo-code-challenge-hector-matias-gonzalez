<template>
  <div class="flex">
    <lanes-filter
      :lanes="lanes"
      :filter="filter"
      :changeFilter="changeFilter"
    ></lanes-filter>

    <input-selector
      :difficulties="difficulties"
      :filter="filter"
      :changeFilter="changeFilter"
    ></input-selector>
  </div>
</template>

<script>
import InputSelector from "./InputSelector.vue";
import LanesFilter from "./LanesFilter.vue";
export default {
  components: { LanesFilter, InputSelector },
  props: ["lanes", "difficulties", "filter", "changeFilter"],
};
</script>
