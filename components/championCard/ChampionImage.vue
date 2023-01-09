<template>
  <div class="overflow-hidden w-16 h-16 custom-border rounded-full">
    <img
      v-bind:src="championImage"
      class="w-full h-full transform rounded-full border-2"
      :class="borderColor"
    />
  </div>
</template>

<script>
export default {
  props: ["championImage", "borderColor"],
};
</script>
