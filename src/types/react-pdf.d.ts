declare module 'react-pdf' {
  export const Document: React.FC<{ file: string; className?: string; children?: React.ReactNode }>;
  export const Page: React.FC<{ pageNumber: number; scale: number }>;
  export const pdfjs: {
    version: string;
    GlobalWorkerOptions: {
      workerSrc: string;
    };
  };
} 