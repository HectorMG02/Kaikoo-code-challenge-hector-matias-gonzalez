<template>
  <div class="overflow-hidden w-16 h-16 custom-border rounded-full">
    <img
      v-bind:src="championImage"
      class="w-full h-full transform rounded-full border-2 border-indigo-500"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      championImage:
        "https://images.weserv.nl/?url=cdn.kaikoo.pro/champion/" +
        this.championName +
        ".png&n=-1",
    };
  },
  props: ["championName"],
};
</script>
