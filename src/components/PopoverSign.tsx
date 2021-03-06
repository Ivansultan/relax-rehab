import * as React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Popover from "@mui/material/Popover";
import Link from "next/link";
import { FormattedMessage } from "react-intl";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";

function PopoverPopupState() {
  return (
    <PopupState variant="popover" popupId="demo-popup-popover">
      {(popupState) => (
        <div>
          <Button
            style={{
              marginTop: "20px",
              backgroundColor: "transparent",
              opacity: 1,
              color: "whitesmoke",
              border: "1px solid white",
            }}
            variant="contained"
            {...bindTrigger(popupState)}
          >
            <span style={{ fontSize: "medium" }}>
              <FormattedMessage
                id="Book a massage"
                defaultMessage="Book a massage"
              />
            </span>
          </Button>
          <Popover
            {...bindPopover(popupState)}
            anchorOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
          >
            <Typography
              component={"ul"}
              style={{
                textAlign: "center",
              }}
              sx={{ p: 2 }}
            >
              <big>
                <FormattedMessage id="Call" defaultMessage="Call" />
              </big>
              <ul>
                <Button
                  style={{
                    backgroundColor: "transparent",
                    border: "1px solid transparent",
                  }}
                >
                  <div className="phone-container-web">
                    <div className="phone-section-web">
                      <img className="phone-web" src="/logoPhone.png" />
                      <p className="number">+38 (093) 110-44-35</p>
                    </div>
                  </div>
                </Button>
              </ul>
              <big>
                <FormattedMessage id="Write" defaultMessage="Write" />
              </big>
              <div>
                <Link href="https://www.facebook.com/messages/t/100074749413242">
                  <Button
                    style={{
                      backgroundColor: "transparent",
                      border: "1px solid transparent",
                    }}
                  >
                    <img
                      className="facebook-icon-web"
                      src="/logoFaceBook.png"
                    />
                  </Button>
                </Link>
                <Link href="https://instagram.com/jenya_massage_kiev?utm_medium=copy_link">
                  <Button
                    style={{
                      backgroundColor: "transparent",
                      border: "1px solid transparent",
                    }}
                  >
                    <img
                      className="instagram-icon-web"
                      src="/logoInstagram.png"
                    />
                  </Button>
                </Link>
              </div>
            </Typography>
          </Popover>
        </div>
      )}
    </PopupState>
  );
}

export default PopoverPopupState;
