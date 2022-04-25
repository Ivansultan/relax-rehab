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

function AboutMeMob() {
  return (
    <MainLayout title="Юмейхо терапия / Результаты работ">
      <div className="about-me-container-mobile">
        <div className="menu-header-mobile">
          <div className="menu-logo-mobile">
            <Image src={LogoPic} />
          </div>
          <div className="menu-title-mobile">
            <h2>Обо мне</h2>
          </div>
          <MenuMobile />
        </div>

        <hr className="line" />

        <div className="about-me-section-mob">
          <div className="my-pic-mob">
            <Image className="my-img" src={MyPic} width={165} height={210} />
          </div>

          <big className="text-about-mob">
            Здравствуйте! Меня зовут Евгений Солтынчук, я представляю
            оздоровительную массажную систему Юмейхо, которая посредством
            комплекса манипуляций, позволяет устранить дисбаланс костей таза и
            позвоночника, а также эффективно и безопасно восстановить
            функциональное состояние всего организма. Также, система Юмейхо
            позиционирует себя как техника, позволяющая достичь идеала женской
            красоты и здоровья.
            <p style={{ marginTop: "12px" }}>
              С 2016 года я являюсь сертифицированным специалистом в области
              реабилитационного массажа, и имею большой опыт работы массажем с
              людьми, связанными с тяжелыми физическими нагрузками, а также с
              теми, кто ведет малоподвижный образ жизни. Благодаря 20 летнему
              стажу профессиональной танцевальной карьеры, имею практику техники
              восстановления тела после травм: переломов костей, растяжений мышц
              и связок, ушибов, физических и эмоциональных перегрузок.
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
