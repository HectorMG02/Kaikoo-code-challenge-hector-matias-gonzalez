<template>
  <div class="relative rounded-md shadow-sm ml-5">
    <v-container fluid>
      <v-row>
        <v-col cols="12">
          <v-combobox
            v-model="select"
            :items="items"
            label="Combobox"
            multiple
            outlined
            dense
          ></v-combobox>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  props: ["difficulties", "filter", "changeFilter"],
};
</script>
