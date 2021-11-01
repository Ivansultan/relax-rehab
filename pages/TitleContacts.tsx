// import MenuIcon from "@mui/icons-material/Menu";
import Button from "@material-ui/core/Button";
import Image from "next/image";
import Menu from "./Images/menu2.png";
import Link from "next/link";
import MenuPageMobile from "./MenuPageMobile";

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
          <img
            className="social-network"
            src="https://pngicon.ru/file/uploads/FaceBook_512x512.png"
          />
          <img
            className="social-network"
            src="https://free-png.ru/wp-content/uploads/2019/05/Logotip-instagram-t.png"
          />
        </div>
      </div>
      <MenuPageMobile />
    </div>
  );
}

export default TitleContacts;
