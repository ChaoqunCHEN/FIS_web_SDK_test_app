<template>
  <div id="app">
    <div>
      <button>Home</button>
      <button>FIS SDK</button>
    </div>
    <FisSdkPage msg="Welcome to FIS SDK test App" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import FisSdkPage from "./components/FisSdk.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    FisSdkPage
  }
};
</script>

<style >
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
