import BottomNavPanel from "./BottomNavPanel";
import MainLayout from "./MainLayout";
import LogoPic from "./Images/logo2.png";
import Image from "next/image";
import MenuMobile from "./MenuMobile";
import Button from "@mui/material/Button";
import Link from "next/link";

function ContactsMob() {
  return (
    <>
      <MainLayout title="Юмейхо терапия / Результаты работ">
        <div className="contacts-container-mobile">
          <div className="menu-header-mobile">
            <div className="menu-logo-mobile">
              <Image src={LogoPic} />
            </div>
            <div className="menu-title-mobile">
              <h2>Контакты</h2>
            </div>
            <MenuMobile />
          </div>

          <hr className="line" />

          <div className="info-contacts-section">
            <big className="info-contacts">
              <ul>г. Киев</ul>
              <ul>
                тел.{" "}
                <a className="phone-link" href="tel:+38 (093) 110-44-35">
                  +38 (093) 110-44-35
                </a>
              </ul>
              <ul>
                тел.{" "}
                <a className="phone-link" href="tel:+38 (066) 118-16-08">
                  +38 (066) 118-16-08
                </a>
              </ul>
              <ul>
                Email:{" "}
                <a className="email-link" href="mailto:jen.solty@gmail.com">
                  jen.solty@gmail.com
                </a>
              </ul>
              <ul>Евгений Солтынчук</ul>
              <ul>
                Extra info:
                <Link href="https://www.facebook.com/profile.php?id=100074749413242">
                  <Button
                    style={{
                      backgroundColor: "transparent",
                      border: "1px solid transparent",
                    }}
                  >
                    <img
                      className="facebook-icon-mob"
                      src="https://pngicon.ru/file/uploads/FaceBook_512x512.png"
                    />
                  </Button>
                </Link>
                <Link href="https://instagram.com/jenya_massage_kiev?utm_medium=copy_link">
                  <Button
                    style={{
                      backgroundColor: "transparent",
                      border: "1px solid transparent",
                    }}
                  >
                    <img
                      className="instagram-icon-mob"
                      src="https://free-png.ru/wp-content/uploads/2019/05/Logotip-instagram-t.png"
                    />
                  </Button>
                </Link>
              </ul>
            </big>
          </div>
        </div>

        <BottomNavPanel />
      </MainLayout>
    </>
  );
}

export default ContactsMob;