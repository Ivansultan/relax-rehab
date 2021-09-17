// import PhoneIcon from "@material-ui/icons/Phone";

function TitleContacts() {
  return (
    <div className="title-contacts-container">
      <div className="title-contacts">
        <div className="city">
          <b>г. Киев</b>
        </div>
        <div className="phone">
          <b>тел. +38(093) 110 44 35</b>
        </div>
        <div className="social-network-container">
          <img
            className="social-network"
            src="https://free-png.ru/wp-content/uploads/2019/05/Logotip-instagram-t.png"
          />
          <img
            className="social-network"
            src="https://pngicon.ru/file/uploads/telegram-256x256.png"
          />
          <img
            className="social-network"
            src="https://myfirstcomp.ru/wp-content/uploads/2020/05/viber-LOGO.png"
          />
          <img
            className="social-network"
            src="https://pngicon.ru/file/uploads/FaceBook_512x512.png"
          />
        </div>
        {/* <b className="email">Email: relax-rehab@gmail.com</b> */}
      </div>
    </div>
  );
}

export default TitleContacts;
