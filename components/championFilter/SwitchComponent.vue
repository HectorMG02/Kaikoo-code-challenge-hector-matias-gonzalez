<template>
  <div class="flex justify-center ml-5">
    <div class="form-check form-switch -mt-1">
      <label for="toggle" class="text-xs text-gray-300 mb-3"
        >Show favorites</label
      >
      <br />
      <div
        class="relative inline-block w-10 align-middle select-none transition duration-200 ease-in"
      >
        <input
          type="checkbox"
          name="toggle"
          id="toggle"
          class="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
          :checked="filter.favorites"
          @change="
            changeFilter({
              ...filter,
              favorites: !filter.favorites,
            })
          "
        />
        <label
          for="toggle"
          class="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
        ></label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["filter", "changeFilter"],
};
</script>

<style>
.toggle-checkbox:checked {
  right: 0;
  border-color: #68d391;
}
.toggle-checkbox:checked + .toggle-label {
  background-color: #68d391;
}
</style>
