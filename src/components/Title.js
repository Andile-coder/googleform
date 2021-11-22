import React, { useEffect, useState } from "react";
import { Accordion, FormControl, FormHelperText, Input } from "@mui/material";
import { Select } from "@mui/material";
import SubjectIcon from "@mui/icons-material/Subject";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import Radio from "@mui/icons-material/RadioButtonChecked";
import ShortTextIcon from "@mui/icons-material/ShortText";
import CloseIcon from "@mui/icons-material/Close";
import { TextField } from "@mui/material";
import Form from "./Form";
import { v4 as uuidv4 } from "uuid";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import ImageIcon from "@mui/icons-material/Image";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import ViewStreamIcon from "@mui/icons-material/ViewStream";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import TaskIcon from "@mui/icons-material/Task";
import Theme from "./Theme";
import { IconButton } from "@mui/material";

import { LightenDarkenColor } from "lighten-darken-color";
function Title(props) {
  const [forms, addForm] = useState([]);
  // handle form header
  const handleDuplicate = (newId, duplicantId, i) => {
    let index = forms.indexOf(forms.find((elem) => elem.id === duplicantId));
    let newArr = [...forms];
    const options = [...newArr[index].options];
    let duplicate = {
      id: newId,
      questionText: newArr[index].questionText,
      questionType: newArr[index].questionType,
      options: options,
    };
    newArr.splice(index, 0, duplicate);
    addForm(newArr);
    changeTitleSb(false);
  };
  const handleQuestionType = (id, value) => {
    let index = forms.indexOf(forms.find((elem) => elem.id === id));
    let newArr = [...forms];
    newArr[index].questionType = value;
    addForm(newArr);
  };
  const handleQuestionText = (id, value) => {
    let index = forms.indexOf(forms.find((elem) => elem.id === id));
    let newArr = [...forms];
    newArr[index].questionText = value;
    addForm(newArr);
  };

  //handle multiple choice functions
  const multipleChoiceAdd = (formId, option) => {
    let index = forms.indexOf(forms.find((elem) => elem.id === formId));
    let newArr = [...forms];
    newArr[index].options.push(option);
    addForm(newArr);
  };
  const multipleChoiceDel = (id, optionId) => {
    let index = forms.indexOf(forms.find((elem) => elem.id === id));
    let newArr = [...forms];
    let filter = newArr[index].options.filter((item) => item.id !== optionId);
    newArr[index].options = filter;
    //display last element
    addForm(newArr);
  };
  const multipleChoiceUpdate = (id, value, optionId) => {
    let index = forms.indexOf(forms.find((elem) => elem.id === id));
    let newArr = [...forms];
    let index2 = newArr[index].options.indexOf(
      newArr[index].options.find((elem) => elem.id === optionId)
    );
    newArr[index].options[index2].option = value;
    addForm(newArr);
  };
  //handle check box fuctions
  const checkboxAdd = (id, option) => {
    let index = forms.indexOf(forms.find((elem) => elem.id === id));
    let newArr = [...forms];
    newArr[index].options.push(option);
    addForm(newArr);
  };
  const checkboxDel = (id, optionId) => {
    let index = forms.indexOf(forms.find((elem) => elem.id === id));
    let newArr = [...forms];
    let filter = newArr[index].options.filter((item) => item.id !== optionId);
    newArr[index].options = filter;
    addForm(newArr);
  };
  const checkboxUpdate = (id, value, optionId) => {
    let index = forms.indexOf(forms.find((elem) => elem.id === id));
    let newArr = [...forms];
    let index2 = newArr[index].options.indexOf(
      newArr[index].options.find((elem) => elem.id === optionId)
    );
    newArr[index].options[index2].option = value;
    addForm(newArr);
  };

  const [file, setFile] = useState([]);
  const inputFile = (e) => {
    e.preventDefault();
    const fileReader = new FileReader();
    let json;
    fileReader.readAsText(e.target.files[0], "UTF-8");
    fileReader.onloadend = (e) => {
      const arr = e.target.result;
      json = JSON.parse(JSON.parse(JSON.stringify(arr)));
      json.forEach((form) => {
        form.id = uuidv4();
        form.options.forEach((option) => (option.id = uuidv4()));
      });
      handleFile(json);
    };
  };
  const handleFile = (json) => {
    console.log(file.length);
    json.forEach((form) => {
      addForm((arr) => [...arr, form]);
      handleDisplay(form.id);
      changeTitleSb(false);
    });

    console.log(forms);
  };
  const addFormIndexZero = (id) => {
    // adding form from title bar
    let newArr = [...forms];
    let newForm = {
      id: id,
      questionType: "multiple_choice",
      questionText: "Question ",
      options: [{ option: "Option", id: id }],
      display: true,
    };
    newArr.splice(0, 0, newForm);
    addForm(newArr);
    handleDisplay(id);
    changeTitleSb(false);
  };
  const handleAddForm = (id, index) => {
    let newArr = [...forms];
    let newForm = {
      id: id,
      questionType: "multiple_choice",
      questionText: "Question ",
      options: [{ option: "Option", id: id }],
      display: true,
    };
    newArr.splice(index + 1, 0, newForm);
    addForm(newArr);
    handleDisplay(id);
    changeTitleSb(false);
  };
  const handleFormDel = (id) => {
    let newArr = [...forms];
    newArr = newArr.filter((elem) => elem.id !== id);
    if (newArr.length == 1) {
      handleSummary(newArr[0].id);
    } else if (newArr.length > 1) {
      handleSummary(newArr[newArr.length - 1].id);
    } else if (newArr.length == 0) {
      handleTitle();
    }
    addForm(newArr);
  };
  //display
  const [titleSb, changeTitleSb] = useState(true);

  const handleTitle = () => {
    if (!titleSb) {
      changeTitleSb(true);
    }
    let newArr = [...forms];
    newArr.map((form) => (form.display = false));
    addForm(newArr);
  };
  const handleSummary = (id) => {
    let index = forms.indexOf(forms.find((elem) => elem.id === id));
    let newArr = [...forms];
    newArr[index].display = true;
    addForm(newArr);
    changeTitleSb(false);
    handleDisplay(id);
  };
  const handleDisplay = (id) => {
    forms.map((elem) => {
      if (elem.id !== id) {
        elem.display = false;
      } else {
        elem.display = true;
      }
    });
  };

  // background color change

  const [theme, addTheme] = useState([
    { color: "#db4437" },
    { color: "#673ab7" },
    { color: "#3f51b5" },
    { color: "#4285f4" },
    { color: "#03a9f4" },
    { color: "#00bcd4" },
    { color: "#ff5722" },
    { color: "#ff9800" },
    { color: "#009688" },
    { color: "#4caf50" },
  ]);
  const [color, setColor] = useState(theme[0]);
  const handleTheme = (id, color) => {
    addTheme((arr) => [...arr, color]);
    console.log(theme);
  };
  const [backgrounds, setBackgrounds] = useState([
    { color: "#ffc4b2" },
    { color: "#ffdba6" },
    { color: "#a6dad5" },
    { color: "#c0e3c2" },
    { color: "#c7d2d6" },
    { color: "#dddddd" },
    { color: "#cBcaca" },
    { color: "#e3bfbf" },
    { color: "#f2beb9" },
    { color: "#c5cbe9" },
  ]);
  const [backgroundColor, changeBackground] = useState(backgrounds[0].color);
  const handleBackground = (bc) => {
    changeBackground(bc);
  };
  //export file
  const handleDownload = () => {
    const element = document.createElement("a");
    const file = new Blob([JSON.stringify(forms)], {
      type: "json/plain;charset-utf-8",
    });
    element.href = URL.createObjectURL(file);
    element.download = "NewForm.json";
    document.body.appendChild(element);
    element.click();
  };

  useEffect(() => {
    addForm(forms);
    console.log(forms);
  }, [forms]);
  return (
    <div>
      <div
        className="questions_container"
        style={{ backgroundColor: backgroundColor }}
      >
        <br></br>
        <div className="questions_container_section">
          <div className="questions_container_section_title ">
            <div
              onClick={() => handleTitle()}
              className="section_title"
              style={{ borderTop: `8px solid ${color.color}` }}
            >
              <input
                className="section_title_name"
                type="text"
                placeholder="Form title"
              ></input>
              <input
                className="section_title_desc"
                type="text"
                placeholder="Form description"
              ></input>
            </div>
            <div
              style={{ display: titleSb ? "flex" : "none" }}
              className="form_sidebar"
            >
              <IconButton>
                <AddCircleOutlineIcon
                  onClick={() => {
                    const id = uuidv4();
                    addFormIndexZero(id);
                  }}
                />
              </IconButton>

              <div className="formControl">
                <label for="json">
                  <UploadFileIcon />
                </label>
                <input
                  id="json"
                  type="file"
                  style={{ display: "none", visibility: "none" }}
                  onChange={inputFile}
                  accept=".json"
                  multiple
                  onClick={(e) => (e.target.value = null)}
                />
              </div>
              <IconButton>
                {" "}
                <TaskIcon />
              </IconButton>
              <IconButton>
                {" "}
                <ImageIcon />
              </IconButton>
              <IconButton>
                {" "}
                <OndemandVideoIcon />
              </IconButton>
            </div>
          </div>

          {forms.map((elem, i) => (
            <div style={{ position: "relative" }}>
              <div
                className="summary"
                onClick={() => handleSummary(elem.id)}
                style={{
                  display: elem.display === true ? "none" : "block",
                  backgroundColor: "white",
                  borderRadius: "8px",
                  padding: "15px 25px",
                  marginTop: "10px",
                }}
              >
                <h3>{elem.questionText}</h3>
                {elem.questionType === "multiple_choice" ? (
                  <div>
                    {elem.options.map((item) => (
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          marginBottom: "15px",
                        }}
                      >
                        <IconButton>
                          <RadioButtonUncheckedIcon />
                        </IconButton>
                        <div style={{ marginLeft: "10px" }}>{item.option}</div>
                      </div>
                    ))}
                  </div>
                ) : elem.questionType === "checkbox" ? (
                  <div>
                    {elem.options.map((item) => (
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          marginBottom: "15px",
                        }}
                      >
                        <CheckBoxOutlineBlankIcon />
                        <div style={{ marginLeft: "10px" }}>{item.option}</div>
                      </div>
                    ))}
                  </div>
                ) : elem.questionType === "dropdown" ? (
                  <div>
                    {elem.options.map((item, j) => (
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          marginBottom: "15px",
                        }}
                      >
                        <div>{j + 1}</div>
                        <div style={{ marginLeft: "10px" }}>{item.option}</div>
                      </div>
                    ))}
                  </div>
                ) : elem.questionType === "paragraph" ? (
                  <div className="paragraph_input">
                    <input
                      className="summary_input_long"
                      type="text"
                      placeholder="Long answer text"
                    />
                  </div>
                ) : elem.questionType === "short_answer" ? (
                  <div>
                    <input
                      className="summary_input_short"
                      type="text"
                      placeholder="short answer text"
                    />
                  </div>
                ) : (
                  ""
                )}
              </div>

              <div
                className="form_map"
                style={{
                  display: elem.display === true ? "flex" : "none",
                }}
              >
                <Form
                  handleQuestionType={handleQuestionType}
                  id={elem.id}
                  form={elem}
                  key={elem.id}
                  handleQuestionText={handleQuestionText}
                  multipleChoice={[
                    multipleChoiceAdd,
                    multipleChoiceDel,
                    multipleChoiceUpdate,
                  ]}
                  checkbox={[checkboxAdd, checkboxDel, checkboxUpdate]}
                  handleDuplicate={[handleDuplicate, i]}
                  index={i}
                  handleFormDel={[handleFormDel]}
                  color={color}
                />
                <div className="form_sidebar">
                  <IconButton>
                    <AddCircleOutlineIcon
                      onClick={() => {
                        const id = uuidv4();
                        handleAddForm(id, i);
                      }}
                    />
                  </IconButton>
                  <div className="formControl">
                    <label for="json">
                      <UploadFileIcon />
                    </label>
                    <input
                      id="json"
                      type="file"
                      style={{ display: "none", visibility: "none" }}
                      onChange={inputFile}
                      multiple
                      onClick={(e) => (e.target.value = null)}
                    />
                  </div>
                  <IconButton>
                    <TaskIcon onClick={() => handleDownload()} />
                  </IconButton>
                  <IconButton>
                    <ImageIcon />
                  </IconButton>
                  <IconButton>
                    {" "}
                    <OndemandVideoIcon />
                  </IconButton>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ display: props.popup == true ? "flex" : "none" }}>
          <Theme
            handlePopup={props.handlePopup}
            theme={theme}
            setColor={setColor}
            color={color}
            handleTheme={handleTheme}
            handleBackground={handleBackground}
            backgrounds={backgrounds}
          />
        </div>
      </div>
    </div>
  );
}

export default Title;
