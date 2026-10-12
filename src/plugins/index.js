import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { SplitText } from "gsap/SplitText";

// All animations must share the same GSAP instance. The previous setup mixed
// npm GSAP with older plugin files from /public, so production builds could not
// see ScrollTrigger even though it appeared to be registered.
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);
}

export { gsap as Gsap, ScrollTrigger, ScrollSmoother, SplitText };

// Keep other plugins
export { default as WebGL } from "../../public/assets/plugins/webgl.js";
export { default as THREE } from "../../public/assets/plugins/three.js";
export { default as chroma } from "../../public/assets/plugins/charming.js";
