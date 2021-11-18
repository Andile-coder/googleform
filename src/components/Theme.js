import React, { useState } from "react";
import PaletteIcon from "@mui/icons-material/Palette";
import CloseIcon from "@mui/icons-material/Close";
import { FormControl, IconButton, Input, InputLabel } from "@mui/material";

function Theme(props) {
  const [theme, addTheme] = useState([1]);

  return (
    <div className="theme_container">
      <div className="theme_content">
        <div className="theme_header">
          <div>
            <IconButton>
              <PaletteIcon onClick={() => props.handlePopup()} />
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
              <IconButton>
                <PaletteIcon />
              </IconButton>
            ))}
            <div className="formControl">
              <label for="color">+</label>
              <input
                id="color"
                type="color"
                value="transparent"
                defaultValue="red"
                style={{
                  borderRadius: "50%",
                  fontSize: "24px",
                  width: "24px",
                  height: "24px",
                  backgroundColor: "black",
                  display: "none",
                  visibility: "none",
                }}
                placeholder="red"
                onClick={(e) => (e.target.value = null)}
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
