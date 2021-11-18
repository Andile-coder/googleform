import React, { useState } from "react";
import AddtoDriveIcon from "@mui/icons-material/AddToDrive";
import InsertDriveFile from "@mui/icons-material/InsertDriveFile";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import PaletteIcon from "@mui/icons-material/Palette";
import VisibilityIcon from "@mui/icons-material/Visibility";
import UndoIcon from "@mui/icons-material/Undo";
import RedoIcon from "@mui/icons-material/Redo";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Button, MenuItem, Select } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import { IconButton } from "@mui/material";

function CHeader(props) {
  return (
    <div className="form_header">
      <div className="form_header_left">
        <InsertDriveFile
          className="form_header_icon"
          style={{ height: "45px", width: "40px" }}
        />
        <input placeholder="Untitled Form"></input>
        <AddtoDriveIcon className="form_header_icon" />
        <StarBorderIcon className="form_header_icon" />
        <span>All changes saved to drive</span>
      </div>
      <div className="form_header_right">
        <IconButton>
          <PaletteIcon
            className="form_header_icon"
            onClick={() => props.handlePopup()}
          />
        </IconButton>
        <IconButton>
          <VisibilityIcon className="form_header_icon" />
        </IconButton>
        <IconButton>
          <UndoIcon className="form_header_icon" />
        </IconButton>
        <IconButton>
          <RedoIcon className="form_header_icon" />
        </IconButton>
        <Button variant="contained" color="primary">
          SEND
        </Button>
        <IconButton>
          <MoreVertIcon className="form_header_icon" />
        </IconButton>
        <IconButton>
          <AccountCircle className="form_header_icon" />
        </IconButton>
      </div>
    </div>
  );
}

export default CHeader;
