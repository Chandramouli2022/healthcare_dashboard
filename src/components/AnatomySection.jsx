import "@google/model-viewer";
import humanMuscle from "../assets/human-muscle.glb";

export default function AnatomySection() {
  return (
    <section className="anatomy-section">
        <model-viewer
          src={humanMuscle}
          alt="3D Human Muscle Anatomy"
          auto-rotate
          camera-controls
          interaction-prompt="none"
          style={{ width: "100%", height: "100%" }}
        ></model-viewer>
    </section>
  );
}
