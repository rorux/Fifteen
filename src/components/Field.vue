<template>
  <v-container>
    <v-row style="margin: 20px auto; width: 264px"
      ><v-col style="width: 264px">
        <v-row v-for="m in 4" :key="m" no-gutters>
          <Cell
            v-for="n in 4"
            :id="`${m}${n}`"
            :value="field[`${m}${n}`][0]"
            :key="`${m}${n}`"
            :move="field[`${m}${n}`][1]"
          />
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Cell from "@/components/Cell";
import { randomInit } from "@/services/functions";

export default {
  name: "Field",
  data() {
    return {
      field: {
        11: [0, null],
        12: [0, null],
        13: [0, null],
        14: [0, null],
        21: [0, null],
        22: [0, null],
        23: [0, null],
        24: [0, null],
        31: [0, null],
        32: [0, null],
        33: [0, null],
        34: [0, null],
        41: [0, null],
        42: [0, null],
        43: [0, null],
        44: [0, null],
      },
    };
  },
  components: { Cell },
  mounted() {
    this.field = randomInit();
  },
};
</script>
