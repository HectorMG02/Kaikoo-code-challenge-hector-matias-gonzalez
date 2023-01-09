<template>
  <div class="flex">
    <lanes-filter
      :lanes="lanes"
      :filter="filter"
      :changeFilter="changeFilter"
    ></lanes-filter>

    <div>
      <input-selector
        :difficulties="difficulties"
        :filter="filter"
        :changeFilter="changeFilter"
        :placeholder="'Difficulty'"
      ></input-selector>
    </div>

    <div class="ml-7">
      <input-selector
        :difficulties="championNames"
        :filter="filter"
        :changeFilter="changeFilter"
        :placeholder="'Search Champion'"
      ></input-selector>
    </div>

    <div class="ml-7">
      <switch-component
        :filter="filter"
        :changeFilter="changeFilter"
      ></switch-component>
    </div>
  </div>
</template>

<script>
import InputSelector from "./InputSelector.vue";
import LanesFilter from "./LanesFilter.vue";
import SwitchComponent from "./SwitchComponent.vue";

export default {
  components: { LanesFilter, InputSelector, SwitchComponent },
  props: ["lanes", "difficulties", "championNames", "filter", "changeFilter"],
};
</script>
