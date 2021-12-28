<template>
    <div v-if="currentScene('Survey')">
        <Form
            :title="getLabel('survey_title')"
            :propQuestions="surveyQuestions"
            saveFunction="saveSurveyDecisions"
        />
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    computed: {
        surveyQuestions() {
            return {
                s1: {
                    title: this.getLabel("s1_title"),
                    options: this.getLabel("survey_options"),
                },
                s2: {
                    title: this.getLabel("s2_title"),
                    options: this.getLabel("survey_options"),
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
