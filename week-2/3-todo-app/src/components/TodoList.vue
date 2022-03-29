<template>     
        <ul>
            <TodoListItem  v-for="todoItem in provideData.todoList" :key="todoItem.id" :item="todoItem" /> <!--@delete-todo-item = "$emit('delete-todo-item', $event)" injectsiz-->
        </ul>        
</template>

<script>
import TodoListItem from "@/components/TodoListItem"
export default {
    inject:["provideData"],
//    props:['todoList'], //inject işlevi
//    props:{
//        todoList:{
//            type:String,
//            required:false,
//            default: ""
//        }
//    },
    components:{
        TodoListItem
    }
}
</script>