import { Checkbox, IconButton } from "@material-ui/core";
import React, { useState } from "react";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import RefreshIcon from "@material-ui/icons/Refresh";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";

import "./EmailList.css";
interface IProps {
  // name: string
}

const EmailList = (props: IProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="emailist">
      <div className="emaillist--body">
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
          <div className="emaillist--toolsRight">
            <div className="emaillist--toolRight-pagination-count">
              1-50 of 15,423
            </div>
            <NavigateBeforeIcon className="emaillist--toolsRight-navBefore" />
            <NavigateNextIcon className="emaillist--toolsRight-navNext" />
          </div>
        </div>
      </div>

      <div className="emaillist--verticalTools">T</div>
    </div>
  );
};

export default EmailList;
