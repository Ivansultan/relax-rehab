import MainLayout from "./MainLayout";
import { FormattedMessage } from "react-intl";
import paths from "src/paths";
import Link from "next/link";

function MenuMobile() {
  return (
    <MainLayout>
      <div className="menu-icon-container">
        <input type="checkbox" id="active" />
        <label htmlFor="active" className="menu-btn" style={{ zIndex: 1000 }}>
          <span></span>
        </label>
        <label htmlFor="active" className="close"></label>
        <div className="wrapper">
          <ul>
            <li>
              <Link href={paths.home}>
                <a>
                  <FormattedMessage id="Main" defaultMessage="Main" />
                </a>
              </Link>
            </li>
            <li>
              <Link href={paths.results}>
                <a>
                  <FormattedMessage id="Results" defaultMessage="Results" />
                </a>
              </Link>
            </li>
            <li>
              <Link href={paths.faq}>FAQ</Link>
            </li>
            <li>
              <Link href={paths.about_me}>
                <a>
                  <FormattedMessage id="About me" defaultMessage="About me" />
                </a>
              </Link>
            </li>
            <li>
              <Link href={paths.reviews_mobile}>
                <a>
                  <FormattedMessage id="Reviews" defaultMessage="Reviews" />
                </a>
              </Link>
            </li>
            <li>
              <Link href={paths.contacts_mobile}>
                <a>
                  <FormattedMessage id="Contacts" defaultMessage="Contacts" />
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </MainLayout>
  );
}

export default MenuMobile;
