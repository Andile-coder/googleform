import React, { useEffect, useState } from "react";
import {
  AccordionDetails,
  AccordionSummary,
  AccordionActionsProps,
  Typography,
  MenuItem,
  div,
  FormControlLabel,
} from "@mui/material";
import { Accordion } from "@mui/material";
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
function Title() {
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
  //handle dropdown functions
  const dropdownAdd = (id, option) => {
    let index = forms.indexOf(forms.find((elem) => elem.id === id));
    let newArr = [...forms];
    newArr[index].options.push(option);
    addForm(newArr);
  };
  const dropdownDel = (id, optionId) => {
    let index = forms.indexOf(forms.find((elem) => elem.id === id));
    let newArr = [...forms];
    let filter = newArr[index].options.filter((item) => item.id !== optionId);
    newArr[index].options = filter;
    addForm(newArr);
  };
  const dropdownUpdate = (id, value, optionId) => {
    let index = forms.indexOf(forms.find((elem) => elem.id === id));
    let newArr = [...forms];
    let index2 = newArr[index].options.indexOf(
      newArr[index].options.find((elem) => elem.id === optionId)
    );
    newArr[index].options[index2].option = value;
    addForm(newArr);
  };

  const handleAddForm = (id) => {
    addForm((arr, i) => [
      ...arr,
      {
        id: id,
        questionType: "Multiple choice",
        questionText: "Question " + (arr.length + 1),
        options: [{ option: "Option", id: id }],
        display: true,
      },
    ]);
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
  useEffect(() => {
    addForm(forms);
  }, [forms]);
  return (
    <div className="questions_container">
      <br></br>
      <div className="questions_container_section">
        <div className="questions_container_section_title">
          <div onClick={() => handleTitle()} className="section_title">
            <input
              className="section_title_name"
              type="text"
              placeholder="Untitled document"
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
            <AddCircleOutlineIcon
              onClick={() => {
                const id = uuidv4();
                handleAddForm(id);
              }}
            />
            <UploadFileIcon />
            <CloseIcon />
            <ImageIcon />
            <OndemandVideoIcon />
            <ViewStreamIcon />
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
              {elem.questionType === "Multiple choice" ? (
                <div>
                  {elem.options.map((item) => (
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        marginBottom: "15px",
                      }}
                    >
                      <RadioButtonUncheckedIcon />
                      <div style={{ marginLeft: "10px" }}>{item.option}</div>
                    </div>
                  ))}
                </div>
              ) : elem.questionType === "Checkboxes" ? (
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
              ) : elem.questionType === "Dropdown" ? (
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
              ) : elem.questionType === "paragraph" ? (
                <div className="paragraph_input">
                  <input
                    className="summary_input_long"
                    type="text"
                    placeholder="Long answer text"
                  />
                </div>
              ) : elem.questionType === "Short answer" ? (
                <input
                  className="summary_input_short"
                  type="text"
                  placeholder="short answer text"
                />
              ) : (
                ""
              )}
            </div>

            <div
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
                dropdown={[dropdownAdd, dropdownDel, dropdownUpdate]}
                handleDuplicate={[handleDuplicate, i]}
                index={i}
                handleFormDel={[handleFormDel]}
              />
              <div className="form_sidebar">
                <AddCircleOutlineIcon
                  onClick={() => {
                    const id = uuidv4();
                    handleAddForm(id);
                  }}
                />
                <UploadFileIcon />
                <CloseIcon />
                <ImageIcon />
                <OndemandVideoIcon />
                <ViewStreamIcon />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Title;
