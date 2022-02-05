<template>
  <v-container>
    <v-row style="margin: 20px auto; width: 264px"
      ><v-col style="width: 264px">
        <v-row no-gutters>
          <Cell :value="1" move="" />
          <Cell :value="2" move="" />
          <Cell :value="3" move="" />
          <Cell :value="4" move="" />
        </v-row>
        <v-row no-gutters>
          <Cell :value="5" move="" />
          <Cell :value="6" move="" />
          <Cell :value="7" move="" />
          <Cell :value="8" move="" />
        </v-row>
        <v-row no-gutters>
          <Cell :value="9" move="" />
          <Cell :value="10" move="" />
          <Cell :value="11" move="" />
          <Cell :value="12" move="" />
        </v-row>
        <v-row no-gutters>
          <Cell :value="13" move="" />
          <Cell :value="14" move="" />
          <Cell :value="15" move="" />
          <Cell :value="0" move="" />
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Cell from "@/components/Cell";

export default {
  data() {
    return {
      field: {
        // [0-15, 'up' | 'down' | 'left' | 'right' | '']
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
};
</script>
