const app = Vue.createApp({
    data() {
        return {
            key: "",
            itemList: [{
                id: 1,
                text: "Vue Bootcamp",
                completed: false
            }, {
                id: 2,
                text: "Kitap Okuma",
                completed: false
            }, {
                id: 3,
                text: "Tensorflow",
                completed: false
            }],
        }
    },
    methods: {
        addTodo(event) {
            this.itemList.push({
                id: new Date().getTime(),
                text: event.target.value,
                completed: false
            });
            event.target.value = "";
        },
        removeTodo(todoItem) {
            this.itemList = this.itemList.filter(item => item != todoItem)
            console.log(this.itemList)
        }
    },
    computed: {
        filteredList() {
            return this.itemList.filter(i => i.text.includes(this.key))
        },
        completedItemCount() {
            return [this.itemList.filter(t => t.completed).length, this.itemList.filter(t => !t.completed).length]
        }
    },
})
app.mount("#app")