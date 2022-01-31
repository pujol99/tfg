export const config = {
    Scene1: {
        sceneName: "scene1",
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
            { x: -1, y: 0.8, z: -1 },
            { x: 0, y: 0.0, z: 0 },
        ],
        cameraPositions: [
            { x: -3, y: 1, z: -3 },
            { x: -3, y: 2, z: -2 },
        ],
        update: function (gltf) {},
    },
    ///////////////////////////////////////////////////////////////
    Scene2: {
        sceneName: "scene2",
        fbx: [
            {
                path: "Walking",
                position: { x: 1, y: 0, z: 0 },
                scale: { x: 0.002, y: 0.002, z: 0.002 },
                rotation: { y: Math.PI * 2 * 0 },
            },
        ],
        cameraLookAts: [
            { x: 1.0, y: 0.49, z: 0.00 },
            { x: 1.01, y: 0.50, z: 0.01 },
            { x: 1.02, y: 0.51, z: 0.02 },
            { x: 1.03, y: 0.52, z: 0.03 },
        ],
        cameraPositions: [
            { x: 1.0, y: 0.50, z: 1.5 },
            { x: 0.0, y: 0.51, z: 0.0 },
            { x: 1.0, y: 0.52, z: -1.5 },
            { x: 2.0, y: 0.53, z: 0.0 },
        ],
        update: function (gltf) {
            gltf.rotation.y += 0.003;
        },
    },
    ///////////////////////////////////////////////////////////////
    Scene3: {
        sceneName: "scene3",
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
        cameraLookAts: [{ x: -1, y: 1, z: 0 }],
        cameraPositions: [{ x: 1.5, y: 1.0, z: 0.5 }],
        update: function (gltf) {},
    },
};
