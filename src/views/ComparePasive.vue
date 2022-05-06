<template>
    <div v-if="currentScene(`${this.prefix}ComparePasive`)">
        <Form
            :propQuestions="questions"
            :title="getLabel('comparePasive_title')"
            formType="comparePasiveDecisions"
            :disclaimer="getLabel('ratePasive_disclaimer')"
        />
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    props: ["prefix"],
    computed: {
        questions() {
            let options = ["1", "2", "3", "4", "5"];
            let qs = {};
            qs[`${this.prefix}uploadInstaPhoto`] = {
                title: this.getLabel("comparePasive_1"),
                options: options,
            };
            qs[`${this.prefix}TikTok`] = {
                title: this.getLabel("comparePasive_2"),
                options: options,
            };
            qs[`${this.prefix}getNotifs`] = {
                title: this.getLabel("comparePasive_3"),
                options: options,
            };

            return qs;
        },
        ...mapGetters({
            currentScene: "stages/isCurrentStage",
            getLabel: "data/getLabel",
        }),
    },
};
</script>
