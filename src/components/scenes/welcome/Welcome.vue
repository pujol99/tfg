<template>
    <Renderer ref="renderer" resize="window" orbitCtrl>
        <PerspectiveCamera
            :position="{ z: 20 }" 
        />
        <Scene background="#000000">
            <AmbientLight :intensity="0.5" />

            <InstancedMesh ref="imeshInstagram" :count="NUM_INSTANCES">
                <BoxGeometry/>
                <StandardMaterial>
                    <Texture src="./assets/images/instagram.png" />
                </StandardMaterial>
            </InstancedMesh>
            <InstancedMesh ref="imeshFacebook" :count="NUM_INSTANCES">
                <BoxGeometry/>
                <StandardMaterial>
                    <Texture src="./assets/images/facebook.png" />
                </StandardMaterial>
            </InstancedMesh>
        </Scene>
    </Renderer>
</template>

<script>
import { MathUtils, Object3D, Vector3 } from 'three';
const { randFloat: rnd, randFloatSpread: rndFS } = MathUtils;
export default {
    setup() {
        const NUM_INSTANCES = 5;
        const instancesI = [];
        const instancesF = [];
        const target = new Vector3();
        const dummyO = new Object3D();
        const dummyV = new Vector3();
        for (let i = 0; i < NUM_INSTANCES; i++) {
            instancesI.push({
                position: new Vector3(rndFS(10), rndFS(10), rndFS(10)),
                scale: rnd(0.8, 1),
                velocity: new Vector3(1),
                attraction: 0.0015 + rnd(0, 0.001),
                vlimit: rnd(0.1, 0.15),
            });
            instancesF.push({
                position: new Vector3(rndFS(10), rndFS(10), rndFS(10)),
                scale: rnd(0.8, 1),
                velocity: new Vector3(1),
                attraction: 0.0015 + rnd(0, 0.001),
                vlimit: rnd(0.1, 0.15),
            });
        }
        return {
            NUM_INSTANCES,
            instancesI,
            instancesF,
            target,
            dummyO,
            dummyV,
        };
    },
    mounted() {
        this.renderer = this.$refs.renderer;
        this.imeshI = this.$refs.imeshInstagram.mesh;
        this.imeshF = this.$refs.imeshFacebook.mesh;
        this.init();
    },
    methods: {
        init() {
            for (let i = 0; i < this.NUM_INSTANCES; i++) {
                const { position, scale } = this.instancesI[i];
                this.dummyO.position.copy(position);
                this.dummyO.scale.set(scale, scale, scale);
                this.dummyO.updateMatrix();
                this.imeshI.setMatrixAt(i, this.dummyO.matrix);
            }
            for (let i = 0; i < this.NUM_INSTANCES; i++) {
                const { position, scale } = this.instancesF[i];
                this.dummyO.position.copy(position);
                this.dummyO.scale.set(scale, scale, scale);
                this.dummyO.updateMatrix();
                this.imeshF.setMatrixAt(i, this.dummyO.matrix);
            }
            this.imeshI.instanceMatrix.needsUpdate = true;
            this.imeshF.instanceMatrix.needsUpdate = true;
            // animate
            this.renderer.onBeforeRender(this.animate);
        },
        animate() {
            const { pointer } = this.renderer.three;
            this.target.copy(pointer.positionV3)
            for (let i = 0; i < this.NUM_INSTANCES; i++) {
                const { position, scale, velocity, attraction, vlimit } = this.instancesI[i];
                this.dummyV.copy(this.target).sub(position).normalize().multiplyScalar(attraction);
                velocity.add(this.dummyV).clampScalar(-vlimit, vlimit);
                position.add(velocity);
                this.dummyO.position.copy(position);
                this.dummyO.scale.set(scale, scale, scale);
                this.dummyO.lookAt(this.dummyV.copy(position).add(velocity));
                this.dummyO.updateMatrix();
                this.imeshI.setMatrixAt(i, this.dummyO.matrix);
            }
            for (let i = 0; i < this.NUM_INSTANCES; i++) {
                const { position, scale, velocity, attraction, vlimit } = this.instancesF[i];
                this.dummyV.copy(this.target).sub(position).normalize().multiplyScalar(attraction);
                velocity.add(this.dummyV).clampScalar(-vlimit, vlimit);
                position.add(velocity);
                this.dummyO.position.copy(position);
                this.dummyO.scale.set(scale, scale, scale);
                this.dummyO.lookAt(this.dummyV.copy(position).add(velocity));
                this.dummyO.updateMatrix();
                this.imeshF.setMatrixAt(i, this.dummyO.matrix);
            }
            this.imeshI.instanceMatrix.needsUpdate = true;
            this.imeshF.instanceMatrix.needsUpdate = true;
    },
    },
};
</script>
