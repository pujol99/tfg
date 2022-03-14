export var vs = `
varying vec2 vUv;
uniform float uTime;

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
    uniform vec2 uRes;

    vec2 curvature = vec2(7.);
    float scanLineOpacity = 0.1;
    float vignetteOpacity = 0.5;
    float brightness = 1.;
    float vignetteRoundness = 1.0;

    vec2 curveRemapUV(vec2 uv) {
        uv = uv * 2.0 - 1.0;
        vec2 offset = abs(uv.yx) / vec2(curvature.x, curvature.y);
        uv = uv + uv * offset * offset;
        uv = uv * 0.5 + 0.5;
        return uv;
    }

    vec4 scanLineIntensity(float uv, float resolution, float opacity) {
        float intensity = sin(uv * resolution * PI * 2.0);
        intensity = ((0.5 * intensity) + 0.5) * 0.9 + 0.1;
        return vec4(vec3(pow(intensity, opacity)), 1.0);
    }

    vec4 vignetteIntensity(vec2 uv, vec2 resolution, float opacity, float roundness) {
        float intensity = uv.x * uv.y * (1.0 - uv.x) * (1.0 - uv.y);
        return vec4(vec3(clamp(pow((resolution.x / roundness) * intensity, opacity), 0.0, 1.0)), 1.0);
    }
    
    void main(void)
    {
        vec2 remappedUV = curveRemapUV(vUv);
        vec4 baseColor = texture2D(uTexture, remappedUV);

        baseColor *= vignetteIntensity(remappedUV, uRes, vignetteOpacity, vignetteRoundness);

        float lineOpacity = scanLineOpacity;

        baseColor *= scanLineIntensity(remappedUV.x, uRes.y, lineOpacity);
        baseColor *= scanLineIntensity(remappedUV.y, uRes.x, lineOpacity);

        float strength = 1.2 - 0.6*distance(vUv.y, sin(uTime*1.5)*0.5+0.5);
        baseColor *= vec4(vec3(brightness*strength*strength), 1.0);

        if (remappedUV.x < 0.0 || remappedUV.y < 0.0 || remappedUV.x > 1.0 || remappedUV.y > 1.0){
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        } else {
            gl_FragColor = baseColor;
        }
    }
`;