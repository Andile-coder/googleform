import React, { useState } from "react";
import CircleIcon from "@mui/icons-material/Circle";
import CloseIcon from "@mui/icons-material/Close";
import PaletteIcon from "@mui/icons-material/Palette";
import { FormControl, IconButton, Input, InputLabel } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { SketchPicker, ChromePicker } from "react-color";
import { v4 as uuidv4 } from "uuid";
import { LightenDarkenColor } from "lighten-darken-color";

function Theme(props) {
  const [themes, setThemes] = useState(false);
  const handleThemes = () => {
    setThemes(!themes);
  };
  return (
    <div className="theme_container">
      <div className="theme_content">
        <div className="theme_header">
          <div>
            <IconButton>
              <PaletteIcon style={{ color: props.color.color }} />
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
            <div style={{ display: themes ? "none" : "block" }}>
              {props.theme.map((elem) => (
                <IconButton size="small">
                  <CircleIcon
                    className="color_icons"
                    style={{ color: elem.color, fontSize: "30px" }}
                    onClick={() => {
                      props.setColor({
                        color: elem.color,
                        light: elem.light,
                        medium: elem.medium,
                        dark: elem.dark,
                      });
                    }}
                  />
                </IconButton>
              ))}
              <IconButton>
                <AddCircleOutlineIcon onClick={() => handleThemes()} />
              </IconButton>
            </div>
            <div style={{ width: "100%", display: themes ? "block" : "none" }}>
              <ChromePicker
                disableAlpha={true}
                styles={{
                  default: { picker: { width: "100%", boxShadow: "none" } },
                }}
                onChangeComplete={(color) => {
                  props.setColor({
                    color: color.hex,
                  });
                }}
                color={props.color.color}
              />
              <div className="picker_buttons">
                <button onClick={() => handleThemes()}>CANCEL</button>
                <button
                  onClick={() => {
                    props.handleTheme(uuidv4(), props.color);
                    handleThemes();
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
              {props.backgrounds.map((elem) => (
                <IconButton>
                  <CircleIcon
                    style={{ color: elem.color }}
                    onClick={() => props.handleBackground(elem.color)}
                  />
                </IconButton>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Theme;
