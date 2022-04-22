import '@google/model-viewer';
import { useState } from 'react';
import Link from './Link';

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

const Model = () => {
  const [year, setYear] = useState(2021);
  return (
    <div>
      <div className="text-sm">
        <label>Select the year: </label>
        <select
          defaultValue={2021}
          onChange={(e) => setYear(Number(e.currentTarget.value))}
          className="p-1"
        >
          <option value={2021}>2021</option>
          <option value={2022}>2022</option>
        </select>
      </div>
      <div id="card">
        <model-viewer
          src={year === 2021 ? './github-2021.gltf' : './github-2022.gltf'}
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
      <p className="mt-3 text-sm font-light">
        3D model courtesy- {' '}
        <Link
          href="https://skyline.github.com/ayush6624/2021"
          label="GitHub Skyline"
          style
        />{' '}
      </p>
    </div>
  );
};

export default Model;
