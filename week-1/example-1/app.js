const app = Vue.createApp({
    data() {
        return {
            name: "tolga",
            age: 23,
            img: "https://frpnet.net/wp-content/uploads/2020/07/The-Boys-Season-2.jpg",
            seo_keyword: "Boys"
        }
    },
    methods: {
        randomNumber() {
            return Math.random()
        }
    },
}).mount("#app")