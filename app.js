const app = Vue.createApp({
    data() {
        return {
            goal: "Find a framework",
            link: "",
            text: "",
            number: 0,
            name: ""
        }
    },
    methods: {
        rollDice() {
            this.number = Math.random(0, 1)
            if (this.number > 0.75) {
                this.goal = "Learn Vue v2"
                this.text = "Vue v2"
                this.link = "https://vuejs.org/"
            }
            else if (this.number > 0.5) {
                this.goal = "Learn Vue v3"
                this.text = "Vue v3"
                this.link = "https://v3.vuejs.org/"
            }
            else if (this.number > 0.25) {
                this.goal = "Learn React"
                this.text = "React"
                this.link = "https://reactjs.org/"
            }
            else {
                this.goal = "Learn Angular"
                this.text = "Angular"
                this.link = "https://angular.io/"
            }
        },
    }
}).mount("#user-goal")