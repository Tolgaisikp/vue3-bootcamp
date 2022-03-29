const app = Vue.createApp({
    data() {
        return {
            bgColor: false,
            border: false,
            color: false,
            fontBold: false,
            borderRadius: false,
            fontItalic: false,
        }
    },
    computed: {
        style() {
            return { 'border': this.border, 'bg-color': this.bgColor, 'color': this.color, 'font-bold': this.fontBold, 'border-radius': this.borderRadius, 'font-italic': this.fontItalic }
        }
    }
}).mount("#app")