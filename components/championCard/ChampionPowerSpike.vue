<template>
  <div class="text-center mx-1 text-sm">
    <p class="leading-4 text-gray-400 mb-1">{{ getStage(spikeIndex) }}</p>
    <div class="w-16 h-1 rounded" :class="getStageColor(spike)"></div>
  </div>
</template>

<script>
export default {
  props: ["spike", "spikeIndex"],
  methods: {
    getStage(index) {
      const stages = ["Early", "Mid", "Late"];
      return stages[index];
    },

    getStageColor(spike) {
      const colors = [
        {
          key: "strong",
          value: "bg-green-500",
        },
        {
          key: "normal",
          value: "bg-yellow-500",
        },
        {
          key: "weak",
          value: "bg-red-500",
        },
      ];

      return colors.find((color) => color.key === spike).value;
    },
  },
};
</script>
