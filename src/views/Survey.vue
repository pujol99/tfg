<template>
    <div class="full" v-if="this['stages/isCurrentStage'](this.$options.name)">
        <Form
            :propQuestions="this['data/getSurveyQuestions']"
            :title="this.$options.name"
            saveFunction="saveSurveyDecisions"
        />
    </div>
</template>

<script>
import Form from "../components/ui/Form.vue";
import { mapGetters } from "vuex";
export default {
    name: "Survey",
    components: {
        Form,
    },
    computed: {
        ...mapGetters(["data/getSurveyQuestions", "stages/isCurrentStage"]),
    },
};
</script>
