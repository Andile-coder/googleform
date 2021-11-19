import React, { useState } from "react";
import PaletteIcon from "@mui/icons-material/Palette";
import CloseIcon from "@mui/icons-material/Close";
import { FormControl, IconButton, Input, InputLabel } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { SketchPicker } from "react-color";
function Theme(props) {
  const [theme, addTheme] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 91, 2, 3, 45, 6, 7, 7, 8, 5, 5, 5, 5, 5, 5, 5, 5, 5,
    5, 5, 5476, 75, 67, 568, 654, 6476, 324, 4, 4, 4, 4, 4,
  ]);
  const handleColor = () => {};
  return (
    <div className="theme_container">
      <div className="theme_content">
        <div className="theme_header">
          <div>
            <IconButton>
              <PaletteIcon />
            </IconButton>
          </div>
          <div>
            <p>Theme options</p>
          </div>
          <div>
            <IconButton>
              <CloseIcon onClick={() => props.handlePopup()} />
            </IconButton>
          </div>
        </div>
        <br></br>
        <div className="theme_color">
          <div>
            <p>THEME COLOR</p>
          </div>
          <div className="theme_color_colors">
            {theme.map(() => (
              <div style={{ display: "none" }}>
                <IconButton>
                  <PaletteIcon />
                </IconButton>
              </div>
            ))}
            <div style={{ display: "none" }}>
              <IconButton>
                <AddCircleOutlineIcon />
              </IconButton>
            </div>
            <div style={{ display: "block" }}>
              <SketchPicker
                onChange={handleColor}
                size="small"
                style={{ width: "50px", heigth: "50px" }}
              />
            </div>
          </div>
        </div>
        <br></br>
        <div className="theme_background_color">
          <div>
            <p>BACKGROUND COLOR</p>
            <div>
              <IconButton>
                <PaletteIcon />
              </IconButton>
              <IconButton>
                <PaletteIcon />
              </IconButton>
              <IconButton>
                <PaletteIcon />
              </IconButton>
              <IconButton>
                <PaletteIcon />
              </IconButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Theme;
