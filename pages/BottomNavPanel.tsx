import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Paper from "@mui/material/Paper";
import { Link } from "@mui/material";
import IconPhone from "./IconPhone";
import ViberIcon from "./ViberIcon";
import WhatsAppIcon from "./WhatsAppIcon";
import TelegramIcon from "./TelegramIcon";

function BottomNavPanel() {
  return (
    <div className="bottom-navbar">
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
        >
          <Link href="tel:+380931104435">
            <BottomNavigationAction icon={<IconPhone />} />
          </Link>

          <Link href="viber://chat?number=%2B380931104435">
            <BottomNavigationAction icon={<ViberIcon />} />
          </Link>

          <Link href="https://api.whatsapp.com/send?phone=+380931104435">
            <BottomNavigationAction icon={<WhatsAppIcon />} />
          </Link>

          <Link href="https://telegram.me/Mavrik55">
            <BottomNavigationAction icon={<TelegramIcon />} />
          </Link>
        </BottomNavigation>
      </Paper>
    </div>
  );
}

export default BottomNavPanel;
