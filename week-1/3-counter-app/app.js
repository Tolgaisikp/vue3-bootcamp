const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            counter2: 0,
        }
    },
    methods: {
        getCounterResult() {
            console.log('1')
            return this.counter > 5 ? '5den Büyük' : '5den Küçük'
        },
        getCounter2Result() {
            console.log('2')
            return this.counter2 > 5 ? '5den Büyük' : '5den Küçük'
        },
        inc() { this.counter++ },
        des() { this.counter-- }
    },
    computed: { //ilgili yeri çalıştırır
        getCounterResult() {
            console.log('1')
            return this.counter > 5 ? '5den Büyük' : '5den Küçük'
        },
        getCounter2Result() {
            console.log('2')
            return this.counter2 > 5 ? '5den Büyük' : '5den Küçük'
        },
    },
    watch: { //datada bulunan veriyi direkt izlememizi sağlar değer değiştiğinde çalışır
        counter(newValue, oldValue) {
            console.log(newValue, oldValue)
        },
        getCounterResult(newValue, oldValue) {
            console.log(newValue, '->', oldValue)
        },
    }
}).mount('#app')