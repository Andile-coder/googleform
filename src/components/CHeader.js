import React, { useState } from "react";
import AddtoDriveIcon from "@mui/icons-material/AddToDrive";
import InsertDriveFile from "@mui/icons-material/InsertDriveFile";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import PaletteIcon from "@mui/icons-material/Palette";
import VisibilityIcon from "@mui/icons-material/Visibility";
import UndoIcon from "@mui/icons-material/Undo";
import RedoIcon from "@mui/icons-material/Redo";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Button } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import DescriptionIcon from "@mui/icons-material/Description";

function CHeader(props) {
  return (
    <div className="form_header">
      <div className="form_header_left">
        <DescriptionIcon
          className="form_header_icon"
          style={{ height: "55px", width: "50px", color: "#673ab7" }}
        />
        <input placeholder="Untitled Form"></input>
        <IconButton>
          {" "}
          <AddtoDriveIcon id="drive" className="form_header_icon" />
        </IconButton>
        <IconButton>
          {" "}
          <StarBorderIcon id="star" className="form_header_icon" />
        </IconButton>

        <span>All changes saved to drive</span>
      </div>
      <div className="form_header_right">
        <IconButton>
          <PaletteIcon
            id="header_palette"
            className="form_header_icon"
            onClick={() => props.handlePopup()}
          />
        </IconButton>
        <IconButton>
          <VisibilityIcon id="visibility" className="form_header_icon" />
        </IconButton>
        <IconButton>
          <UndoIcon className="form_header_icon" />
        </IconButton>
        <IconButton>
          <RedoIcon id="redo" className="form_header_icon" />
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
