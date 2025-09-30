import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// src/App.tsx
import Galaxy from "@components/Galaxy";
function App() {
    return (_jsxs("div", { style: {
            width: "100%",
            height: "100vh",
            position: "relative",
            overflow: "hidden",
            backgroundColor: "black",
        }, children: [_jsx(Galaxy, { mouseRepulsion: true, mouseInteraction: true, density: 1.5, glowIntensity: 0.5, saturation: 0.8, hueShift: 240, transparent: true }), _jsxs("div", { style: {
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    color: "white",
                    fontSize: "2.5rem",
                    fontWeight: "bold",
                    textAlign: "center",
                    pointerEvents: "none",
                }, children: ["Welcome to my first Deploy en Vercel", _jsx("div", { style: {
                            fontSize: "1.5rem",
                            fontWeight: "lighter", // "lighter" es válido en CSS
                        }, children: "sigue el tutorial en el campus!" })] })] }));
}
export default App;
