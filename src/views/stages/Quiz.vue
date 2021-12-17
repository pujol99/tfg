<template>
    <div v-if="currentScene('Quiz')">
        <Form
            :propQuestions="getQuizQuestions"
            title="About you"
            saveFunction="saveQuizDecisions"
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
            getQuizQuestions: "data/getQuizQuestions",
        }),
    },
};
</script>
