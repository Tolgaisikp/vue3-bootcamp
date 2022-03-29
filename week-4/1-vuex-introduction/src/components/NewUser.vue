<template>
    <button @click="updateName">Yeni Item Ekle</button>
</template>

<script>
export default {
    methods: {
        updateName(){
            this.$store.state.fullName = "Tolga Kaşık"
            this.$store.dispatch("newItem", {id:3, title : "Sandalye-"+new Date().getTime(), type:"mobilya"})//action
            //this.$store.commit("newItem", {id:3, title : "Sandalye-"+new Date().getTime(), type:"mobilya"})//mutation
            //this.$store.state.itemList.push({id:3, title : "Sandalye-"+new Date().getTime(), type:"mobilya"})
        }
    },
}
</script>