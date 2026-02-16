"use client";

import { ShaderGradientCanvas, ShaderGradient } from "@shadergradient/react";

export default function ShaderBackground() {
  const shaderProps: any = {
    animate: "on",
    axesHelper: "off",
    bgColor1: "#000000",
    bgColor2: "#000000",
    brightness: 1.2,
    cAzimuthAngle: 180,
    cDistance: 2.41,
    cPolarAngle: 95,
    cameraZoom: 1,
    color1: "#000209",
    color2: "#ec4899",
    color3: "#f59e0b",
    destination: "onCanvas",
    embedMode: "off",
    envPreset: "city",
    format: "gif",
    fov: 45,
    frameRate: 10,
    gizmoHelper: "hide",
    grain: "on",
    lightType: "3d",
    pixelDensity: 1,
    positionX: 0,
    positionY: -2.1,
    positionZ: 0,
    range: "disabled",
    rangeEnd: 40,
    rangeStart: 0,
    reflection: 0.1,
    rotationX: 0,
    rotationY: 0,
    rotationZ: 225,
    shader: "defaults",
    type: "waterPlane",
    uAmplitude: 0,
    uDensity: 1.8,
    uFrequency: 5.5,
    uSpeed: 0.2,
    uStrength: 3,
    uTime: 0.2,
    wireframe: false,
    zoomOut: false
  };

  return (
    <div className="fixed inset-0 z-[-10] w-full h-full pointer-events-none bg-black overflow-hidden">
      <ShaderGradientCanvas>
        <ShaderGradient {...shaderProps} />
      </ShaderGradientCanvas>
      {/* Camada de desfoque para não atrapalhar a leitura do site */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
    </div>
  );
}