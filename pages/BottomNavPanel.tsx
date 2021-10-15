import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
// import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import FacebookIcon from "@mui/icons-material/Facebook";
import Paper from "@mui/material/Paper";
import { Link } from "@mui/material";
import IconPhone from "./IconPhone";
import ViberIcon from "./ViberIcon";
import WhatsAppIcon from "./WhatsAppIcon";
import TelegramIcon from "./TelegramIcon";

function BottomNavPanel() {
  return (
    <div>
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
          // showLabels
          // value={value}
          // onChange={(event, newValue) => {
          //   console.log("event", event);
          //   console.log("newValue", newValue);
          // setValue(newValue);
          // }}
        >
          {/* <div>aaaaaaaaaaaa</div> */}

          <Link href="/">
            <BottomNavigationAction
              // icon={<LocalPhoneIcon />}
              icon={<IconPhone />}
            />
          </Link>

          <Link href="/">
            <BottomNavigationAction icon={<ViberIcon />} />
          </Link>

          <Link href="/">
            <BottomNavigationAction icon={<WhatsAppIcon />} />
          </Link>

          <Link href="/">
            <BottomNavigationAction icon={<TelegramIcon />} />
          </Link>
        </BottomNavigation>
      </Paper>
    </div>
  );
}

export default BottomNavPanel;
