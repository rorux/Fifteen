<template>
  <v-col class="field-cell" style="position: relative">
    <v-card
      class="d-flex align-center justify-center field-cell"
      :class="{
        'filled-cell': value,
        'empty-cell': !value,
        'to-up': isMoved && move === 'up',
        'to-down': isMoved && move === 'down',
        'to-left': isMoved && move === 'left',
        'to-right': isMoved && move === 'right',
        'cell-ok': isCellOk,
      }"
      ma="0"
      outlined
      tile
      @click="moveHandler"
    >
      <span v-if="value">{{ value }}</span>
    </v-card>
  </v-col>
</template>

<script>
import { setField } from "@/services/functions";

export default {
  name: "Cell",
  data() {
    return {
      isMoved: false,
    };
  },
  props: {
    value: Number,
    move: String,
    id: String,
  },
  emits: ["updateField"],
  computed: {
    isCellOk() {
      const idNum = +this.id;
      const valueNum = +this.value;

      if (
        (idNum === 11 && valueNum === 1) ||
        (idNum === 12 && valueNum === 2) ||
        (idNum === 13 && valueNum === 3) ||
        (idNum === 14 && valueNum === 4) ||
        (idNum === 21 && valueNum === 5) ||
        (idNum === 22 && valueNum === 6) ||
        (idNum === 23 && valueNum === 7) ||
        (idNum === 24 && valueNum === 8) ||
        (idNum === 31 && valueNum === 9) ||
        (idNum === 32 && valueNum === 10) ||
        (idNum === 33 && valueNum === 11) ||
        (idNum === 34 && valueNum === 12) ||
        (idNum === 41 && valueNum === 13) ||
        (idNum === 42 && valueNum === 14) ||
        (idNum === 43 && valueNum === 15)
      )
        return true;
      else return false;
    },
  },
  methods: {
    moveHandler() {
      if (this.move) {
        this.isMoved = true;
        let updateFieldObj = {};
        updateFieldObj[this.id] = [0, null];
        updateFieldObj = {
          ...updateFieldObj,
          ...setField(this.id, this.value, this.move),
        };
        setTimeout(() => {
          this.isMoved = false;
          this.$emit("updateField", [updateFieldObj, this.id]);
        }, 300);
      }
    },
  },
};
</script>

<style>
.field-cell {
  width: 60px;
  height: 60px;
}
.filled-cell {
  border-color: #333 !important;
  background-color: rgb(221, 190, 132) !important;
  font-weight: 600;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  transition: bottom 300ms, top 300ms, left 300ms, right 300ms !important;
  position: absolute;
}
.empty-cell {
  border-color: #fff !important;
  position: absolute;
}
.to-up {
  bottom: 60px;
  top: -60px;
}
.to-down {
  top: 60px;
  z-index: 1;
}
.to-right {
  left: 60px;
  z-index: 1;
}
.to-left {
  right: 60px;
  left: -60px;
  z-index: 1;
}
.cell-ok {
  color: #b16a26 !important;
}
</style>
