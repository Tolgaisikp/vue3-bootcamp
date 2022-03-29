<template>
    <div class ="container">
        <h3 class ="text-center">To-Do App</h3>
        <hr class="my-2"/>
        <AddSection :addNewToDo="addNewToDo"/>  <!--@add-todo ="addNewToDo"    custom event    -->
        <ListSection/> <!-- @delete-todo-item = "deleteItem" injectsiz --> 
    </div>
</template>

<script>
import AddSection from "@/components/AddSection";
import ListSection from "@/components/ListSection";


export default {
    components:{
        AddSection,
        ListSection
        },
    created() {
//        setTimeout(()=>{
//            this.todoList = [
//                {id:1,text:"Bootcamp #1"},
//                {id:2,text:"Bootcamp #2"}
//                ];
//        }, 2000)
    },    
    data() {
        return {
            provideData: {
                todoList:[{id:1,text:"Bootcamp #1"},
                          {id:2,text:"Bootcamp #2"}]
            }
        }
    },
    provide(){
            return{
                provideData :this.provideData,
                deleteItem : this.deleteItem
            }
    },
    methods: {
        deleteItem(todoItem){
            this.provideData.todoList = this.provideData.todoList.filter((t) => t != todoItem);
        },
        addNewToDo(todo){
            this.provideData.todoList.push({id:new Date().getTime(),
            text:todo
            });
        }
    },
}
</script>

<!--
parent'dan child'a veri iletişimine props denir.
app.vue içindeki childlar aşağıdaki gibidir

AddSection,
TodoList,
ResultBar

child'dan parent'a veri iletişimine custom Event denir.


-->