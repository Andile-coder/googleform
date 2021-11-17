import React, { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import DeleteIcon from "@mui/icons-material/Delete";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Select,
} from "@mui/material";
import { TextField } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import { v4 as uuidv4 } from "uuid";
import { FormatShapes } from "@mui/icons-material";
export let multipleChoice;
export let checkbox;
export let dropdown;
function Form(props) {
  // multiple choice
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

  // Dropdown

  const handleAddDdoption = (i) => {
    props.dropdown[0](props.id, { option: "Option", id: i });
  };
  const handleDdChange = (e) => {
    props.dropdown[2](props.id, e.target.value, e.target.id);
  };
  const handleDeleteDdoption = (id) => {
    props.dropdown[1](props.id, id);
  };

  // Duplicate
  const handleDuplicate = () => {
    let index = props.handleDuplicate[1];
    props.handleDuplicate[0](uuidv4(), props.id, index);
  };
  const handleFormDel = () => {
    props.handleFormDel[0](props.id);
  };
  //

  return (
    <div className="form_container">
      {/* <div>
        <h3>{props.form.questionText}</h3>
        <ul>
          {props.form.options.map((elem, i) => (
            <li style={{ display: "flex" }}>
              {props.form.questionType === "Multiple choice" ? (
                <div>
                  <div>{elem.option}</div>
                  <div className="icon">
                    <RadioButtonUncheckedIcon />
                  </div>
                </div>
              ) : props.form.questionType === "Checkboxes" ? (
                <div>
                  <div>{elem.option}</div>
                  <div className="icon">
                    <CheckBoxOutlineBlankIcon />
                  </div>
                </div>
              ) : props.form.questionType === "Dropdown" ? (
                <div>
                  <div>{elem.option}</div>
                  <div className="icon">
                    <h3>{i + 1}</h3>
                  </div>
                </div>
              ) : props.form.questionType === "paragraph" ? (
                <div className="paragraph_input">
                  <input
                    className="summary_input_long"
                    type="text"
                    placeholder="Long answer text"
                  />
                </div>
              ) : props.form.questionType === "Short answer" ? (
                <input
                  className="summary_input_short"
                  type="text"
                  placeholder="short answer text"
                />
              ) : (
                ""
              )}
            </li>
          ))}
        </ul>
      </div> */}
      <div className="form_container_content">
        <div className="form_container_content-box-1">
          <div className="box-1-question">
            <TextField
              className="form_textfield"
              label="Question"
              id="filled-basic"
              variant="filled"
              multiline
              rowMax={Infinity}
              style={{ width: "400px" }}
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
              <MenuItem value="Short answer">Short answer</MenuItem>
              <MenuItem value="Paragraph">Paragraph</MenuItem>
              <MenuItem value="Multiple choice">Multiple choice</MenuItem>
              <MenuItem value="Checkboxes">Checkboxes</MenuItem>
              <MenuItem value="Dropdown">Dropdown</MenuItem>
            </Select>
          </div>
        </div>
        <div className="form_container_content-box-2">
          {props.form.questionType === "Multiple choice" ? (
            <div className="multiple_choice">
              {props.form.options.map((elem) => (
                <div className="multiple_choice_option">
                  <div className="icon">
                    <RadioButtonUncheckedIcon />
                  </div>
                  <div
                    style={{
                      width: "90%",
                      display: "flex",
                      alignItems: "end",
                      lineHeight: "40px",
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
                  <div className="icon">
                    {props.form.options.length == 1 ? (
                      <div></div>
                    ) : (
                      <DeleteIcon
                        onClick={() => handleDeleteMCoption(elem.id)}
                      />
                    )}
                  </div>
                </div>
              ))}
              <div className="multiple_choice_addOption">
                <button onClick={() => handleAddMCoption(uuidv4())}>
                  Add option
                </button>
                <p>Or</p>
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
          ) : props.form.questionType === "Paragraph" ? (
            <div className="paragraph">
              <div className="paragraph_input">
                <input type="text" placeholder="Long answer text" />
              </div>
            </div>
          ) : props.form.questionType === "Checkboxes" ? (
            <div className="checkbox_choice">
              {props.form.options.map((elem) => (
                <div className="checkbox_choice_option">
                  <div className="icon">
                    <CheckBoxOutlineBlankIcon />
                  </div>
                  <div
                    style={{
                      width: "90%",
                      display: "flex",
                      alignItems: "end",
                      lineHeight: "40px",
                    }}
                  >
                    <input
                      placeholder="option"
                      key={elem.id}
                      id={elem.id}
                      type="text"
                      value={elem.option}
                      defaultValue="Option 1"
                      onChange={handleCbChange}
                    />
                  </div>
                  <div className="icon">
                    {props.form.options.length == 1 ? (
                      <div></div>
                    ) : (
                      <DeleteIcon
                        onClick={() => handleDeleteCboption(elem.id)}
                      />
                    )}
                  </div>
                </div>
              ))}
              <div className="checkbox_choice_addOption">
                <button onClick={() => handleAddCboption(uuidv4())}>
                  Add option
                </button>
                <p>Or</p>
                <button
                  style={{
                    color: "blue",
                    cursor: "pointer",
                  }}
                  onClick={() => handleCbOptionOther(uuidv4())}
                >
                  add"Other"
                </button>
              </div>
            </div>
          ) : props.form.questionType === "Dropdown" ? (
            <div className="checkbox_choice">
              {props.form.options.map((elem, i) => (
                <div className="checkbox_choice_option">
                  <div className="icon">
                    <h3>{i + 1}</h3>
                  </div>
                  <div
                    style={{
                      width: "90%",
                      display: "flex",
                      alignItems: "end",
                      lineHeight: "40px",
                    }}
                  >
                    <input
                      placeholder="option"
                      key={elem.id}
                      id={elem.id}
                      type="text"
                      value={elem.option}
                      defaultValue="Option 1"
                      onChange={handleDdChange}
                    />
                  </div>
                  <div className="icon">
                    {props.form.options.length == 1 ? (
                      <div></div>
                    ) : (
                      <DeleteIcon
                        onClick={() => handleDeleteDdoption(elem.id)}
                      />
                    )}
                  </div>
                </div>
              ))}
              <div className="checkbox_choice_addOption">
                <button onClick={() => handleAddDdoption(uuidv4())}>
                  Add option
                </button>
              </div>
            </div>
          ) : props.form.questionType === "Short answer" ? (
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
              <DeleteIcon onClick={() => handleFormDel()} />
            </div>
            <div className="footer-icon">
              <ContentCopyIcon onClick={() => handleDuplicate()} />
            </div>
            <div className="footer-icon">
              <hr />
            </div>
            <div className="footer-icon">
              <MoreVertIcon />
            </div>
            <div className="footer-icon"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
