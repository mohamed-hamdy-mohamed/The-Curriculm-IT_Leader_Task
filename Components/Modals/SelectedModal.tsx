interface SelectedModalProps {
  selectedPdf: string | null;
  setSelectedPdf: (pdfUrl: string | null) => void;
}

const SelectedModal = ({ selectedPdf, setSelectedPdf }: SelectedModalProps) => {
  return (
    <div>
      {selectedPdf && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative h-[90vh] w-[90vw] rounded-lg bg-white">
            <button
              onClick={() => setSelectedPdf(null)}
              className="absolute right-4 top-4 rounded bg-red-500 px-3 py-1 text-white"
            >
              ✕
            </button>

            <iframe src={selectedPdf} className="h-full w-full rounded-lg" />
          </div>
        </div>
      )}
    </div>
  );
};

export default SelectedModal;
