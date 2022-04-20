import '@google/model-viewer';

interface ModelViewerJSX {
  src: string;
  poster?: string;
  alt?: string;
  ar?: boolean;
  'ar-modes'?: string;
  orientation?: string;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'model-viewer': ModelViewerJSX &
        React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}

const Model = () => (
  <div id="card">
    <model-viewer
      src="./github-2021.gltf"
      ios-src=""
      poster="https://skyline.github.com/ayush6624/2021.png"
      alt="Ayush's Github contribution"
      shadow-intensity="1"
      camera-controls
      camera-target="0m 0m 0m"
      orientation="-10deg -100deg 10deg"
      ar
      environment-image="https://modelviewer.dev/shared-assets/environments/aircraft_workshop_01_1k.hdr"
      ar-modes="webxr scene-viewer quick-look"
    ></model-viewer>
  </div>
);

export default Model;
