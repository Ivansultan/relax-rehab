import BottomNavPanel from "./BottomNavPanel";
import MainLayout from "./MainLayout";
import logoPic from "../public/logo2.png";
import Image from "next/image";
import MenuMobile from "./MenuMobile";
import Button from "@mui/material/Button";
import Link from "next/link";
import { FormattedMessage } from "react-intl";

function ContactsMob() {
  return (
    <>
      <MainLayout title="Юмейхо терапия / Результаты работ">
        <div className="contacts-container-mobile">
          <div className="menu-header-mobile">
            <div className="menu-logo-mobile">
              <Image src={logoPic} />
            </div>
            <div className="menu-title-mobile">
              <h2>
                <FormattedMessage id="Contacts" defaultMessage="Contacts" />
              </h2>
            </div>
            <MenuMobile />
          </div>

          <hr className="line" />

          <div className="info-contacts-section">
            <big className="info-contacts">
              <ul>
                <FormattedMessage id="Kyiv" defaultMessage="Kyiv" />
              </ul>
              <ul>
                <FormattedMessage id="tel." defaultMessage="tel." />
                <a className="phone-link" href="tel:+38 (093) 110-44-35">
                  +38 (093) 110-44-35
                </a>
              </ul>
              <ul>
                <FormattedMessage id="tel." defaultMessage="tel." />
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
              <ul>
                <FormattedMessage
                  id="Yevgeny Soltynchuk"
                  defaultMessage="Yevgeny Soltynchuk"
                />
              </ul>
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
                      src="/logoFacebook.png"
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
                      src="/logoInstagram.png"
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
