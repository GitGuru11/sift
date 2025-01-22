import React from 'react';
import FileViewer from './components/Viewer';
import PDFViewer from 'pdf-viewer-reactjs'

export default function PDFFViewer() {
    return(
<>
        <PDFViewer
            document={{
                url: 'https://media.sift.com/app/uploads/2024/02/California-Recruiting-Privacy-Notice-240126.pdf',
            }}
        />


        <FileViewer pdfUrl="https://media.sift.com/app/uploads/2024/02/California-Recruiting-Privacy-Notice-240126.pdf" />
        </>
    );
}
