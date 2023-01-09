<template>
  <div class="flex ml-1 mb-5">
    <div
      v-for="(lane, index) in lanes"
      :key="index + lane"
      class="w-12 h-12 flex justify-center items-center duration-300 cursor-pointer border border-card-border"
      :class="{
        'bg-indigo-500': lane === filter.lane,
        'bg-filter-dark': lane !== filter.lane,
      }"
      @click="
        changeFilter({
          ...filter,
          lane,
        })
      "
    >
      <img
        :src="require(`~/assets/images/lanes/${lane.toUpperCase()}.svg`)"
        class="w-7 h-7"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: ["lanes", "filter", "changeFilter"],
};
</script>
