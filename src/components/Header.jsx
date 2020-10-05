import React from "react";
import {
  GitHub as GitHubIcon,
  Email as EmailIcon,
  Facebook as FacebookIcon,
} from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import "../styles/Header.scss";

function Header() {
  const classes = useStyles();
  return (
    <div className="header-section">
      <div className="header-content ac-ln-content">
        <div className={classes.iconContainer}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              position: "relative",
              top: "2px",
            }}
          >
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookIcon
                className={classes.icon}
                style={{ fontSize: "1.75rem" }}
              />
            </a>
            <a
              href="https://github.com/chenghsj"
              className={classes.icon}
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon
                className={classes.icon}
                style={{ fontSize: "1.45rem" }}
              />
            </a>
            <a href="mailto:chengjohnsonhs@gmail.com">
              <EmailIcon
                className={classes.icon}
                style={{ fontSize: "1.65rem" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

export const useStyles = makeStyles((theme) => ({
  icon: {
    fontSize: "1.5rem",
    cursor: "pointer",
    color: "white",
  },
  iconContainer: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    marginLeft: "auto",
    "& a": {
      marginLeft: "10px",
    },
  },
}));
