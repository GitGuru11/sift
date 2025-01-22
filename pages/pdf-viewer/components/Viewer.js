"use client";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import styles from "../index.module.css";
 
// Import the styles
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";

const FileViewer = ({ pdfUrl }) => {
    const newPlugin = defaultLayoutPlugin();
    // console.log(styles);
  return (
    <section className={`viewerWrapper bg-white padding-medium-top`}>  
    <div className="container">
        <div style={{ height: '750px' }}>
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
            <Viewer fileUrl={pdfUrl} plugins={[newPlugin]} />
          </Worker>
        </div>
      </div>
    </section>
  );
};

export default FileViewer;
