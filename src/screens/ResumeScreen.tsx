import { useEffect, useRef } from "react";
import PDFObject from "pdfobject";


export function ResumeScreen() {
    const pdfRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (pdfRef.current) {
            PDFObject.embed("public/resume.pdf", pdfRef.current); // Replace with your PDF URL or local path
        }
    }, []);

    return <div ref={pdfRef} style={{ height: "100vh" }} />;
}
