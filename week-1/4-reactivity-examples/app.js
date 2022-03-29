const app = Vue.createApp({
    data() {
        return {
            key: "",
            itemList: ["elma", "armut", "karpuz", "muz"],
            //filteredList: ["elma", "armut", "karpuz", "muz"]
        }
    },
    methods: {
        searchList() {
            //const filteredList = this.itemList.filter(i => i.includes(this.key)) kurs kodu
            //console.log(filteredList)
            //this.filteredList = this.itemList.filter(i => i.includes(this.key))
        }
    },
    computed: {
        filteredList() {
            return this.itemList.filter(i => i.includes(this.key))
        }
    },
}).mount("#app")