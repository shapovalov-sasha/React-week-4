import {
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  DialogContentText,
} from "@mui/material";

const ModalContent = (props) => {
  return (
    <>
      <DialogTitle id="alert-dialog-title">
        {"Use Google's location service?"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Let Google help apps determine location. This means sending anonymous
          location data to Google, even when no apps are running.
        </DialogContentText>
      </DialogContent>

      <DialogActions>
        <Button onClick={props.handleClose}>Disagree</Button>
        <Button onClick={props.handleClose} autoFocus>
          Agree
        </Button>
      </DialogActions>
    </>
  );
};

export default ModalContent;
