import { ModalDef } from "@ebay/nice-modal-react";
import React from "react";
import { globalModalId } from "./GlobalModalPortal.constants";
import SuccessModal from "../SuccessModal";
import ErrorModal from "../ErrorModal";

const GlobalModalPortal = () => {
  return (
    <>
      <ModalDef id={globalModalId.SUCCESS} component={SuccessModal} />
      <ModalDef id={globalModalId.ERROR} component={ErrorModal} />
    </>
  );
};

export default GlobalModalPortal;
