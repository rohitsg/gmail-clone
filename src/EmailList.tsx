import { Checkbox, IconButton } from "@material-ui/core";
import React, { useState } from "react";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import RefreshIcon from "@material-ui/icons/Refresh";
import MoreVertIcon from "@material-ui/icons/MoreVert";

import "./EmailList.css";
interface IProps {
  // name: string
}

const EmailList = (props: IProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="emailist">
      <div className="emaillist--tools">
        <div className="emaillist--toolsLeft">
          <div className="emaillist--toolsLeft-checkboxWrapper">
            <Checkbox />
            <IconButton
              className="emaillist--toolsLeft-checkboxWrapper-arrow"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              <ArrowDropDownIcon />
            </IconButton>
          </div>

          <RefreshIcon className="emaillist--toolsLeft-refresh" />
          <MoreVertIcon className="emaillist--toolsLeft-more" />
        </div>
        <div className="emaillist--toolsRight">Right tools</div>
      </div>
    </div>
  );
};

export default EmailList;
