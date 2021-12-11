<template>
    <div v-if="this.$store.getters.isCurrentStage(this.$options.name)">
        <div class="center spaced">
            <h2>Quiz</h2>
            <label for="gender">Select your gender</label>
            <select v-model="user.gender" id="gender">
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
            </select>
            <br />
            <input type="number" v-model="user.age" placeholder="Age" min="3" max="99"/>

            <button @click="onContinue">Continue</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "Quiz",
    data() {
        return {
            user: this.$store.state.userData,
        };
    },
    created() {
        
    },
    methods: {
        onContinue: function() {
            this.$store.state.userData = this.user;
            this.$store.dispatch('nextStage');
        }
    },
};
</script>
