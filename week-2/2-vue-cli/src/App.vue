<template>
  <app-header />
  <div class="container">
  <h3>İlk vue cli uygulaması</h3>
  <p>Bugün component ve vue cli konularını görücez</p>
  <CounterItem></CounterItem>
  <CounterItem/>
  <counter-item/>
  <counterItem/>
  </div>
 
</template>

<script>
import CounterItem from "@/components/CounterItem.vue";
export default {
  components: {
    CounterItem,
    //CounterItem:CounterItem,
    //"counter-item":CounterItem,
  },
};
</script>