<template>
    <div>
        <label for="todoText"></label>
        <input v-model="todoText" @keydown.enter ="addNewToDo(todoText)" type="text" id="todoText" placeholder="Bir şeyler yazınız...">
    </div>
</template>

<script>
export default {
    props : {
        addNewToDo:{
            type:Function,
            required: true
        }
    },
    data() {
        return {
            todoText:null
        }
    },
    methods: {
        //addNewToDo(){
        //    this.$emit("add-todo", this.todoText)//$emit ile üst parenta yollanır
        //    this.todoText = null;
        //}
    },
}
</script>