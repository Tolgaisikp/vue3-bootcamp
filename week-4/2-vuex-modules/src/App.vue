<template>
  <p>{{$store.state.mainName}}</p>
  <p>{{$store.state.contact.contactName}}</p>
  <p>{{$store.getters["contact/_contactName"]}}</p><!-- burdali yapma nedenimiz taskmanager ve contact managerda aynı isimli değişkenler bulunursa namespaced: true, ile bu hale getirerek karışmasını engelleriz-->
  <p>{{contactName}}</p>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: 'App',
  computed: {
    ...mapGetters({
       contactName : "contact/_contactName"
    })
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
