import React, { useState } from "react";
import CircleIcon from "@mui/icons-material/Circle";
import CloseIcon from "@mui/icons-material/Close";
import PaletteIcon from "@mui/icons-material/Palette";
import { FormControl, IconButton, Input, InputLabel } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { SketchPicker, ChromePicker } from "react-color";
import { v4 as uuidv4 } from "uuid";

function Theme(props) {
  const [theme, addTheme] = useState([
    { id: "", color: "#B55D79", light: "", medium: "", dark: "" },
  ]);
  const [color, setColor] = useState();
  const handleTheme = (id, color) => {
    addTheme((arr) => [...arr, { id: id, color: color }]);
  };

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
            {theme.map((elem) => (
              <div>
                <IconButton>
                  <CircleIcon style={{ color: elem.color }} />
                </IconButton>
              </div>
            ))}
            <div style={{ display: "none" }}>
              <IconButton>
                <AddCircleOutlineIcon />
              </IconButton>
            </div>
            <div style={{ width: "100%" }}>
              <ChromePicker
                disableAlpha={true}
                styles={{
                  default: { picker: { width: "100%", boxShadow: "none" } },
                }}
                onChangeComplete={(color) => {
                  setColor(color.hex);
                }}
                color={color}
              />
              <div className="picker_buttons">
                <button>CANCEL</button>
                <button
                  onClick={() => {
                    handleTheme(uuidv4(), color);
                  }}
                >
                  ADD
                </button>
              </div>
            </div>
          </div>
        </div>
        <br></br>
        <div className="theme_background_color">
          <div>
            <p>BACKGROUND COLOR</p>
            <div>
              <IconButton>
                <CircleIcon />
              </IconButton>
              <IconButton>
                <CircleIcon />
              </IconButton>
              <IconButton>
                <CircleIcon />
              </IconButton>
              <IconButton>
                <CircleIcon />
              </IconButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Theme;
