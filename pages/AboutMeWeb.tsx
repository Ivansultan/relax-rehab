import Link from "next/link";
import Image from "next/image";
import Button from "@material-ui/core/Button";
import MyPic from "../public/about.jpg";
import Diploma1 from "../public/diploma1.jpg";
import Diploma2 from "../public/diploma2.jpg";
import Diploma3 from "../public/diploma3.jpg";
import Diploma4 from "../public/diploma4.jpg";
import Diplomas from "./Diplomas";

function AboutMeWeb() {
  return (
    <div className="container-about-web">
      <Link href={"/"}>
        <Button
          style={{
            backgroundColor: "transparent",
            opacity: 1,
            color: "whitesmoke",
            border: "1px solid whitesmoke",
          }}
          // variant="contained"
        >
          <span style={{ fontSize: "medium" }}>Назад</span>
        </Button>
      </Link>
      <h1 className="title-about-web">Обо мне</h1>
      <div
        style={{
          marginLeft: 15,
          marginTop: 10,
          display: "flex",
          marginRight: 15,
        }}
      >
        <div className="about-web">
          <div className="my-pic-web">
            {/* <img style={{maxWidth: 175, borderRadius: 5, float: 'left', marginRight: 15, marginTop: 5}}
            alt="about" 
            src={require("../src/images/about.jpg")}
            /> */}
            <Image className="my-img" src={MyPic} width={230} height={300} />
          </div>
          <big className="text-about-web">
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
      </div>
      {/* <Diplomas /> */}
      <div className="diplomas-about-web">
        <div className="diplomas-vertical">
          <Image
            className="diploma2-img"
            src={Diploma2}
            width="400"
            height="600"
            border-radius="10px"
          />
        </div>
        <div className="diplomas-horizontal">
          <div>
            <Image
              className="diploma1-img"
              src={Diploma1}
              width="450"
              height="350"
              border-radius="10px"
            />
          </div>
          <div>
            <Image
              className="diploma4-img"
              src={Diploma4}
              width="450"
              height="350"
              border-radius="10px"
            />
          </div>
        </div>
        <div>
          <Image
            className="diploma3-img"
            src={Diploma3}
            width="400"
            height="600"
            border-radius="10px"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutMeWeb;
