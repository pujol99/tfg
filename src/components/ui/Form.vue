<template>
    <Popup ref="message" message="Fill answers please" />
    <div class="card-container">
        <div class="card-title">
            <h2>{{ title }}</h2>
        </div>
        <div class="card-body">
            <form>
                <div
                    class="form-element"
                    v-for="question in Object.keys(questions)"
                    :key="question"
                >
                    <div class="form-element-title">
                        {{ questions[question].title }}
                    </div>
                    <div
                        class="form-element-option spaced"
                        v-for="option in questions[question].options"
                        :key="option"
                        @click="questions[question].optionSelected = option"
                        :class="{
                            selected:
                                option == questions[question].optionSelected,
                        }"
                    >
                        {{option}}
                    </div>
                </div>
            </form>
        </div>
        <div class="card-action">
            <button @click="onContinue">Continue</button>
        </div>
    </div>
</template>

<script>
//@click="questions[question].optionSelected = option"
import { mapActions } from "vuex";
import Popup from "./Popup.vue";
export default {
    name: "Form",
    components: {
        Popup,
    },
    props: {
        propQuestions: Object,
        title: String,
        saveFunction: String,
    },
    data() {
        return {
            questions: this.propQuestions
        }
    },
    computed: {
        // Check that the options selected are valid options
        dataValidated: function () {
            return (
                Object.keys(this.questions).filter(
                    question =>
                        !this.questions[question].options.includes(
                            this.questions[question].optionSelected
                        )
                ).length == 0
            );
        },
    },
    methods: {
        ...mapActions({ nextStage: "stages/nextStage" }),
        onContinue: function () {
            if (!this.dataValidated) {
                // activate popup warning
                this.$refs.message.activate();
                return;
            }

            this.formatDataForSave()

            // Save decisions
            this.$store.commit(`data/${this.saveFunction}`, this.questions);

            this.nextStage();
        },
        formatDataForSave: function () {
            // From { {question: title, options[]}, ...}
            // To { {question: optionSelected}, ...}
            for (var key of Object.keys(this.questions)) {
                this.questions[key] = this.questions[key].optionSelected;
            }
        },
    },
};
</script>
