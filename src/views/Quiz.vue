<template>
    <div
        class="full"
        v-if="this.$store.getters.isCurrentStage(this.$options.name)"
    >
        <div class="card">
            <Message ref="message" message="Answer the questions" />
            <div class="card-container">
                <div class="card-title">
                    <h2>Quiz</h2>
                </div>
                <div class="card-body">
                    <form>
                        <div
                            class="form-element"
                            v-for="question in Object.keys(quizQuestions)"
                            :key="question"
                        >
                            <div class="form-element-title">
                                {{ quizQuestions[question].title }}
                            </div>
                            <div
                                class="form-element-option spaced"
                                v-for="option in quizQuestions[question]
                                    .options"
                                :key="option"
                                @click="
                                    quizQuestions[question].optionSelected =
                                        option
                                "
                                :class="{
                                    selected:
                                        option ==
                                        quizQuestions[question].optionSelected,
                                }"
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
            quizQuestions: this.$store.getters.getQuizQuestions,
        };
    },
    computed: {
        // Check that the options selected are valid options
        dataValidated: function () {
            return (
                Object.keys(this.quizQuestions).filter(
                    question =>
                        !this.quizQuestions[question].options.includes(
                            this.quizQuestions[question].optionSelected
                        )
                ).length == 0
            );
        },
    },
    methods: {
        onContinue: function () {
            if (!this.dataValidated) {
                this.$refs.message.onActivate();
                return;
            }

            for (var key of Object.keys(this.quizQuestions)) {
                this.quizQuestions[key] =
                    this.quizQuestions[key].optionSelected;
            }
            this.$store.commit("saveQuizDecisions", this.quizQuestions);
            this.$store.dispatch("nextStage");
        },
    },
};
</script>
