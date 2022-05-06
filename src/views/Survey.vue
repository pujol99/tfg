<template>
    <div v-if="currentScene('Survey')">
        <Form
            :title="getLabel('survey_title')"
            :propQuestions="questions"
            formType="surveyDecisions"
            :disclaimer="getLabel('likert_disclaimer')"
        />
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    computed: {
        questions() {
            let options = ["1", "2", "3", "4", "5"];
            return {
                survey_1: {
                    title: this.getLabel("survey_1"),
                    options: options,
                },
                survey_2: {
                    title: this.getLabel("survey_2"),
                    options: options,
                },
            };
        },
        ...mapGetters({
            currentScene: "stages/isCurrentStage",
            getLabel: "data/getLabel",
        }),
    },
};
</script>
