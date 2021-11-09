import * as React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Popover from "@mui/material/Popover";
import Link from "next/link";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";

export default function PopoverPopupState() {
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
              <big>Позвонить</big>
              <ul>
                <Button
                  style={{
                    backgroundColor: "transparent",
                    border: "1px solid transparent",
                  }}
                >
                  <div className="phone-container-web">
                    <div className="phone-section-web">
                      <img
                        className="phone-web"
                        src="http://s1.iconbird.com/ico/2013/9/446/w512h5121380376664MetroUIPhone.png"
                      />
                      <p className="number">+38 (093) 110-44-35</p>
                    </div>
                  </div>
                </Button>
              </ul>
              <big>Написать</big>
              {/* <ul> */}
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
                      src="https://pngicon.ru/file/uploads/FaceBook_512x512.png"
                    />
                  </Button>
                </Link>
                {/* </ul> */}
                {/* <ul> */}
                <Link href="https://instagram.com/jenya_massage_kiev?utm_medium=copy_link">
                  <Button
                    style={{
                      backgroundColor: "transparent",
                      border: "1px solid transparent",
                    }}
                  >
                    <img
                      className="instagram-icon-web"
                      src="https://free-png.ru/wp-content/uploads/2019/05/Logotip-instagram-t.png"
                    />
                  </Button>
                </Link>
              </div>
              {/* </ul> */}
              {/* </ul> */}
            </Typography>
          </Popover>
        </div>
      )}
    </PopupState>
  );
}
