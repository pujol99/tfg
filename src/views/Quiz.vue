<template>
    <div
        class="full"
        v-if="isCurrentStage(this.$options.name)"
    >
        <Form
            :propQuestions="getQuizQuestions"
            :title="this.$options.name"
            :saveFunction="`save${this.$options.name}Decisions`"
        />
    </div>
</template>

<script>
import Form from "../components/ui/Form.vue";
import { mapGetters } from "vuex";
export default {
    name: "Quiz",
    components: {
        Form,
    },
    computed: {
        ...mapGetters(["isCurrentStage", "getQuizQuestions"]),
    },
};
</script>
