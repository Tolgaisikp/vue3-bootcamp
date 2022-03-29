const app = Vue.createApp({
    data() {
        return {}
    },
})

app.component("counter-item", {
    data() {
        return {
            counter: 0
        }
    },
    template: `
    <div class="container-sm">
        <h3>{{counter}}</h3>
        <button @click="counter++" class="green sm">+</button>
        <button @click="counter--" class="red sm">-</button>
    </div>
    `
})
app.mount("#app")