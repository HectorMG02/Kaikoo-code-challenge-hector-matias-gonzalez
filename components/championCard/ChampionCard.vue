<template>
  <div
    class="relative card m-1 border-2 text-white cursor-pointer bg-card-bg"
    :class="borderColor"
    @mouseover="addHoverClass"
    @mouseleave="removeHoverClass"
  >
    <champion-lanes :champion-lanes="champion.lanes"></champion-lanes>
    <champion-difficulty
      :champion-difficulty="champion.difficulty"
    ></champion-difficulty>

    <div class="flex flex-col items-center justify-center z-20 m-3">
      <champion-image
        :champion-image="champion.img"
        :border-color="imgBorderColor"
      ></champion-image>

      <p class="font-bold text-xl mt-4">
        {{ champion.name }}
      </p>

      <p class="text-grey font-normal text-gray-400 text-sm mb-4">
        {{ champion.description_en }}
      </p>

      <div data-v-30a4dac2="" class="flex justify-between text-grey mb-2">
        <champion-power-spike
          v-for="(spike, index) in champion.gamePowerSpike"
          :key="index + spike"
          :spike="spike"
          :spike-index="index"
        ></champion-power-spike>
      </div>
    </div>
  </div>
</template>

<script>
import ChampionDifficulty from "./ChampionDifficulty.vue";
import ChampionImage from "./ChampionImage.vue";

export default {
  components: { ChampionDifficulty, ChampionImage },
  data() {
    return {
      borderColor: "border-card-border",
      imgBorderColor: "border-indigo-300",
    };
  },
  methods: {
    addHoverClass() {
      this.$el.style.backgroundImage = `url(${this.champion.backgroundImg})`;
      this.$el.style.backgroundSize = "cover";

      this.$el.style.backgroundPosition = "center";
      this.$el.style.backgroundRepeat = "no-repeat";
      this.$el.style.backgroundBlendMode = "multiply";
      this.$el.style.backgroundColor = "rgba(0, 0, 0, 0.5)";

      this.borderColor = "border-indigo-500";
      this.imgBorderColor = "border-indigo-500";
    },
    removeHoverClass() {
      this.$el.style.backgroundImage = "";
      this.$el.style.backgroundColor = "";

      this.borderColor = "border-card-border";
      this.imgBorderColor = "border-indigo-300";
    },
  },
  props: ["champion"],
};
</script>
