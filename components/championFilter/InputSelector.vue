<template>
  <div class="w-full relative ml-7">
    <div class="absolute top-4 right-4 cursor-pointer z-30">
      <svg width="16" height="16" v-if="selected == ''">
        <image
          xlink:href="data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23FFFFFF%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E"
          class="w-2 h-2"
        />
      </svg>
      <button v-else @click="remove">
        <svg width="16" height="16">
          <image
            xlink:href="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUiIGhlaWdodD0iMTUiIHZpZXdCb3g9IjAgMCAxNSAxNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik0xIDFMMTQgMTQiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4NCjxwYXRoIGQ9Ik0xNCAxTDEgMTQiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4NCjwvc3ZnPg0K"
            class="w-2 h-2"
          />
        </svg>
      </button>
    </div>
    <input
      v-model="selected"
      @click="toggle"
      type="text"
      class="w-full bg-[#454563] mix-blend-normal p-3 text-base rounded-[0.25rem] text-white"
      placeholder="Difficulty"
    />
    <div
      v-show="isOpen"
      class="w-full absolute bg-[#454563] left-0 mt-2 z-30 border border-[#ffffff33] rounded-[3px] max-h-[141px] overflow-y-auto"
    >
      <div
        @click="select(option)"
        v-for="(option, index) in selectedOption"
        :key="index + option"
        class="w-full cursor-pointer text-white pl-4 py-2 hover:bg-[#2b2a3b]"
      >
        {{ capitalize(option) }}
      </div>
    </div>
  </div>
</template>

<script>
import capitalize from "../../helpers/capitalize";

export default {
  data() {
    return {
      isOpen: false,
      selected: "",
    };
  },
  methods: {
    capitalize(str) {
      return capitalize(str);
    },
    toggle() {
      this.isOpen = !this.isOpen;
    },
    select(option) {
      this.selected = capitalize(option);
      this.$emit("input", option);
      this.isOpen = false;

      this.changeFilter({
        ...this.filter,
        difficulty: option,
      });
    },
    remove() {
      this.selected = "";
      this.changeFilter({
        ...this.filter,
        difficulty: "",
      });
    },
    close(e) {
      if (!this.$el.contains(e.target)) {
        this.isOpen = false;
      }
    },
  },
  computed: {
    selectedOption() {
      return this.options.filter((option) => {
        return option.toLowerCase().indexOf(this.selected.toLowerCase()) >= 0;
      });
    },
  },
  props: ["filter", "options", "changeFilter"],
};
</script>

<style scoped>
.input {
  box-shadow: inset 0 1px 3px rgb(0 0 0 / 15%);
}
::-webkit-scrollbar {
  width: 5px;
  height: 5px;
  background-color: #f4f4f4;
}
::-webkit-scrollbar-thumb {
  background-color: #f4f4f4;
}
::-webkit-scrollbar-thumb:hover {
  background-color: #ffffff66;
}
::-webkit-scrollbar-track {
  background-color: #454563;
}
</style>
