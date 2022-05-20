import BottomNavPanel from "./BottomNavPanel";
import MainLayout from "./MainLayout";
import LogoPic from "./Images/logo2.png";
import Image from "next/image";
import MenuMobile from "./MenuMobile";
import MyPic from "../public/about.jpg";
import Diploma1 from "../public/diploma1.jpg";
import Diploma2 from "../public/diploma2.jpg";
import Diploma3 from "../public/diploma3.jpg";
import Diploma4 from "../public/diploma4.jpg";
import { FormattedMessage } from "react-intl";

function AboutMeMob() {
  return (
    <MainLayout title="Юмейхо терапия / Результаты работ">
      <div className="about-me-container-mobile">
        <div className="menu-header-mobile">
          <div className="menu-logo-mobile">
            <Image src={LogoPic} />
          </div>
          <div className="menu-title-mobile">
            <h2>
              <FormattedMessage id="About me" defaultMessage="About me" />
            </h2>
          </div>
          <MenuMobile />
        </div>

        <hr className="line" />

        <div className="about-me-section-mob">
          <div className="my-pic-mob">
            <Image className="my-img" src={MyPic} width={165} height={210} />
          </div>

          <big className="text-about-mob">
            <FormattedMessage
              id="Hello! My name is Yevgeny Soltynchuk. I present the Yumeiho wellness massage system, which through a complex of manipulations allows eliminating the imbalance of the pelvic and spine bones, as well as effectively and safely restoring the functional state of the whole body. The Yumeiho system also positiones itself as a technique that allows you to achieve the ideal of female beauty and health."
              defaultMessage="Hello! My name is Yevgeny Soltynchuk. I present the Yumeiho wellness massage system, which through a complex of manipulations allows eliminating the imbalance of the pelvic and spine bones, as well as effectively and safely restoring the functional state of the whole body. The Yumeiho system also positiones itself as a technique that allows you to achieve the ideal of female beauty and health."
            />
            <p style={{ marginTop: "12px" }}>
              <FormattedMessage
                id="Since 2016 I am a certified specialist in the field of rehabilitation massage, and I have extensive experience working with people whose lives are associated with heavy physical stress, and to those who lead a sedentary lifestyle. Thanks to 20 years of professional dance career, I have a practice of body recovery technique after injuries: bone fractures, muscle and ligament sprains, and bruises, physical and emotional overloads."
                defaultMessage="Since 2016 I am a certified specialist in the field of rehabilitation massage, and I have extensive experience working with people whose lives are associated with heavy physical stress, and to those who lead a sedentary lifestyle. Thanks to 20 years of professional dance career, I have a practice of body recovery technique after injuries: bone fractures, muscle and ligament sprains, and bruises, physical and emotional overloads."
              />
            </p>
          </big>
        </div>

        <div className="diplomas-container">
          <div className="diploma-section">
            <Image className="diploma-img" src={Diploma2} />
          </div>
          <div className="diploma-section">
            <Image className="diploma-img" src={Diploma1} />
          </div>
          <div className="diploma-section">
            <Image className="diploma-img" src={Diploma3} />
          </div>
          <div className="diploma-section">
            <Image className="diploma-img" src={Diploma4} />
          </div>
        </div>
      </div>
      <BottomNavPanel />
    </MainLayout>
  );
}

export default AboutMeMob;
