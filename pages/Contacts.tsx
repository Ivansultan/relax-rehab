import BottomNavPanel from "./BottomNavPanel";
import MainLayout from "./MainLayout";
import LogoPic from "./Images/logo.png";
import Image from "next/image";
import MenuPageMobile from "./MenuPageMobile";

function Contacts() {
  return (
    <MainLayout title="Юмейхо терапия / Результаты работ">
      <div className="header-menu-mobile">
        <div className="logo-menu-mobile">
          <Image src={LogoPic} />
        </div>
        <div className="title-menu-mobile">
          <h2>Контакты</h2>
        </div>

        <MenuPageMobile />

        <BottomNavPanel />
      </div>
    </MainLayout>
  );
}

export default Contacts;
