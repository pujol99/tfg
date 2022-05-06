<template>
    <div v-if="currentScene(`${this.prefix}CompareAddictive`)">
        <Form
            :propQuestions="questions"
            :title="getLabel('compareAddictive_title')"
            formType="compareAddictiveDecisions"
            :disclaimer="getLabel('rateAddictive_disclaimer')"
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
                title: this.getLabel("compareAddictive_1"),
                options: options,
            };
            qs[`${this.prefix}TikTok`] = {
                title: this.getLabel("compareAddictive_2"),
                options: options,
            };
            qs[`${this.prefix}getNotifs`] = {
                title: this.getLabel("compareAddictive_3"),
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
