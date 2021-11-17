import React from "react";
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

function Header() {
  return (
    <div className="container_header">
      <div className="container_header_box-1">
        <div className="container_header_box-1a-icons">
          <div className="header_icon">
            <InsertDriveFile />
          </div>
          <div className="header_icon">
            <h3>Test</h3>
          </div>
          <div className="header_icon">
            <AddtoDriveIcon />
          </div>
          <div className="header_icon">
            <StarBorderIcon />
          </div>
          <div className="header_icon">
            <p>All changes saved to drive</p>
          </div>
        </div>
        <div className="container_header_box-1b-icons">
          <div className="header_icon">
            <PaletteIcon />
          </div>
          <div className="header_icon">
            <VisibilityIcon />
          </div>
          <div className="header_icon">
            <UndoIcon />
          </div>
          <div className="header_icon">
            <RedoIcon />
          </div>
          <div className="header_icon">
            <Button variant="contained">SEND</Button>
          </div>
          <div className="header_icon">
            <MoreVertIcon />
          </div>
          <div className="header_icon">
            <AccountCircle />
          </div>
        </div>
      </div>
      <div className="container_header_box-2">
        <div className="container_header_box-2-pages">
          <div className="container_header_box-2-pages-pg">Questions</div>
          <div className="container_header_box-2-pages-pg">Responses</div>
          <div className="container_header_box-2-pages-pg">Settings</div>
        </div>
      </div>
    </div>
  );
}

export default Header;
