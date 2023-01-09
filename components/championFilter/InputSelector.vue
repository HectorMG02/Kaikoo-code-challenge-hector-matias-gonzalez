<template>
  <div>
    <select
      id="countries"
      class="mx-7 block w-full py-3 px-2 rounded-sm font-medium text-gray-300 leading-5 bg-filter-dark transition duration-150 ease-in-out"
    >
      <option selected>Choose a country</option>
      <option value="US">United States</option>
    </select>
  </div>
</template>

<script>
export default {
  props: ["difficulties", "filter", "changeFilter"],
};
</script>
