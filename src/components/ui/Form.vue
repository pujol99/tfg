<template>
    <div class="card">
        <Popup ref="message" message="Fill answers please" />
        <div class="card-container">
            <div class="card-title">
                <h2>{{title}}</h2>
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
                            v-for="option in questions[question]
                                .options"
                            :key="option"
                            @click="
                                questions[question].optionSelected =
                                    option
                            "
                            :class="{
                                selected:
                                    option ==
                                    questions[question].optionSelected,
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
</template>

<script>
import Popup from "./Popup.vue";
export default {
    name: "Form",
    components: {
        Popup,
    },
    props: {
        propQuestions: {
            type: Object,
        },
        title: {
            type: String,
        },
        saveFunction: {
            type: String
        }
    },
    created() {
        this.questions = this.propQuestions
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
        onContinue: function () {
            if (!this.dataValidated) {
                this.$refs.message.onActivate();
                return;
            }

            for (var key of Object.keys(this.questions)) {
                this.questions[key] =
                    this.questions[key].optionSelected;
            }
            this.$store.commit(this.saveFunction, this.questions);
            this.$store.dispatch("nextStage");
        },
    },
};
</script>
