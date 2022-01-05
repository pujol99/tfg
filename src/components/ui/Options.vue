<template>
    <div>
        <div v-if="sceneLoading" class="description">
            <h1>{{information.description}}</h1>
        </div>
        <div class="title">
            <Option :message="information.title" disabled />
        </div>
        <div class="options">
            <div class="icons">
                <i class="material-icons icon hided"></i>
                <i
                    @click="isExpanded = !isExpanded"
                    class="material-icons icon hided"
                    :class="{ active: !sceneLoading}"
                >
                    {{ icon }}
                </i>
                <i class="material-icons icon hided"
                   :class="{ active: !sceneLoading }"
                   @click="this.$store.commit('stages/nextCamera')">
                    360
                </i>
            </div>
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
        ...mapGetters({ sceneLoading: "stages/isSceneLoading", currentCamera: "stages/getSceneCamera" }),
        icon: function () {
            return this.isExpanded ? "expand_more" : "expand_less";
        },
    },
};
</script>