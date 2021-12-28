<template>
    <Popup ref="popup" :message="getLabel('popup')" />
    <div class="card-container">
        <div class="card-title">
            <h2>{{ title }}</h2>
        </div>
        <div class="card-body">
            <div
                class="form-element"
                v-for="question in Object.keys(questions)"
                :key="question"
            >
                <!-- form title -->
                <div class="form-element-title">
                    {{ questions[question].title }}
                </div>

                <!-- form options -->
                <div
                    class="form-element-option spaced"
                    v-for="(option, index) in questions[question].options"
                    :key="option"
                    @click="onDecisionClick(questions[question], option, index)"
                    :class="{
                        selected: option == questions[question].optionSelected,
                    }"
                >
                    {{ option }}
                </div>
            </div>
        </div>
        <div class="card-action">
            <button @click="onContinue">{{ getLabel("continue") }}</button>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
    name: "Form",
    props: {
        propQuestions: Object,
        title: String,
        saveFunction: String,
    },
    data() {
        // Convert to local questions
        return {
            questions: this.propQuestions,
        };
    },
    computed: {
        ...mapGetters({ getLabel: "data/getLabel" }),
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
                this.$refs.popup.activate();
                return;
            }
            this.saveData();
            this.nextStage();
        },
        saveData: function (){
            this.formatDataForSave();

            this.$store.commit(`data/${this.saveFunction}`, this.questions);
        },
        onDecisionClick: function (question, option, index) {
            question.optionSelected = option;
            question.optionSelectedIndex = index;
        },
        formatDataForSave: function () {
            // From { {question: title, options[]}, ...}
            // To { {question: optionSelected}, ...}
            for (var key of Object.keys(this.questions)) {
                this.questions[key] = this.questions[key].optionSelectedIndex;
            }
        },
    },
};
</script>
