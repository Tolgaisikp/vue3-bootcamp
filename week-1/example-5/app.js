const app = Vue.createApp({
    data() {
        return {
            comments: [{
                    comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint deserunt, tempore accusamus iusto nobis dolore ratione itaque perferendis delectus? Nostrum corporis, quod voluptates quis consequuntur eveniet beatae dolor aperiam ad.",
                    likes: 10,
                    dislikes: 5
                },
                {
                    comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint deserunt, tempore accusamus iusto nobis dolore ratione itaque perferendis delectus? Nostrum corporis, quod voluptates quis consequuntur eveniet beatae dolor aperiam ad.",
                    likes: 11,
                    dislikes: 6
                },
                {
                    comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint deserunt, tempore accusamus iusto nobis dolore ratione itaque perferendis delectus? Nostrum corporis, quod voluptates quis consequuntur eveniet beatae dolor aperiam ad.",
                    likes: 12,
                    dislikes: 7
                },
                {
                    comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint deserunt, tempore accusamus iusto nobis dolore ratione itaque perferendis delectus? Nostrum corporis, quod voluptates quis consequuntur eveniet beatae dolor aperiam ad.",
                    likes: 13,
                    dislikes: 8
                },
            ]
        }
    },
    methods: {
        likeComment(likes, index) {
            this.comments[index].likes = likes + 1;
        },
        dislikeComment(dislikes, index) {
            this.comments[index].dislikes = dislikes + 1;
        }
    },
}).mount("#app")