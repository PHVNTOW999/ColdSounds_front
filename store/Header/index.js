import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)

export const state = () => ({
  menu: null
})

export const getters = {
  MENU(state) {
    return state.menu
  }
}

export const mutations = {
  SET_MENU(state, val) {
    return state.menu = val
  }
}

export const actions = {
    getMenu({commit}) {
      return new Promise((resolve, reject) => {
        axios.get("/api/menu/")
          .then(async ({data}) => {
            console.log("vuex", data)
            commit('SET_MENU', data)
            resolve(data)
          })
          .catch((error) => { reject(error)})
      })
    },
}
