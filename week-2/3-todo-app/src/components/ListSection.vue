<template>
        
        <TodoList/> <!--  :todoList = "todoList"  @delete-todo-item = "$emit('delete-todo-item', $event)"  injectsiz-->
        <ResultBar :itemCount = "provideData.todoList.length"/>

</template>

<script>
import TodoList from "@/components/TodoList";
import ResultBar from "@/components/ResultBar";

export default {
    inject:['provideData'],
    props:{
        todoList:{
            type:Array,
            required:true
        },
    },
    components:{
        TodoList,
        ResultBar
        },
}
</script>