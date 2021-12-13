<template>
    <div
        class="full"
        v-if="this.$store.getters.isCurrentStage(this.$options.name)"
    >
        <div class="card">
            <Message ref="message" message="Answer the questions"/>
            <div class="card-container">
                <div class="card-title">
                    <h2>Quiz</h2>
                </div>
                <div class="card-body">
                    <form>
                        <div class="form-element">
                            <div class="form-element-title">
                                Select your gender
                            </div>
                            <div
                                class="form-element-option spaced"
                                v-for="option in genderOptions"
                                :key="option"
                                @click="genderOption = option"
                                :class="{ selected: option == genderOption }"
                            >
                                {{ option }}
                            </div>
                        </div>
                        <div class="form-element">
                            <div class="form-element-title">
                                Select your age
                            </div>
                            <div
                                class="form-element-option spaced"
                                v-for="option in ageOptions"
                                :key="option"
                                @click="ageOption = option"
                                :class="{ selected: option == ageOption }"
                            >
                                {{ option }}
                            </div>
                        </div>
                        
                    </form>
                </div>
                <div class="card-action">
                    <button @click="onContinue">Continue</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Message from "../components/ui/Message.vue";
export default {
    name: "Quiz",
    components: {
        Message,
    },
    data() {
        return {
            user: this.$store.state.userData,
            ageOptions: ["10-", "11-15", "15-19", "20+"],
            ageOption: null,
            genderOptions: ["Male", "Female", "Other"],
            genderOption: null,
        };
    },
    computed: {
        dataValidated: function () {
            return (
                this.ageOptions.includes(this.ageOption) &&
                this.genderOptions.includes(this.genderOption)
            );
        },
    },
    methods: {
        onContinue: function () {
            if (!this.dataValidated) {
                this.$refs.message.onActivate();
                return;
            }
            this.$store.state.userData = this.user;
            this.$store.dispatch("nextStage");
        },
    },
};
</script>
