import React from "react";
import { Paper, Tab, Tabs } from "@mui/material";
function Pages() {
  return (
    <Paper>
      <Tabs className="tabs" centered textColor="primary">
        <Tab className="tabs_tab" label="Questions"></Tab>
        <Tab className="tabs_tab" label="Responses"></Tab>
      </Tabs>
    </Paper>
  );
}

export default Pages;
