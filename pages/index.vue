<template>
    <div class="gg">
      123
    </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'IndexPage',
  methods: {
    test(url) {
      // const axios = require('axios')
      // http://127.0.0.1:8000/api/singers/
      // /api/singers
      // /?format=json
      const ip = axios.get('/api/singers/')
      // const ip2 = axios.get('/api2/singers')
      // const ip2 = axios.get('/api3/users')
      console.log(ip)
    }
  },
  mounted() {
    // const url3 = 'http://127.0.0.1:8000/singers'
    // const url2 = 'http://217.78.239.164:10000/singers/'
    // const url = 'https://random-data-api.com/api/v2/users'
    this.test()
    // https://random-data-api.com/api/v2/users
    // console.log(await axios.get(url2))
  }
}
</script>

<style scoped>
.gg {
  color: darkred;
}
</style>
