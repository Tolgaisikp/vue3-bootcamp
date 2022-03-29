const app = Vue.createApp({
    data() {
        return {
            showBorder: true,
            showRedBg: true,
            boxClass: "border",
            bgColor: "cyan"
        }
    },
    computed: {
        boxClasses() {
            return { border: this.showBorder, red: this.showRedBg }
        }
    },
})

app.mount("#app")