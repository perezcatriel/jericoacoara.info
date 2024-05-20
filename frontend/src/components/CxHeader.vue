<template>
  <div class="header">
    <img alt="Vue logo" src="../assets/logo.jpeg">
    <h1>{{ msg }}</h1>
    <img alt="Vue logo" src="../assets/logo.jpeg">
  </div>
</template>

<script>
export default {
  name: 'CxHeader',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  display: flex;
  justify-content:space-between;
  align-items: center;
  margin-top: 10px;
  padding: 0px 10px;
  border-bottom: 4px solid black;
}

.header::after {
  content: "";
  position: absolute;
  top: 63px;
  left:0;
  width: 100%;
  height: 1px;
  background-color: black;
}



img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  padding-bottom: 5px;
}


</style>
