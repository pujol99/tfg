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
    },
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
        cameraLookAts: [{ x: 1, y: 0.5, z: 0 }],
        cameraPositions: [{ x: 1, y: 0.5, z: 1.5 }],
    },
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
    },
};
