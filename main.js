const vm = {
    data() {
        return {
            title: 'Twitter',
            item: '',
            items: [
                { 
                    id: 1,
                    body: 'Hello world',
                    like: 0,
                    dislike: 0,
                    avatar: `https://avatars.dicebear.com/api/male/1.svg`,
                    date: new Date(Date.now()).toLocaleString()
                },
                {
                    id: 2,
                    body: 'Hi, welcome',
                    like: 0,
                    dislike: 0,
                    avatar: `https://avatars.dicebear.com/api/male/2.svg`,
                    date: new Date(Date.now()).toLocaleString()
                }
            ]
        }
    },
    methods: {
        onSubmit() {
            this.items.push({
                id: this.items.length + 1,
                avatar: `https://avatars.dicebear.com/api/male/${Date.now()}.svg`,
                body: this.item,
                like: 0,
                dislike: 0,
                date: new Date(Date.now()).toLocaleString()
            });
            this.item = ''
        },
        deleteTweet(id) {
            this.items.splice(id, 1);
        },
        addLikes(tweet) {
            tweet.like++
        },
        addDislike(tweet) {
            tweet.dislike++
        }
    }
}

Vue.createApp(vm).mount('#app')