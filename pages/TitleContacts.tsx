// import MenuIcon from "@mui/icons-material/Menu";
import Button from "@material-ui/core/Button";
import Image from "next/image";
import Menu from "./Images/menu2.png";
import Link from "next/link";

function TitleContacts() {
  return (
    <div className="title-contacts-container">
      {/* <div className="title-contacts">
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
            <div className="phone-number">+380931104435</div>
          </div>
          <div className="social-network-container">
            <img
              className="social-network"
              src="https://free-png.ru/wp-content/uploads/2019/05/Logotip-instagram-t.png"
            />

            <img 
              className="social-network"
              src="https://free-png.ru/wp-content/uploads/2020/04/WhatsApp_Logo_1_t.png" 
            />
  
            <img
              className="social-network"
              src="https://pngicon.ru/file/uploads/FaceBook_512x512.png"
            /> */}
      {/* <img
              className="social-network"
              src="https://pngicon.ru/file/uploads/telegram-256x256.png"
            />
            <img
              className="social-network"
              src="https://myfirstcomp.ru/wp-content/uploads/2020/05/viber-LOGO.png"
            /> */}
      {/* </div> */}
      {/* </div> */}

      {/* <div className="title-contacts-mobile">
           <img
            className="instagram-facebook-phone-mobile"
            src="http://s1.iconbird.com/ico/2013/9/446/w512h5121380376664MetroUIPhone.png"
          />
          <img
            className="instagram-facebook-phone-mobile"
            src="https://free-png.ru/wp-content/uploads/2019/05/Logotip-instagram-t.png"
          />
          <img
            className="instagram-facebook-phone-mobile"
            src="https://pngicon.ru/file/uploads/FaceBook_512x512.png"
          /> 
        </div> */}
      <div className="menu-icon-container">
        <Link href={"/MenuMobile"}>
          <Button>
            <Image src={Menu} />
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default TitleContacts;
