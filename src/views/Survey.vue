<template>
    <div v-if="this.$store.getters.isCurrentStage(this.$options.name)" class="full">
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
                            v-for="question in Object.keys(surveyQuestions)"
                            :key="question"
                        >
                            <div class="form-element-title">
                                {{ surveyQuestions[question].title }}
                            </div>
                            <div
                                class="form-element-option spaced"
                                v-for="option in surveyQuestions[question]
                                    .options"
                                :key="option"
                                @click="
                                    surveyQuestions[question].optionSelected =
                                        option
                                "
                                :class="{
                                    selected:
                                        option ==
                                        surveyQuestions[question].optionSelected,
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
    name: "Survey",
    components: {
        Message,
    },
    data() {
        return {
            surveyQuestions: this.$store.getters.getSurveyQuestions,
        };
    },
    computed: {
        // Check that the options selected are valid options
        dataValidated: function () {
            return (
                Object.keys(this.surveyQuestions).filter(
                    question =>
                        !this.surveyQuestions[question].options.includes(
                            this.surveyQuestions[question].optionSelected
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

            for (var key of Object.keys(this.surveyQuestions)) {
                this.surveyQuestions[key] =
                    this.surveyQuestions[key].optionSelected;
            }
            this.$store.commit("saveSurveyDecisions", this.surveyQuestions);
            this.$store.dispatch("nextStage");
        },
    },
};
</script>
