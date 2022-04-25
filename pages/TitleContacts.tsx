// import MenuIcon from "@mui/icons-material/Menu";
import Button from "@material-ui/core/Button";
import Image from "next/image";
import Menu from "./Images/menu2.png";
import Link from "next/link";
import MenuMobile from "./MenuMobile";

function TitleContacts() {
  return (
    <div className="title-contacts-container">
      <div className="title-contacts">
        <div className="city-container">
          <b className="city">г. Киев</b>
        </div>
        <div className="phone-container">
          <div className="phone-icon">
            <img
              className="phone"
              src="http://s1.iconbird.com/ico/2013/9/446/w512h5121380376664MetroUIPhone.png"
            />
          </div>
          <div className="phone-number">
            <p className="number">+38 (093) 110-44-35</p>
          </div>
        </div>
        <div className="social-network-container">
          <Link href="https://www.facebook.com/profile.php?id=100074749413242">
            <img
              className="social-network"
              src={"https://pngicon.ru/file/uploads/FaceBook_512x512.png"}
            />
          </Link>
          <Link href="https://instagram.com/jenya_massage_kiev?utm_medium=copy_link">
            <img
              className="social-network"
              src="https://free-png.ru/wp-content/uploads/2019/05/Logotip-instagram-t.png"
            />
          </Link>
        </div>
      </div>
      <MenuMobile />
    </div>
  );
}

export default TitleContacts;

// import BottomNavigation from "@mui/material/BottomNavigation";
// import BottomNavigationAction from "@mui/material/BottomNavigationAction";
// import Paper from "@mui/material/Paper";
// import { Link } from "@mui/material";
// import IconPhone from "./IconPhone";
// import ViberIcon from "./ViberIcon";
// import WhatsAppIcon from "./WhatsAppIcon";
// import TelegramIcon from "./TelegramIcon";

// function BottomNavPanel() {
//   return (
//     <div className="bottom-navbar">
//       <Paper
//         sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
//         elevation={3}
//       >
//         <BottomNavigation
//           style={{
//             display: "flex",
//             justifyContent: "space-around",
//             alignItems: "center",
//           }}
//         >
//           <Link href="tel:+380931104435">
//             <BottomNavigationAction icon={<IconPhone />} />
//           </Link>

//           <Link href="viber://chat?number=%2B380931104435">
//             <BottomNavigationAction icon={<ViberIcon />} />
//           </Link>

//           <Link href="https://api.whatsapp.com/send?phone=+380931104435">
//             <BottomNavigationAction icon={<WhatsAppIcon />} />
//           </Link>

//           <Link href="https://telegram.me/Mavrik55">
//             <BottomNavigationAction icon={<TelegramIcon />} />
//           </Link>
//         </BottomNavigation>
//       </Paper>
//     </div>
//   );
// }

// export default BottomNavPanel;
