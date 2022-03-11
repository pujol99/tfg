export var vs = `
varying vec2 vUv;

void main()
{
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);
    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectionPosition = projectionMatrix * viewPosition;

    gl_Position = projectionPosition;

    vUv = uv;
}
`;
export var fs = `
    #define PI 3.14
    varying vec2 vUv;

    uniform float uTime;
    uniform sampler2D uTexture;

    vec4 scanLineIntensity(float uv, float resolution, float opacity)
    {
        float intensity = sin(uv * resolution * PI * 2.0 * uTime);
        intensity = ((0.5 * intensity) + 0.5) * 0.9 + 0.1;
        return vec4(vec3(pow(intensity, opacity)), 1.0);
    }

    void main(void)
    {
        vec4 baseColor = texture2D(uTexture, vUv);
        if (vUv.x < 0.0 || vUv.y < 0.0 || vUv.x > 1.0 || vUv.y > 1.0){
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        } else {
            baseColor *= scanLineIntensity(vUv.x, 50.0, 0.5);
            baseColor *= scanLineIntensity(vUv.y, 20.0, 0.5);
            gl_FragColor = baseColor;
        }
    }
`;