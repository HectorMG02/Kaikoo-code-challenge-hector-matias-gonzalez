<template></template>

<script>
export default {
  name: "IndexPage",

  async asyncData({ $axios }) {
    const response = await $axios.$get(
      "https://back.kaikoo.pro:8888/api/champions"
    );

    console.log({ response }, response[0].name);
    return { champions: response };
  },
  data() {
    return {
      champions: [],
    };
  },
};
</script>
