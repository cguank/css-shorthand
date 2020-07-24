<template>
  <div>
    <div class="show-background" ref="ccc">
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      这是背景图里面
    </div>
    <div class="show-font">
      这是font
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data: function () {
    return {};
  },
  created () {
    setTimeout(() => {
      console.log(window.getComputedStyle(this.$refs.ccc), null);
    }, 100);
  },
  methods: {}
}
</script>
<style scoped>
.show-background {
  height: 800px;
  width: 800px;
  background-color: red;
  background: url("../assets/1.jpg") no-repeat top right local;
}
.show-font {
  font: 18px "Avenir", Helvetica, Arial, sans-serif inherit;
}
</style>