<template>
  <div class="count-box">
    <button class="minus">-</button>
    <input class="inp" type="text">
    <button class="add">+</button>
  </div>
</template>

<script>
export default {

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
