import BottomNavPanel from "./BottomNavPanel";
import MainLayout from "./MainLayout";
import LogoPic from "./Images/logo.png";
import Image from "next/image";
import MenuMobile from "./MenuPageMobile";

function WorkResults() {
  return (
    <MainLayout title="Юмейхо терапия / Результаты работ">
      <div className="header-menu-mobile">
        <div className="logo-menu-mobile">
          <Image src={LogoPic} />
        </div>
        <div className="title-menu-mobile">
          <h2>Результаты работ</h2>
        </div>

        <MenuMobile />

        <BottomNavPanel />
      </div>
    </MainLayout>
  );
}

export default WorkResults;
