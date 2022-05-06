<template>
    <div v-if="currentScene('Bergen')">
        <Form
            :propQuestions="questions"
            :title="getLabel('bergen_title')"
            formType="bergenDecisions"
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
                bergen1: {
                    title: this.getLabel("bergen_1"),
                    options: options,
                },
                bergen2: {
                    title: this.getLabel("bergen_2"),
                    options: options,
                },
                bergen3: {
                    title: this.getLabel("bergen_3"),
                    options: options,
                },
                bergen4: {
                    title: this.getLabel("bergen_4"),
                    options: options,
                },
                bergen5: {
                    title: this.getLabel("bergen_5"),
                    options: options,
                },
                bergen6: {
                    title: this.getLabel("bergen_6"),
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
