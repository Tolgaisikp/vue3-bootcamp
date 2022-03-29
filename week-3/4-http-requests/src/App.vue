<template>
    
<div class="container">
  <component :is="componentId"></component>
  <AddSection />
  <ListSection />
</div>

</template>

<script>
import axios from "axios";
import AddSection from '@/components/AddSection'
import ListSection from '@/components/ListSection'
export default {
  components:{
    AddSection,
    ListSection
  },
  data() {
    return {
      provideData :{
        itemsList:[]
      },
    }
  },
  mounted() {
    axios.get("http://localhost:3000/items").then(item_response => {
      this.provideData.itemsList = item_response.data || [];
    })
  },
  methods: {
    onSave(e){
      axios.post("http://localhost:3000/items", 
      {title: e.target.value, created_at : new Date(), completed : false}
      ).then(save_response => {
        this.provideData.itemsList.push(save_response.data)
        e.target.value = ""
        e.target.focus();
      });
    },
    onDelete(item){
      axios.delete(`http://localhost:3000/items/${item.id}`).then(delete_response =>{
        console.log(delete_response)
        this.provideData.itemsList = this.provideData.itemsList.filter(i => i.id != item.id)
      })

    }
  },
  provide(){
    return {
      provideData : this.provideData,
      onSave : this.onSave,
      onDelete : this.onDelete
    }
  }
}
</script>