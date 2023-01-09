<template>
  <div class="relative card m-1 border-2 border-card-border text-white">
    <champion-lanes :champion-lanes="champion.lanes"></champion-lanes>
    <champion-difficulty
      :champion-difficulty="champion.difficulty"
    ></champion-difficulty>

    <div class="flex flex-col items-center justify-center z-20 m-3">
      <champion-image :champion-name="champion.name"></champion-image>

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
  props: ["champion"],
};
</script>
