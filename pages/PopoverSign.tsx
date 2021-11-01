import * as React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Popover from "@mui/material/Popover";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";

export default function PopoverPopupState() {
  return (
    <PopupState variant="popover" popupId="demo-popup-popover">
      {(popupState) => (
        <div>
          <Button
            style={{
              marginTop: "10px",
              backgroundColor: "transparent",
              opacity: 1,
              color: "whitesmoke",
              border: "1px solid white",
            }}
            variant="contained"
            {...bindTrigger(popupState)}
          >
            <span style={{ fontSize: "medium" }}>Записаться на массаж</span>
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
              style={{
                textAlign: "center",
              }}
              sx={{ p: 2 }}
            >
              <ul>
                <Button
                  style={{
                    backgroundColor: "transparent",
                    border: "1px solid transparent",
                  }}
                >
                  <span style={{ fontSize: "large" }}>WhatsApp</span>
                </Button>
              </ul>
              <ul>
                <Button
                  style={{
                    backgroundColor: "transparent",
                    border: "1px solid transparent",
                  }}
                >
                  <span style={{ fontSize: "large", width: "100%" }}>
                    Viber
                  </span>
                </Button>
              </ul>
              <ul>
                <Button
                  style={{
                    backgroundColor: "transparent",
                    border: "1px solid transparent",
                  }}
                >
                  <span style={{ fontSize: "large" }}>Telegram</span>
                </Button>
              </ul>
              {/* </ul> */}
            </Typography>
          </Popover>
        </div>
      )}
    </PopupState>
  );
}
