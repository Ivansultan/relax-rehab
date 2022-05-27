import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Paper from "@mui/material/Paper";

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
          <BottomNavigationAction
            href="tel:+380931104435"
            icon={
              <img
                className="instagram-facebook-phone-mobile"
                src="/logoPhone.png"
                // src="http://s1.iconbird.com/ico/2013/9/446/w512h5121380376664MetroUIPhone.png"
              />
            }
          />

          <BottomNavigationAction
            href="viber://chat?number=%2B380931104435"
            icon={
              <img
                className="instagram-facebook-phone-mobile"
                src="/logoViber.png"
                // src="https://myfirstcomp.ru/wp-content/uploads/2020/05/viber-LOGO.png"
              />
            }
          />

          <BottomNavigationAction
            href="https://api.whatsapp.com/send?phone=+380931104435"
            icon={
              <img
                className="instagram-facebook-phone-mobile"
                src="/logoWhatsApp.png"
                // src="https://pngimg.com/uploads/whatsapp/small/whatsapp_PNG4.png"
              />
            }
          />

          <BottomNavigationAction
            href="https://telegram.me/Mavrik55"
            icon={
              <img
                className="instagram-facebook-phone-mobile"
                src="/logoTelegram.png"
                // src="https://pngicon.ru/file/uploads/telegram-256x256.png"
              />
            }
          />
        </BottomNavigation>
      </Paper>
    </div>
  );
}

export default BottomNavPanel;
