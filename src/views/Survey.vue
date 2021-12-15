<template>
    <div
        class="full"
        v-if="this.$store.getters.isCurrentStage(this.$options.name)"
    >
        <Form
            :propQuestions="this.$store.getters.getSurveyQuestions"
            :title="this.$options.name"
            :saveFunction="`save${this.$options.name}Decisions`"
        />
    </div>
</template>

<script>
import Form from "../components/ui/Form.vue";
export default {
    name: "Survey",
    components: {
        Form,
    },
};
</script>