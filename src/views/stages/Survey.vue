<template>
    <div v-if="currentScene('Survey')">
        <Form
            :propQuestions="getSurveyQuestions"
            title="Final survey"
            saveFunction="saveSurveyDecisions"
        />
    </div>
</template>

<script>
import Form from "../../components/ui/Form.vue";
import { mapGetters } from "vuex";
export default {
    components: {
        Form,
    },
    computed: {
        ...mapGetters({
            currentScene: "stages/isCurrentStage",
            getSurveyQuestions: "data/getSurveyQuestions",
        }),
    },
};
</script>
