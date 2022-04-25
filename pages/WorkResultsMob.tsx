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
      <div className="work-results-container-mobile">
        <div className="menu-header-mobile">
          <div className="menu-logo-mobile">
            <Image src={LogoPic} />
          </div>
          <div className="menu-title-mobile">
            <h2>Результаты работ</h2>
          </div>
          <MenuMobile />
        </div>

        <hr className="line" />

        <div className="img-container">
          <div className="img-section">
            <a className="figure">
              <Image src={Results1} width="370" height="320" />
            </a>
          </div>
          <div className="img-section">
            <a className="figure">
              <Image src={Results3} width="370" height="320" />
            </a>
          </div>
          <div className="img-section">
            <a className="figure">
              <Image src={Results4} width="370" height="320" />
            </a>
          </div>
          <div className="img-section">
            <a className="figure">
              <Image src={Results2} width="370" height="320" />
            </a>
          </div>
          <div className="img-section">
            <a className="figure">
              <Image src={Results5} width="370" height="320" />
            </a>
          </div>
          <div className="img-section">
            <a className="figure">
              <Image src={Results6} width="370" height="320" />
            </a>
          </div>
        </div>
        <BottomNavPanel />
      </div>
    </MainLayout>
  );
}

export default WorkResults;
