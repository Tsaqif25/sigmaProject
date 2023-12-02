<template>
  <HistoryVue></HistoryVue>
  <LoginVue></LoginVue>
</template>

<script>

import HelloWorld from './components/HelloWorld.vue'
import LoginVue from './components/LoginVue.vue'
import HistoryVue from './components/HistoryVue.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
export default {
components : {
  LoginVue,
  HistoryVue,
}
}
</script>

<style>

</style>