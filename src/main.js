// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue"
import Player from "./components/player"

Vue.config.productionTip = false

// Vue.component('girl', Player )

/* eslint-disable no-new */
new Vue({
  el: "#app",
  components: {
    'girl': Player
  },
  data: {
    mywords: "My Words!"
  }
})
