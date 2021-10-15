import Link from "next/link";
import Button from "@material-ui/core/Button";
import Popover from "./Popover";
import Image from "next/image";
import Background from "./Images/background.jpeg";
import BottomNavPanel from "./BottomNavPanel";

function MenuMobile() {
  return (
    <div className="menu-mobile-container">
      <div>
        <Image
          className="background"
          src={Background}
          layout="fill"
          objectFit="cover"
          objectPosition="left"
        />
      </div>
      <div className="menu-mobile-page">
        <Link href={"/"}>
          <Button
            style={{
              backgroundColor: "lightgray",
              opacity: 0.5,
              color: "black",
            }}
            variant="contained"
          >
            Главная / Массажи
          </Button>
        </Link>

        <Link href={"/WorkResults"}>
          <Button
            style={{
              backgroundColor: "lightgray",
              opacity: 0.5,
              color: "black",
            }}
            variant="contained"
          >
            Результаты работ
          </Button>
        </Link>

        <Link href={"/FAQ"}>
          <Button
            style={{
              backgroundColor: "lightgray",
              opacity: 0.5,
              color: "black",
            }}
            variant="contained"
          >
            FAQ
          </Button>
        </Link>

        <Link href={"/AboutMe"}>
          <Button
            style={{
              backgroundColor: "lightgray",
              opacity: 0.5,
              color: "black",
            }}
            variant="contained"
          >
            Обо мне
          </Button>
        </Link>

        <Link href={"/Reviews"}>
          <Button
            style={{
              backgroundColor: "lightgray",
              opacity: 0.5,
              color: "black",
            }}
            variant="contained"
          >
            Отзывы
          </Button>
        </Link>

        <Popover />
      </div>
      <BottomNavPanel />
    </div>
  );
}

export default MenuMobile;
