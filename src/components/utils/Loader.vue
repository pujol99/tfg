<template>
    <LoadingScreen ref="loadingScreen" />
    <LoadBlender ref="blender" :path="toLoad.blender"/>
    <LoadFBX ref="fbx" :models="toLoad.fbx" />
</template>

<script>
import {  mapGetters } from "vuex";
import LoadBlender from "../utils/LoadBlender.vue";
import LoadFBX from "../utils/LoadFBX.vue";
export default {
    components: {
        LoadBlender,
        LoadFBX,
    },
    props: {
        toLoad: Object,
    },
    computed: {
        ...mapGetters({ isSceneLoading: "stages/isSceneLoading" }),
    },
    mounted() {
        this.blender = this.$refs.blender;
        this.fbx = this.$refs.fbx;
        this.loadingScreen = this.$refs.loadingScreen;

        // It ables to only call loading screen finish once
        this.onePass = true;
    },
    methods: {
        update() {
            if(this.toLoad.fbx) this.fbx.update();

            if(this.isSceneLoading) this.loadingScreen.update();

            if (this.onePass && this.isLoaded()) {
                this.loadingScreen.finish();
                this.onePass = false;
            }
        },
        isLoaded() {
            return this.blender.isLoaded && this.fbx.isLoaded;
        },
    },
};
</script>
