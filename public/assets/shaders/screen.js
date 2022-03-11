export var vs = `
varying vec2 vUv;
varying vec3 vNormal;

void main()
{
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);
    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectionPosition = projectionMatrix * viewPosition;

    gl_Position = projectionPosition;

    vUv = uv;
    vNormal = normal;
}
`;
export var fs = `
    varying vec2 vUv;
    varying vec3 vNormal;

    uniform float uTime;
    uniform sampler2D uTexture;

    void main() {

        vec4 tex = texture2D(uTexture, vUv);
        float stepValue = 1.0 - abs(sin(uTime* 0.5))*0.7;
        tex.x = step(stepValue, tex.x);
        tex.y = step(stepValue, tex.y);
        tex.z = step(stepValue, tex.z);
        gl_FragColor = vec4(tex.xyz, 1.0);
    }
`;