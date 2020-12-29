import React, { useState } from "react";
import "./Header.css";

import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { IconButton } from "@material-ui/core";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import SettingsIcon from "@material-ui/icons/Settings";
import AppsIcon from "@material-ui/icons/Apps";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
interface IProps {
  name: string;
}

const Header = (props: IProps) => {
  const [focused, setFocused] = useState(false);

  const handleSearchMailClick = () => {
    console.log("in click");
    setFocused(true);
  };

  return (
    <div className="header">
      <div className="header--left">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img
          src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png"
          alt=""
          aria-hidden="true"
          style={{
            width: "109px",
            height: "40px",
          }}
        />
      </div>

      <div className="header--center">
        <div
          className={`header--center__wrapper ${
            focused ? " header--center__focused" : ""
          }`}
        >
          <IconButton>
            <SearchIcon />
          </IconButton>
          <input
            type="text"
            placeholder="Search mail"
            onClick={() => {
              handleSearchMailClick();
            }}
          />
          <IconButton>
            <ArrowDropDownIcon />
          </IconButton>
        </div>
      </div>

      <div className="header--right">
        <IconButton title="Support">
          <HelpOutlineIcon />
        </IconButton>

        <IconButton title="Settings">
          <SettingsIcon />
        </IconButton>

        <IconButton title="Google Apps">
          <AppsIcon />
        </IconButton>

        <IconButton title="User Account">
          <AccountCircleIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default Header;
