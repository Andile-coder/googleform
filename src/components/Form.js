import React, { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import DeleteIcon from "@mui/icons-material/Delete";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { IconButton, Select } from "@mui/material";
import { TextField } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import ShortTextIcon from "@mui/icons-material/ShortText";
import SubjectIcon from "@mui/icons-material/Subject";
import CloseIcon from "@mui/icons-material/Close";
import { v4 as uuidv4 } from "uuid";
function Form(props) {
  // multiple choice questions
  const handleMcChange = (e) => {
    props.multipleChoice[2](props.id, e.target.value, e.target.id);
  };
  const handleAddMCoption = (i) => {
    props.multipleChoice[0](props.id, { option: "option", id: i });
  };
  const handleOptionOther = (i) => {
    props.multipleChoice[0](props.id, {
      option: "Other",
      id: i,
    });
  };
  const handleDeleteMCoption = (id) => {
    props.multipleChoice[1](props.id, id);
  };
  //SELECT
  const handleQuestionType = (e) => {
    const value = e.target.value;
    props.handleQuestionType(props.id, value);
  };
  const handleQuestionText = (e) => {
    const value = e.target.value;
    props.handleQuestionText(props.id, value);
  };
  //checkbox

  const handleCbChange = (e) => {
    props.checkbox[2](props.id, e.target.value, e.target.id);
  };
  const handleAddCboption = (i) => {
    props.checkbox[0](props.id, { option: "option", id: i });
  };
  const handleCbOptionOther = (i) => {
    props.checkbox[0](props.id, { option: "Other", id: i });
  };
  const handleDeleteCboption = (id) => {
    props.checkbox[1](props.id, id);
  };

  // Duplicate
  const handleDuplicate = () => {
    let index = props.handleDuplicate[1];
    props.handleDuplicate[0](uuidv4(), props.id, index);
  };
  const handleFormDel = () => {
    props.handleFormDel[0](props.id);
  };

  return (
    <div className="form_container">
      <div className="form_container_content">
        <div className="form_container_content-box-1">
          <div className="box-1-question">
            <TextField
              className="form_textfield"
              label="Question"
              id="filled-basic"
              variant="filled"
              rowMax={2}
              style={{ width: "100%" }}
              onChange={handleQuestionText}
              value={props.form.questionText}
              defaultValue={"question" + props.index}
            />
          </div>
          <div className="box-2-type">
            <Select
              onChange={handleQuestionType}
              value={props.form.questionType}
              defaultValue="Multiple choice"
            >
              <MenuItem value="short_answer">
                <IconButton>
                  <ShortTextIcon />
                </IconButton>
                Short answer
              </MenuItem>
              <MenuItem value="paragraph">
                <IconButton>
                  <SubjectIcon />
                </IconButton>
                Paragraph
              </MenuItem>
              <MenuItem value="multiple_choice">
                <IconButton>
                  <RadioButtonCheckedIcon />
                </IconButton>
                Multiple choice
              </MenuItem>
              <MenuItem value="checkbox">
                <IconButton>
                  <CheckBoxIcon />
                </IconButton>
                Checkboxes
              </MenuItem>
            </Select>
          </div>
        </div>
        <div className="form_container_content-box-2">
          {props.form.questionType === "multiple_choice" ? (
            <div className="multiple_choice">
              {props.form.options.map((elem) => (
                <div className="multiple_choice_option">
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      width: "100%",
                    }}
                  >
                    <div className="icon">
                      <RadioButtonUncheckedIcon />
                    </div>
                    <div
                      style={{
                        width: "90%",
                        lineHeight: "40px",
                        marginLeft: "15px",
                      }}
                    >
                      <input
                        placeholder="option"
                        key={elem.id}
                        id={elem.id}
                        type="text"
                        value={elem.option}
                        defaultValue={elem.option}
                        onChange={handleMcChange}
                      />
                    </div>
                  </div>
                  <div className="icon">
                    {props.form.options.length == 1 ? (
                      <div></div>
                    ) : (
                      <IconButton>
                        <CloseIcon
                          onClick={() => handleDeleteMCoption(elem.id)}
                        />
                      </IconButton>
                    )}
                  </div>
                </div>
              ))}
              <div className="multiple_choice_addOption">
                <div>
                  {" "}
                  <button onClick={() => handleAddMCoption(uuidv4())}>
                    Add option
                  </button>
                </div>
                <div>
                  <button
                    style={{
                      color: "blue",
                      cursor: "text",
                    }}
                  >
                    {" "}
                    or
                  </button>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <button
                    style={{
                      color: "blue",
                      cursor: "pointer",
                    }}
                    onClick={() => handleOptionOther(uuidv4())}
                  >
                    add"Other"
                  </button>
                </div>
              </div>
            </div>
          ) : props.form.questionType === "paragraph" ? (
            <div className="paragraph">
              <div className="paragraph_input">
                <input type="text" placeholder="Long answer text" />
              </div>
            </div>
          ) : props.form.questionType === "checkbox" ? (
            <div className="checkbox_choice">
              {props.form.options.map((elem) => (
                <div className="checkbox_choice_option">
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      width: "100%",
                    }}
                  >
                    <div className="icon">
                      <CheckBoxOutlineBlankIcon />
                    </div>
                    <div
                      style={{
                        width: "90%",
                        lineHeight: "40px",
                        marginLeft: "15px",
                      }}
                    >
                      <input
                        placeholder="option"
                        key={elem.id}
                        id={elem.id}
                        type="text"
                        value={elem.option}
                        defaultValue={elem.option}
                        onChange={handleCbChange}
                      />
                    </div>
                  </div>
                  <div className="icon">
                    {props.form.options.length == 1 ? (
                      <div></div>
                    ) : (
                      <IconButton>
                        <CloseIcon
                          onClick={() => handleDeleteCboption(elem.id)}
                        />
                      </IconButton>
                    )}
                  </div>
                </div>
              ))}
              <div className="checkbox_choice_addOption">
                <div>
                  {" "}
                  <button onClick={() => handleAddCboption(uuidv4())}>
                    Add option
                  </button>
                </div>
                <div>
                  <button
                    style={{
                      color: "blue",
                      cursor: "text",
                    }}
                  >
                    {" "}
                    or
                  </button>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <button
                    style={{
                      color: "blue",
                      cursor: "pointer",
                    }}
                    onClick={() => handleOptionOther(uuidv4())}
                  >
                    add"Other"
                  </button>
                </div>
              </div>
            </div>
          ) : props.form.questionType === "short_answer" ? (
            <div className="short_answer">
              <div className="short_answer_input">
                <input type="text" placeholder="Short answer text" />
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
        <br></br>
        <hr />
        <div className="form_container_content-box-3">
          <div className="form_container_content-box-3-footer">
            <div className="footer-icon">
              <IconButton>
                <DeleteIcon onClick={() => handleFormDel()} />
              </IconButton>
            </div>
            <div className="footer-icon">
              <IconButton>
                <ContentCopyIcon onClick={() => handleDuplicate()} />
              </IconButton>
            </div>
            <div className="footer-icon">
              <hr />
            </div>
            <div className="footer-icon">
              <IconButton>
                {" "}
                <MoreVertIcon />
              </IconButton>
            </div>
            <div className="footer-icon"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
