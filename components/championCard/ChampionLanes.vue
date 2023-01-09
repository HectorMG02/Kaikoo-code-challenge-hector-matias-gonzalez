<template>
  <div class="absolute left-0 top-1 -ml-2 mt-1 py-1 px-2">
    <img
      v-for="(lane, index) in lanes"
      :key="index + lane"
      class="px-2 -mt-4 rounded-full h-9 w-9"
      :src="require(`~/assets/images/lanes/${lane}.svg`)"
    />
  </div>
</template>

<script>
export default {
  props: ["lanes"],
};
</script>
