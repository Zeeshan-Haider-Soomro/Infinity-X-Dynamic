import { createContext, useState, useContext } from "react";

const TalkModalContext = createContext();

export const TalkModalProvider = ({ children }) => {
  const [isTalkModalOpen, setIsTalkModalOpen] = useState(false);

  const openTalkModal = () => setIsTalkModalOpen(true);
  const closeTalkModal = () => setIsTalkModalOpen(false);

  return (
    <TalkModalContext.Provider value={{ isTalkModalOpen, openTalkModal, closeTalkModal }}>
      {children}
    </TalkModalContext.Provider>
  );
};

export const useTalkModal = () => useContext(TalkModalContext);
