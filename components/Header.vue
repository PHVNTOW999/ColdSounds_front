<template>
  <header class="header">
    <div class="header__nav">
      <nav class="nav">
        <b-navbar>
          <template #start>
            <b-navbar-item v-for="el in MENU" :key="el.id">
              <router-link :to="el.path">{{ el.name }}</router-link>
            </b-navbar-item>
          </template>

          <template #end>
            <b-navbar-item tag="div">
              <div class="buttons">
                <a class="button is-primary">
                  <strong>Sign up</strong>
                </a>
                <a class="button is-success">
                  Log in
                </a>
              </div>
            </b-navbar-item>
          </template>
        </b-navbar>
      </nav>
    </div>
  </header>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: "Header",
  data() {
    return {
      langs: [
        { id: 0, name: 'English', flag: 'fi fi-gb' },
        { id: 1, name: 'Ukrainian', flag: 'fi fi-ua' },
        { id: 2, name: 'Russian', flag: 'fi fi-ru' }
      ]
    }
  },
  methods: {...mapActions({GET_MENU:'Header/getMenu'}),},
  computed: {...mapGetters({MENU: "Header/MENU",}),},
  created() {this.GET_MENU()},
}
</script>

<style scoped>
</style>
