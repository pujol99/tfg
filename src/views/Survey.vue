<template>
    <div class="full" v-if="isCurrentStage(this.$options.name)">
        <Form
            :propQuestions="getSurveyQuestions"
            :title="this.$options.name"
            :saveFunction="`save${this.$options.name}Decisions`"
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
        ...mapGetters(["getSurveyQuestions", "isCurrentStage"]),
    },
};
</script>
