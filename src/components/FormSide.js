import React from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import TextField from "@mui/icons-material/TextFields";
import ImageIcon from "@mui/icons-material/Image";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import ViewStreamIcon from "@mui/icons-material/ViewStream";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
function FormSide(props) {
  return (
    <div className="formSide_container">
      <div className="formSide_container_content">
        <div className="formSide_icon">
          <AddCircleOutlineIcon onClick={() => props.section} />
        </div>
        <div className="formSide_icon">
          <UploadFileIcon />
        </div>
        <div className="formSide_icon">
          <TextField />
        </div>
        <div className="formSide_icon">
          <ImageIcon />
        </div>
        <div className="formSide_icon">
          <OndemandVideoIcon />
        </div>
        <div className="formSide_icon">
          <ViewStreamIcon />
        </div>
      </div>
    </div>
  );
}

export default FormSide;
