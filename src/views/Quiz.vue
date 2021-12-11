<template>
    <div v-if="this.$store.getters.isCurrentScene(this.$options.name)">

        <div class="center spaced">
            <h2>Quiz</h2>
            <input v-model="user.name" placeholder="Name" />
            <br />
            <input v-model="user.surname" placeholder="Surname" />

            <button @click="sendUser">Send</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "Quiz",
    data() {
        return {
            user: {
                name: "",
                surname: "",
            },
        };
    },
    computed: {
        fullname: function () {
            return this.user.name + " " + this.user.surname;
        },
    },
    methods: {
        sendUser: function () {
            this.$store.commit('saveData', {
                data: JSON.stringify(this.user),
                collection: this.$store.state.usersCollection
            })
        },
    },
};
</script>
