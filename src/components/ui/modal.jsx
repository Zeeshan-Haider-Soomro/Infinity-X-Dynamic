export default function Modal({ children, onClose }) {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center">
            <div className="relative w-full max-w-3xl bg-black rounded-lg overflow-hidden">
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-white text-2xl z-10"
                >
                    &times;
                </button>
                {children}
            </div>
        </div>
    );
}
