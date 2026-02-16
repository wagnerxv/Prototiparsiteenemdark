"use client";

import { ShaderGradientCanvas, ShaderGradient } from "@shadergradient/react";

export default function ShaderBackground() {
  return (
    <div className="fixed inset-0 z-[-10] w-full h-full pointer-events-none bg-black">
      <ShaderGradientCanvas>
        <ShaderGradient
          control="query"
          urlString="https://www.shadergradient.co/customize?animate=on&axesHelper=off&bgColor1=%23000000&bgColor2=%23000000&brightness=0.8&cAzimuthAngle=180&cDistance=2.8&cPolarAngle=80&cameraZoom=9.1&color1=%23ec4899&color2=%2310b981&color3=%23f59e0b&envPreset=city&fov=50&gizmoHelper=hide&grain=on&lightType=3d&pixelDensity=1.5&positionX=-0.5&positionY=0&positionZ=0&reflection=0.1&type=water&wireframe=false"
        />
      </ShaderGradientCanvas>
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
    </div>
  );
}