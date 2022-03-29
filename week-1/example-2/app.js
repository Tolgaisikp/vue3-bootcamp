const app = Vue.createApp({
    data() {
        return {
            value1: "deneme1",
            value2: "deneme2"
        }
    },
    methods: {
        showAlert() {
            alert('Bu bir alert')
        },
        keyDownEvent(event) {
            this.value1 = event.target.value
        },
        keyDownEnterEvent(event) {
            this.value2 = event.target.value
        }
    },
}).mount("#app")