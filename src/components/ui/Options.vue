<template>
    <div>
        <div class="title">
            <Option :message="information.title" disabled />
        </div>
        <div class="options">
            <i
                @click="isExpanded = !isExpanded"
                class="material-icons icon hided"
                :class="{ active: !sceneLoading}"
            >
                {{ icon }}
            </i>
            <div class="options_content" :class="{ expanded: isExpanded }">
                <Option
                    v-for="(option, index) in information.options"
                    :key="option"
                    :message="option"
                    :index="index"
                />
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    props: ["information"],
    data() {
        return {
            isExpanded: true,
        };
    },
    computed: {
        ...mapGetters({ sceneLoading: "stages/isSceneLoading" }),
        icon: function () {
            return this.isExpanded ? "expand_more" : "expand_less";
        },
    },
};
</script>