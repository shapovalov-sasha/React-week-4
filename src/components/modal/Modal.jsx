import { Dialog } from "@mui/material";

const Modal = (props) => {
  return (
    <Dialog open={props.isOpen} onClose={props.onClose}>
      {props.children}
    </Dialog>
  );
};

export default Modal;
