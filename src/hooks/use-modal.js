import { useState } from "react";

const useModal = () => {
  const [showModal, setShowModal] = useState(false);

  return showModal;
};

export default useModal;
