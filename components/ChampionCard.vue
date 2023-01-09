<template>
  <div class="relative card m-1 border-2 border-slate-500 text-white">
    <div
      class="absolute right-0 top-1 difficulty-bg py-1 px-2 bg-indigo-900 bg-opacity-75"
    >
      <p class="text-xs font-bold text-white px-2 py-1 rounded-full">
        {{ champion.difficulty }}
      </p>
    </div>
    <div class="flex flex-col items-center justify-center z-20 m-3">
      <div class="overflow-hidden w-16 h-16 custom-border rounded-full">
        <img
          v-bind:src="championImage"
          class="w-full h-full transform rounded-full border-4 border-indigo-300"
        />
      </div>
      <p class="font-bold text-xl mt-4">
        {{ champion.name }}
      </p>
      <p class="text-grey font-normal text-sm mb-4">
        {{ champion.description_en }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      championImage:
        "https://images.weserv.nl/?url=cdn.kaikoo.pro/champion/" +
        this.champion.name +
        ".png&n=-1",
    };
  },
  props: ["champion"],
};
</script>
