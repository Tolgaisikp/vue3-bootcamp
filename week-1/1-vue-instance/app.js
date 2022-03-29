const app = Vue.createApp({
    data(){
        return{
            title:"Vue.js BootCamp",
            content:"Lorem ipsum dolor sit amet..",
            google:{title:"Müfredat ve açıklamalar için tıklayınız",
                    target:"_blank",
                    url:"https://google.com",
                    alt:"mufredat-kablosuzkedi-vue-bootcamp"
                },
            coords:{
                eventTitle:'',
                x:0,
                y:0
            },
        };
    },
    methods: {
        changeTitle(pTitle){
            this.title = pTitle //  this ile bu vue instance içindeki verilere ulaşır
        },
        updateCoords(eventTitle, event){
            console.log(eventTitle, event.offsetX , event.offsetY )
            this.changeTitle(`(${event.offsetX},${event.offsetY})`)
            this.coords ={
                eventTitle:eventTitle,
                x:event.offsetY,
                y:event.offsetX
            }
        }
    },
}).mount("#app")

