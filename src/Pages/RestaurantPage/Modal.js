import React from "react";

import { ModalBody, ModalContainer } from "./style";

const Modal = ({ children }) => {
  return (
    <ModalBody>
      <ModalContainer>
        <div className="content">{children}</div>
      </ModalContainer>
    </ModalBody>
  );
};

export default Modal;
