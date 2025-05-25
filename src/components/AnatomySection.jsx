import "@google/model-viewer";
import { useEffect, useRef } from "react";
import humanMuscle from "../assets/human-muscle.glb";

export default function AnatomySection() {
  const viewerRef = useRef(null);

  useEffect(() => {
    const viewer = viewerRef.current;

    const onLoad = () => {
      if (viewer?.model?.materials) {
        viewer.model.materials.forEach((material) => {
          material.pbrMetallicRoughness.setBaseColorFactor([0.8, 0.2, 0.2, 1]); // muscle red
        });
      }
    };

    viewer?.addEventListener("load", onLoad);
    return () => viewer?.removeEventListener("load", onLoad);
  }, []);

  return (
    <div className='anatomy-display' style={{ height: "100%" }}>
      <model-viewer
        ref={viewerRef}
        src={humanMuscle}
        alt='3D Human Muscle Anatomy'
        camera-controls
        environment-image='neutral'
        exposure='1'
        shadow-intensity='2'
        interaction-prompt='none'
        disable-zoom
        style={{ width: "100%", height: "100%" }}
      >
        <div
          className='anatomy-label qr-scanner'
          slot='hotspot-heart'
          data-position='2.5 3.5 0'
          data-normal='0 0 1'
        >
          <div className='scanner-row'>
            <div className='scanner-box'>
              <div className='scan-line'></div>
            </div>
            <span className='label-text'>Healthy Heart</span>
          </div>
        </div>

        <div
          className='anatomy-label qr-scanner'
          slot='hotspot-leg'
          data-position='-2.5 -3.2 0'
          data-normal='0 0 1'
        >
          <div className='scanner-row'>
            <span className='label-text'>Healthy Leg</span>
            <div className='scanner-box'>
              <div className='scan-line'></div>
            </div>
          </div>
        </div>
      </model-viewer>
    </div>
  );
}
