<template>
    <Renderer ref="renderer" resize="window" orbitCtrl pointer>
        <PerspectiveCamera :position="{ z: 10 }" />
        <Scene background="#000000">
            <AmbientLight :intensity="0.5" />
            <InstancedMesh
                v-for="social in socials"
                :key="social"
                :ref="social"
                :count="NUM_INSTANCES"
            >
                <BoxGeometry />
                <StandardMaterial>
                    <Texture :src="`./assets/images/${social}.png`" />
                </StandardMaterial>
            </InstancedMesh>
        </Scene>
    </Renderer>
</template>

<script>
import { MathUtils, Object3D, Vector3 } from "three";
const { randFloat: rnd, randFloatSpread: rndFS } = MathUtils;
export default {
    setup() {
        const NUM_INSTANCES = 6;
        const socials = ["instagram", "facebook", "twitter", "whatsapp"];

        const instances = [];
        for (let j = 0; j < socials.length; j++) {
            var iInstances = [];
            for (let i = 0; i < NUM_INSTANCES; i++) {
                iInstances.push({
                    position: new Vector3(rndFS(10), rndFS(10), rndFS(10)),
                    scale: rnd(0.8, 1),
                    velocity: new Vector3(1),
                    attraction: 0.0001 + rnd(0.0005, 0.001),
                    vlimit: rnd(0.06, 0.08),
                });
            }
            instances.push(iInstances);
        }
        return {
            NUM_INSTANCES,
            instances,
            target: new Vector3(),
            dummyO: new Object3D(),
            dummyV: new Vector3(),
            socials,
        };
    },
    mounted() {
        this.renderer = this.$refs.renderer;
        this.meshes = this.socials.map((social) => this.$refs[social].mesh);

        this.init();
    },
    methods: {
        init() {
            for (let j = 0; j < this.socials.length; j++) {
                for (let i = 0; i < this.NUM_INSTANCES; i++) {
                    const { position, scale } = this.instances[j][i];
                    this.dummyO.position.copy(position);
                    this.dummyO.scale.set(scale, scale, scale);
                    this.dummyO.updateMatrix();
                    this.meshes[j].setMatrixAt(i, this.dummyO.matrix);
                }
                this.meshes[j].instanceMatrix.needsUpdate = true;
            }
            // start animation
            this.renderer.onBeforeRender(this.animate);
        },
        animate() {
            //formula to compute next cube position
            const { pointer } = this.renderer.three;
            this.target.copy(pointer.positionV3);

            for (let j = 0; j < this.socials.length; j++) {
                for (let i = 0; i < this.NUM_INSTANCES; i++) {
                    const { position, scale, velocity, attraction, vlimit } =
                        this.instances[j][i];
                    this.dummyV
                        .copy(this.target)
                        .sub(position)
                        .normalize()
                        .multiplyScalar(attraction);
                    velocity.add(this.dummyV).clampScalar(-vlimit, vlimit);
                    position.add(velocity);
                    this.dummyO.position.copy(position);
                    this.dummyO.scale.set(scale, scale, scale);
                    this.dummyO.lookAt(
                        this.dummyV.copy(position).add(velocity)
                    );
                    this.dummyO.updateMatrix();
                    this.meshes[j].setMatrixAt(i, this.dummyO.matrix);
                }
                this.meshes[j].instanceMatrix.needsUpdate = true;
            }
        },
    },
};
</script>
