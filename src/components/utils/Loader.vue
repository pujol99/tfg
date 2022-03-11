<template>
    <LoadingScreen ref="loadingScreen" />
    <LoadBlender ref="blender" :payload="payload" />
    <LoadFBX ref="fbx" :models="payload.fbx" />
</template>

<script>
import { mapGetters } from "vuex";
export default {
    props: {
        payload: Object,
    },
    computed: { ...mapGetters({ isSceneLoading: "stages/isSceneLoading" }) },
    mounted() {
        this.loadingScreen = this.$refs.loadingScreen;
        this.blender = this.$refs.blender;
        this.fbx = this.$refs.fbx;
    },
    methods: {
        update() {
            this.fbx.update();
            this.blender.update();

            if (this.isSceneLoading) this.loadingScreen.update();
            
            if (this.isSceneLoading && this.isLoaded())
                this.loadingScreen.finish();
        },
        isLoaded() {
            return this.blender.isLoaded && this.fbx.isLoaded;
        },
    },
};
</script>
