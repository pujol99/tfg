export const config = {
    Scene1: {
        gltf: {
            name: "home",
            update: function (gltf) {},
        },
        fbx: [
            {
                path: "Texting",
                position: { x: -0.3, y: 0, z: -1.3 },
                scale: { x: 0.002, y: 0.002, z: 0.002 },
                rotation: { y: Math.PI * 2 * 0.75 },
            },
            {
                path: "Sitting Talking Right",
                position: { x: -1, y: 0.15, z: -1 },
                scale: { x: 0.002, y: 0.002, z: 0.002 },
                rotation: { y: Math.PI * 2 * 0.25 },
            },
            {
                path: "Sitting Talking Left",
                position: { x: -1, y: 0.15, z: -0.6 },
                scale: { x: 0.002, y: 0.002, z: 0.002 },
                rotation: { y: Math.PI * 2 * 0.25 },
            },
        ],
        cameraLookAts: [
            { x: 0.0, y: 0.5, z: -1.0 },
            { x: -0.7, y: 0.4, z: -1.0 },
            { x: -0.7, y: 0.3, z: -1.0 },
        ],
        cameraPositions: [
            { x: -3, y: 1, z: -2 },
            { x: -1, y: 1, z: -3 },
            { x: -1, y: 2, z: -3 },
        ],
    },
    ///////////////////////////////////////////////////////////////
    Scene2: {
        gltf: {
            name: "bus",
            update: function (gltf) {},
        },
        envMap: "bus",
        fbx: [
            {
                path: "Texting",
                position: { x: -0.5, y: 0, z: -0 },
                scale: { x: 0.002, y: 0.002, z: 0.002 },
                rotation: { y: Math.PI * 2 * 0.75 },
            },
            {
                path: "Sitting Talking Right",
                position: { x: -2.1, y: 0.45, z: -0.4 },
                scale: { x: 0.002, y: 0.002, z: 0.002 },
                rotation: { y: Math.PI * 2 * 0.25 },
            },
            {
                path: "Sitting Talking Left",
                position: { x: -2.1, y: 0.45, z: -0.0 },
                scale: { x: 0.002, y: 0.002, z: 0.002 },
                rotation: { y: Math.PI * 2 * 0.25 },
            },
        ],
        cameraLookAts: [
            { x: -1, y: 1, z: 0 },
            { x: -2, y: 0.8, z: 0 },
        ],
        cameraPositions: [
            { x: 1.5, y: 1.0, z: 0.5 },
            { x: 1.5, y: 1.0, z: -0.5 },
        ],
    },
    ///////////////////////////////////////////////////////////////
    Scene3: {
        gltf: {
            name: "school",
            update: function (gltf) {
                gltf.rotation.y += 0.003;
            },
        },
        fbx: [
            {
                path: "Walking",
                position: { x: 1, y: 0, z: 0 },
                scale: { x: 0.002, y: 0.002, z: 0.002 },
                rotation: { y: Math.PI * 2 * 0 },
            },
        ],
        cameraLookAts: [
            { x: 1.0, y: 0.49, z: 0.0 },
            { x: 1.01, y: 0.5, z: 0.01 },
            { x: 1.02, y: 0.51, z: 0.02 },
            { x: 1.03, y: 0.52, z: 0.03 },
        ],
        cameraPositions: [
            { x: 1.0, y: 0.5, z: 1.5 },
            { x: 0.0, y: 0.51, z: 0.0 },
            { x: 1.0, y: 0.52, z: -1.5 },
            { x: 2.0, y: 0.53, z: 0.0 },
        ],
    },
    ///////////////////////////////////////////////////////////
    Scene4: {
        gltf: {
            name: "phone",
            update: function (gltf) {},
        },
        cameraLookAts: [
            { x: 0, y: 0.5, z: 0 },
            { x: 0.05, y: 0.55, z: 0.05 },
        ],
        cameraPositions: [
            { x: 0.3, y: 0.5, z: 0.9 },
            { x: -0.3, y: 0.51, z: 0.91 },
        ],
    },
    ////////////////////////////////////////////////////////////////
    Scene5: {
        gltf: {
            name: "study",
            update: function (gltf) {},
        },
        fbx: [
            {
                path: "Typing",
                position: { x: 0.17, y: 0.15, z: 0.35 },
                scale: { x: 0.002, y: 0.002, z: 0.002 },
                rotation: { y: Math.PI * 2 * 0.5 },
            },
        ],
        cameraLookAts: [
            { x: 0.0, y: 0.5, z: 0 },
            { x: 0.1, y: 0.52, z: 0.1 },
        ],
        cameraPositions: [
            { x: -0.6, y: 1, z: 1 },
            { x: -0.4, y: 0.6, z: 0.5 },
        ],
    },
    ////////////////////////////////////////////////////////////////
    Scene6: {
        gltf: {
            name: "phone",
            update: function (gltf) {},
        },
        cameraLookAts: [
            { x: 0, y: 0.5, z: 0 },
            { x: 0.05, y: 0.55, z: 0.05 },
        ],
        cameraPositions: [
            { x: 0.3, y: 0.5, z: 0.9 },
            { x: -0.3, y: 0.51, z: 0.91 },
        ],
    },
};
