// src/App.tsx
import Galaxy from "@components/Galaxy"; 

function App(): JSX.Element {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        position: "relative",
        overflow: "hidden",
        backgroundColor: "black",
      }}
    >
      <Galaxy
        mouseRepulsion={true}
        mouseInteraction={true}
        density={1.5}
        glowIntensity={0.5}
        saturation={0.8}
        hueShift={240}
        transparent
      />

      {/* Texto centrado */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "white",
          fontSize: "2.5rem",
          fontWeight: "bold",
          textAlign: "center",
          pointerEvents: "none",
        }}
      >
        Welcome to my first Deploy en Vercel
        <div
          style={{
            fontSize: "1.5rem",
            fontWeight: "lighter", // "lighter" es válido en CSS
          }}
        >
          sigue el tutorial en el campus!
        </div>
      </div>
    </div>
  );
}

export default App;
