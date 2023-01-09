<template>
  <div class="absolute right-0 top-1 py-1 px-2 bg-difficulty bg-opacity-75">
    <p class="text-xs font-bold text-white px-2 py-1 rounded-full">
      {{ championDifficulty }}
    </p>
  </div>
</template>

<script>
export default {
  props: ["championDifficulty"],
};
</script>
