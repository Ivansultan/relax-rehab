import Head from "next/head";
// import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import Popover from "./Popover";
import Button from "@material-ui/core/Button";
import Menu from "./Menu";
import Image from "next/image";
import logoPic from "./Images/logo.png";
import Languages from "./Languages";
import TitleContacts from "./TitleContacts";
import MainLayout from "./MainLayout";
import React from "react";
import Background from "./Images/background9.jpg";

function App() {
  return (
    <MainLayout title={"Home Page"}>
      <div className="app">
        {/* first section */}
        <div className="container">
          <div className="header">
            <div className="title-container">
              <Languages />
              <div className="title">
                <h1 className="title-first-line">Массаж </h1>
                <h1 className="title-second-line">расслабляющий и</h1>
                <h1 className="title-second-line">реабилитационный</h1>
              </div>
              <TitleContacts />
            </div>
            <div className="nav-panel">
              <div className="left-section">
                {/* <Menu /> */}
                <Link href={"/Massages"}>
                  <Button variant="contained">Массажи</Button>
                </Link>
                <Link href={"/WorkResults"}>
                  <Button variant="contained">Результаты работ</Button>
                </Link>
                <Link href={"/FAQ"}>
                  <Button variant="contained">FAQ</Button>
                </Link>
              </div>

              <div className="right-section">
                <Link href={"/AboutMe"}>
                  <Button variant="contained">Обо мне</Button>
                </Link>

                <Link href={"/Reviews"}>
                  <Button variant="contained">Отзывы</Button>
                </Link>

                <Popover />
              </div>
            </div>
          </div>
          <div className="logo-image">
            <div className="logo">
              <Image src={logoPic} />
            </div>
          </div>
          <div className="sign-up-button">
            <Link href={"/MassageSignUp"}>
              <Button variant="contained">Записаться на массаж</Button>
            </Link>
          </div>
        </div>

        {/* second section */}
        {/* <div
          style={{
            backgroundColor: "green",
          }}
        >
          Second section
        </div> */}
      </div>
    </MainLayout>
    // <div>

    // </div>
  );
}

export default App;
