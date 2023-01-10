<template>
  <div class="flex">
    <lanes-filter
      :lanes="lanes"
      :filter="filter"
      :changeFilter="changeFilter"
    ></lanes-filter>

    <div>
      <input-selector
        :filter="filter"
        :options="difficulties"
        :changeFilter="changeFilter"
      ></input-selector>
    </div>

    <div>
      <text-input :filter="filter" :changeFilter="changeFilter"></text-input>
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
import TextInput from "./TextInput.vue";

export default {
  components: { LanesFilter, InputSelector, SwitchComponent, TextInput },
  props: ["lanes", "difficulties", "championNames", "filter", "changeFilter"],
};
</script>
