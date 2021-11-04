import MainLayout from "./MainLayout";
import Link from "next/link";

function MenuMobile() {
  return (
    <MainLayout title={"Юмейхо терапия / Категории"}>
      <div className="menu-icon-container">
        <input type="checkbox" id="active" />
        <label htmlFor="active" className="menu-btn" style={{ zIndex: 1000 }}>
          <span></span>
        </label>
        <label htmlFor="active" className="close"></label>
        <div className="wrapper">
          <ul>
            <li>
              <a href="/">Главная</a>
            </li>
            <li>
              <a href="/WorkResults">Результаты</a>
            </li>
            <li>
              <a href="/FAQ">FAQ</a>
            </li>
            <li>
              <a href="/AboutMe">Обо мне</a>
            </li>
            <li>
              <a href="/Reviews">Отзывы</a>
            </li>
            <li>
              <a href="/Contacts">Контакты</a>
            </li>
          </ul>
        </div>
      </div>
    </MainLayout>
  );
}

export default MenuMobile;
