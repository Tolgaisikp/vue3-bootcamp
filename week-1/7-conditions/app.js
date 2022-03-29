const app = Vue.createApp({
    data() {
        return {
            showContainer: false,
            counter: 5
        }
    },
    computed: {
        counterBoxClasses() {
            return { 'bg-primary text-white': this.counter > 5, 'bg-danger text-white': this.counter < 5 }
        }
    },
})

app.mount("#app")