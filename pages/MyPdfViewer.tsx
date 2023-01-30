import { Viewer } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import { pdfjs } from "react-pdf";
import pdfjsWorker from "pdfjs-dist/build/pdf.worker.entry";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker;

const Pdf = () => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin({
    toolbarPlugin: {
      pageNavigationPlugin: {
        enableShortcuts: false,
      },
    },
  });
  return (
    <div style={{ width: "815px" }}>
      <Viewer fileUrl="/document.pdf" plugins={[defaultLayoutPluginInstance]} />
    </div>
  );
};

export default Pdf;
