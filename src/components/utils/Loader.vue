<template>
    <LoadingScreen ref="loadingScreen" />
    <LoadBlender ref="blender" :path="toLoad.blender"/>
    <LoadFBX ref="fbx" :models="toLoad.fbx" />
</template>

<script>
import LoadingScreen from "../ui/LoadingScreen.vue";
import LoadBlender from "../utils/LoadBlender.vue";
import LoadFBX from "../utils/LoadFBX.vue";
export default {
    components: {
        LoadBlender,
        LoadFBX,
        LoadingScreen,
    },
    props: {
        toLoad: Object,
    },
    mounted() {
        this.blender = this.$refs.blender;
        this.fbx = this.$refs.fbx;
        this.loadingScreen = this.$refs.loadingScreen;

        // It ables to only call loading screen finish once
        this.onePass = true;
    },
    methods: {
        init(scene) {
            this.blender.init(scene);
            this.fbx.init();
        },
        update() {
            if(this.toLoad.fbx) this.fbx.update();
            this.loadingScreen.update();

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
