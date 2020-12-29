import React from "react";
import InboxIcon from "@material-ui/icons/Inbox";
import StarRateIcon from "@material-ui/icons/StarRate";
import "./SideBar.css";
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";
import SendIcon from "@material-ui/icons/Send";
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import MailIcon from "@material-ui/icons/Mail";
import DeleteIcon from "@material-ui/icons/Delete";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

interface IProps {
  // name: string
}

const SideBar = (props: IProps) => {
  return (
    <div className="sidebar">
      <div className="sidebar--compose">
        <img
          src="https://www.gstatic.com/images/icons/material/colored_icons/1x/create_32dp.png"
          alt=""
        />{" "}
        Compose
      </div>

      <div className="sidebar--compose__separator"></div>

      <div className="sidebar--sections">
        <div
          className="sidebar--listItem sidebar--listItem__active"
          title="Inbox"
        >
          <InboxIcon className="sidebar--listItem__icon" />
          <div className="sidebar--listItem__title">Inbox</div>
          <div className="sidebar--listItem__number">54</div>
        </div>

        <div className="sidebar--listItem" title="Starred">
          <StarRateIcon className="sidebar--listItem__icon" />
          <div className="sidebar--listItem__title">Starred</div>
          <div className="sidebar--listItem__number">4</div>
        </div>

        <div className="sidebar--listItem" title="Snoozed">
          <QueryBuilderIcon className="sidebar--listItem__icon" />
          <div className="sidebar--listItem__title ">Snoozed</div>
          <div className="sidebar--listItem__number">5</div>
        </div>

        <div className="sidebar--listItem" title="Sent">
          <SendIcon className="sidebar--listItem__icon" />
          <div className="sidebar--listItem__title">Sent</div>
          <div className="sidebar--listItem__number">10</div>
        </div>

        <div className="sidebar--listItem" title="Drafts">
          <InsertDriveFileIcon className="sidebar--listItem__icon" />
          <div className="sidebar--listItem__title">Drafts</div>
          <div className="sidebar--listItem__number">2</div>
        </div>

        <div className="sidebar--listItem" title="Important">
          <LabelImportantIcon className="sidebar--listItem__icon" />
          <div className="sidebar--listItem__title">Important</div>
          <div className="sidebar--listItem__number">6</div>
        </div>

        <div className="sidebar--listItem" title="All Mail">
          <MailIcon className="sidebar--listItem__icon" />
          <div className="sidebar--listItem__title">All Mail</div>
          <div className="sidebar--listItem__number">60</div>
        </div>

        <div className="sidebar--listItem" title="Bin">
          <DeleteIcon className="sidebar--listItem__icon" />
          <div className="sidebar--listItem__title">Bin</div>
          <div className="sidebar--listItem__number"></div>
        </div>

        <div className="sidebar--listItem" title="More">
          <ExpandMoreIcon className="sidebar--listItem__icon" />
          <div className="sidebar--listItem__title">More</div>
          <div className="sidebar--listItem__number"></div>
        </div>
      </div>
      <div className="sidebar--sections__separator"></div>
    </div>
  );
};

export default SideBar;
