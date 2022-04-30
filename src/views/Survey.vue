<template>
    <div v-if="currentScene('Survey')">
        <Form
            :title="getLabel('survey_title')"
            :propQuestions="surveyQuestions"
            saveFunction="saveSurveyDecisions"
            :disclaimer="getLabel('likert_disclaimer')"
        />
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    computed: {
        surveyQuestions() {
            let options = this.getLabel("likert_options")
            return {
                s1: {
                    title: this.getLabel("s1_title"),
                    options: options,
                },
                s2: {
                    title: this.getLabel("s2_title"),
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
