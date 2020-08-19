<template>
  <div id="fis_sdk_page">
    <h1>{{ msg }}</h1>
    <button @click="get_id">Get ID</button>
    <button @click="get_token">Get Token</button>
    <button @click="delete_id">Delete Installation</button>
    <p>FID: {{ FID }}</p>
    <p>FIS auth token: {{ auth_token }}</p>
    <h2>History</h2>
    <button @click="clear_all_history">clear all</button>
    <div v-for="op in operations" :key="op.id">
      <p>{{ op.msg }}</p>
    </div>
  </div>
</template>

<script>
// import "firebase/installations";
export default {
  name: "FisSdkPage",
  props: {
    msg: String,
  },
  data: function() {
    return {
      FID: "123",
      auth_token: "abc",
      operations: [],
      current_op_id: 0,
    };
  },
  methods: {
    // eslint-disable-next-line no-unused-vars
    get_id: function() {
      window.installations
        .getId()
        .then((fid) => {
          this.FID = fid;
          this.operations.push({
            id: this.current_op_id,
            msg: `get id: ${fid}`,
          });
          this.current_op_id++;
        })
        .catch((error) => alert(error));

      window.installations.onIdChange((newFid) => {
        this.FID = newFid;
      });
    },
    get_token: function() {
      window.installations
        .getToken()
        .then((token) => {
          this.auth_token = token;
          this.operations.push({
            id: this.current_op_id,
            msg: `get token: ${token}`,
          });
          this.current_op_id++;
        })
        .catch((error) => alert(error));
    },
    delete_id: function() {
      window.installations
        .delete()
        .then(() => {
          this.FID = "";
          this.auth_token = "";
          this.operations.push({
            id: this.current_op_id,
            msg: `delete ID success`,
          });
          this.current_op_id++;
        })
        .catch((error) => alert(error));
    },
    clear_all_history: function() {
      this.operations = [];
    },
  },
};
</script>

<style slot-scope="fis-sdk">
#fis_sdk_page {
  text-align: left;
}
</style>
