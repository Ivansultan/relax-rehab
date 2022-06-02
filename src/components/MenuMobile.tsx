import MainLayout from "./MainLayout";
import { FormattedMessage } from "react-intl";
import paths from "../../src/paths";

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
              <a href="/">
                <FormattedMessage id="Main" defaultMessage="Main" />
              </a>
            </li>
            <li>
              <a href={paths.results}>
                <FormattedMessage id="Results" defaultMessage="Results" />
              </a>
            </li>
            <li>
              <a href={paths.faq}>FAQ</a>
            </li>
            <li>
              <a href={paths.about}>
                <FormattedMessage id="About me" defaultMessage="About me" />
              </a>
            </li>
            <li>
              <a href={paths.reviews}>
                <FormattedMessage id="Reviews" defaultMessage="Reviews" />
              </a>
            </li>
            <li>
              <a href="/ContactsMob">
                <FormattedMessage id="Contacts" defaultMessage="Contacts" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </MainLayout>
  );
}

export default MenuMobile;
