import BottomNavPanel from "./BottomNavPanel";
import MainLayout from "./MainLayout";
import LogoPic from "./Images/logo2.png";
import Image from "next/image";
import MenuMobile from "./MenuMobile";
import Results1 from "../public/results1.jpg";
import Results2 from "../public/results2.jpg";
import Results3 from "../public/results3.jpg";
import Results4 from "../public/results4.jpg";
import Results5 from "../public/results5.jpg";
import Results6 from "../public/results6.jpg";

function WorkResults() {
  return (
    <MainLayout title="Юмейхо терапия / Результаты работ">
      <div>
        <div className="header-menu-mobile">
          <div className="logo-menu-mobile">
            <Image src={LogoPic} />
          </div>
          <div className="title-menu-mobile">
            <h2>Результаты работ</h2>
          </div>
          <MenuMobile />
        </div>
        <a className="thumbnail" href="#thumb">
          <Image
            src={Results1}
            width="150px"
            height="116px"
            border-radius="5px"
          />
          <span>
            <Image
              src={Results1}
              width="500px"
              height="400px"
              border-radius="5px"
            />
          </span>
        </a>
        <BottomNavPanel />
      </div>
    </MainLayout>
  );
}

export default WorkResults;
