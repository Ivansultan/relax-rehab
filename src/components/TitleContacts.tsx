import Link from "next/link";
import MenuMobile from "./MenuMobile";
import { FormattedMessage } from "react-intl";

function TitleContacts() {
  return (
    <div className="title-contacts-container">
      <div className="title-contacts">
        <div className="city-container">
          <b className="city">
            <FormattedMessage id="Kyiv" defaultMessage="Kyiv" />
          </b>
        </div>
        <div className="phone-container">
          <div className="phone-icon">
            <img
              className="phone"
              src="/logoPhone.png"
              // src="http://s1.iconbird.com/ico/2013/9/446/w512h5121380376664MetroUIPhone.png"
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
              src="/logoFaceBook.png"
              // src="https://pngicon.ru/file/uploads/FaceBook_512x512.png"
            />
          </Link>
          <Link href="https://instagram.com/jenya_massage_kiev?utm_medium=copy_link">
            <img
              className="social-network"
              src="/logoInstagram.png"
              // src="https://free-png.ru/wp-content/uploads/2019/05/Logotip-instagram-t.png"
            />
          </Link>
        </div>
      </div>
      <MenuMobile />
    </div>
  );
}

export default TitleContacts;
