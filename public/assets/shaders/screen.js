export var vs = `
varying vec2 vUv;
uniform float uTime;
varying float vTime;

void main()
{
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);
    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectionPosition = projectionMatrix * viewPosition;

    gl_Position = projectionPosition;
    vUv = uv;
    vTime = uTime;
}
`;
export var fs = `
varying vec2 vUv;
varying float vTime;

void main()
{
    float strength = 1.0 - step(sin(0.6), sin(20.0));
    gl_FragColor = vec4(vec3(1.0), 1.0);
}
`;