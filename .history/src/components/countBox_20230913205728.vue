<template>
  <div class="count-box">
    <button class="minus" @click="subCount">-</button>
    <input :value="value" class="inp" type="text">
    <button class="add" @click="addCount">+</button>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Number,
      default: 1
    }
  },
  methods: {
    subCount () {
      if (this.value <= 1) { return }
      this.$emit('input', this.value - 1)
    },
    addCount () {
      this.$emit('input', this.value + 1)
    }
  }
}
</script>

<style lang="less" scoped>
.count-box{
    width: 110px;
    display: flex;
    .minus, .add{
        width: 30px;
        height: 30px;
        border: none;
        outline: none;
        background-color: #efefef;
    }.inp{
        width: 40px;
        height: 30px;
        border: none;
        outline: none;
        margin: 0 5px;
        background-color: #efefef;
        text-align: center;
        vertical-align: center;
    }
}
</style>
