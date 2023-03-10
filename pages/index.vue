<template>
    <div>
      <Header />
    </div>
</template>

<script>
import "/node_modules/flag-icons/css/flag-icons.min.css";

import Header from "../components/Header.vue";
import axios from "axios";

export default {
  name: 'IndexPage',
  components: {
    Header
  },
  methods: {
    test(url) {
      const ip = axios.get('/api/singers/')
      console.log(ip)
    }
  },
  mounted() {
    this.test()
  }
}
</script>

<style scoped>
</style>
