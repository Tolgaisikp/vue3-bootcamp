const app = Vue.createApp({
    data() {
        return {
            value: 0
        }
    },
    computed: {
        result() {
            return this.value == 33 ? "Tamamlandı" : "Henüz Tamamlanmadı"
        }
    },
    watch: {
        result() {
            console.log("a")
            setTimeout(() => {
                this.value = 0;
            }, 5000);
            console.log("a")
        },
    },
}).mount("#app")