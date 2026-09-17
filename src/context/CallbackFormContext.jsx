import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
} from "react";
import { createPortal } from "react-dom";
import ContactForm from "../common/Form";
import formImage from "../assets/FormImage.jpeg";

// step 1 create context
const CallbackFormContext = createContext(null);

// step 2 create provider
export const CallbackFormProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openForm = useCallback(() => setIsOpen(true), []);
  const closeForm = useCallback(() => setIsOpen(false), []);

  // lock body scroll while modal is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // close on Escape
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => e.key === "Escape" && closeForm();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, closeForm]);

  return (
    <CallbackFormContext.Provider value={{ isOpen, openForm, closeForm }}>
      {children}

      {isOpen &&
        createPortal(
          <div
            className="fixed inset-0 z-999 flex items-center justify-center bg-white/20 backdrop-blur-sm px-4"
            onClick={closeForm}
          >
            <div
              className="relative text-white w-full max-w-5xl max-h-[90vh] sm:max-h-[85vh] scrollbar-hide p-6 overflow-y-auto rounded-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Mobile-only close button — inside the modal, top-right */}
              <button
                className="sm:hidden absolute top-4 right-4 z-10 text-black bg-white/80 rounded-full w-8 h-8 flex items-center justify-center"
                onClick={closeForm}
              >
                X
              </button>
              <ContactForm onSuccess={closeForm} />
            </div>
          </div>,
          document.body,
        )}
    </CallbackFormContext.Provider>
  );
};

// step 3 use context
export const useCallbackForm = () => {
  const ctx = useContext(CallbackFormContext);
  if (!ctx) {
    throw new Error("useCallbackForm must be used within CallbackFormProvider");
  }
  return ctx;
};
