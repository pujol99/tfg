<template>
    <div
        class="full"
        v-if="this['stages/isCurrentStage'](this.$options.name)"
    >
        <Form
            :propQuestions="this['data/getQuizQuestions']"
            :title="this.$options.name"
            saveFunction="saveQuizDecisions"
        />
    </div>
</template>
f
<script>
import Form from "../components/ui/Form.vue";
import { mapGetters } from "vuex";
export default {
    name: "Quiz",
    components: {
        Form,
    },
    computed: {
        ...mapGetters(["stages/isCurrentStage", "data/getQuizQuestions"]),
    },
};
</script>
