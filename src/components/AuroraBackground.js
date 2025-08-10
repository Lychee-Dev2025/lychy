import React, { useRef, useEffect } from 'react';

// Wavy Aurora GLSL fragment shader as a string
const fragShader = `
precision highp float;
uniform float u_time;
uniform vec2 u_resolution;

// Aurora colors
vec3 auroraColor1 = vec3(0.67, 0.08, 0.15); // #ab0d26
vec3 auroraColor2 = vec3(0.925, 0.18, 0.333); // #ec2f55
vec3 auroraColor3 = vec3(0.39, 0.14, 0.05); // #64240c

float wavy(float x, float y, float t, float freq, float speed, float amp) {
    return amp * sin(x * freq + t * speed + y * 2.0 + cos(y * 2.0 + t * 0.5));
}

void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution.xy;
    uv.y = 1.0 - uv.y;
    float t = u_time * 0.7;
    float y = uv.y * 1.5;
    float x = uv.x * 2.0;

    // Multiple wavy bands
    float band1 = wavy(x, y, t, 2.0, 1.2, 0.18);
    float band2 = wavy(x, y, t + 2.0, 3.0, 1.7, 0.12);
    float band3 = wavy(x, y, t - 1.5, 1.3, 0.9, 0.09);
    float band = band1 + band2 + band3;

    float center = 0.45 + 0.25 * sin(t * 0.3);
    float mask = smoothstep(center - 0.18, center + 0.18, y + band);
    float edge = smoothstep(center + 0.18, center + 0.22, y + band);

    vec3 color = mix(auroraColor1, auroraColor2, uv.x + 0.2 * sin(t + y * 2.0));
    color = mix(color, auroraColor3, 0.5 + 0.5 * sin(t + x * 1.5));
    color *= mask;
    color += edge * 0.25;
    color = mix(color, vec3(1.0), 1.0 - smoothstep(0.0, 0.5, y)); // fade to white at top
    gl_FragColor = vec4(color, mask * 0.85);
}
`;

function AuroraBackground() {
  const canvasRef = useRef(null);
  const animRef = useRef();
  const glRef = useRef();
  const programRef = useRef();
  const startTimeRef = useRef(performance.now());

  useEffect(() => {
    const canvas = canvasRef.current;
    const gl = canvas.getContext('webgl');
    glRef.current = gl;
    // Compile shader
    function compileShader(type, source) {
      const shader = gl.createShader(type);
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        throw new Error(gl.getShaderInfoLog(shader));
      }
      return shader;
    }
    // Vertex shader (simple quad)
    const vertShader = `
      attribute vec2 a_position;
      void main() {
        gl_Position = vec4(a_position, 0, 1);
      }
    `;
    const vs = compileShader(gl.VERTEX_SHADER, vertShader);
    const fs = compileShader(gl.FRAGMENT_SHADER, fragShader);
    const program = gl.createProgram();
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      throw new Error(gl.getProgramInfoLog(program));
    }
    programRef.current = program;
    gl.useProgram(program);
    // Quad
    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([
        -1, -1,
        1, -1,
        -1, 1,
        -1, 1,
        1, -1,
        1, 1,
      ]),
      gl.STATIC_DRAW
    );
    const posLoc = gl.getAttribLocation(program, 'a_position');
    gl.enableVertexAttribArray(posLoc);
    gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);
    // Uniforms
    const uTime = gl.getUniformLocation(program, 'u_time');
    const uRes = gl.getUniformLocation(program, 'u_resolution');
    // Resize
    function resize() {
      const dpr = window.devicePixelRatio || 1;
      const w = canvas.parentElement.offsetWidth;
      const h = canvas.parentElement.offsetHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + 'px';
      canvas.style.height = h + 'px';
      gl.viewport(0, 0, canvas.width, canvas.height);
    }
    resize();
    window.addEventListener('resize', resize);
    // Animation
    function render() {
      const now = performance.now();
      const t = (now - startTimeRef.current) / 1000;
      gl.useProgram(program);
      gl.uniform1f(uTime, t);
      gl.uniform2f(uRes, canvas.width, canvas.height);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
      animRef.current = requestAnimationFrame(render);
    }
    render();
    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  );
}

export default AuroraBackground; 