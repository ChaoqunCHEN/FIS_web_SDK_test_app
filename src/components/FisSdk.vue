<template>
  <div id="fis_sdk_page">
    <h1>{{msg}}</h1>
    <button @click="get_id">Get ID</button>
    <button @click="get_token">Get Token</button>
    <button @click="delete_id">Delete ID</button>
    <p>FID: {{FID}}</p>
    <p>FIS auth token: {{auth_token}}</p>
    <h2>History</h2>
    <div v-for="op in operations" :key="op.id">
      <p>{{op.msg}}</p>
    </div>
  </div>
</template>

<script>
// import "firebase/installations";
export default {
  name: "FisSdkPage",
  props: {
    msg: String
  },
  data: function() {
    return {
      FID: "123",
      auth_token: "abc",
      operations: [],
      current_op_id: 0
    };
  },
  methods: {
    get_id: function(event) {
      window.installations.getId().then(fid => {
        this.FID = fid;
        this.operations.push({ id: this.current_op_id, msg: `get id: ${fid}` });
        this.current_op_id++;
      });
    },
    get_token: function(event) {
      window.installations.getToken().then(token => {
        this.auth_token = token;
        this.operations.push({
          id: this.current_op_id,
          msg: `get token: ${token}`
        });
        this.current_op_id++;
      });
    },
    delete_id: function(event) {
      window.installations.delete().then(() => {
        this.FID = "";
        this.auth_token = "";
        this.operations.push({
          id: this.current_op_id,
          msg: `delete ID`
        });
        this.current_op_id++;
      });
    }
  }
};
</script>

<style slot-scope="fis-sdk">
#fis_sdk_page {
  text-align: left;
}
</style>