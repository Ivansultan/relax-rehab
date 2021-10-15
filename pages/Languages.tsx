// import styles from "../styles/element.module.css";

import { languages } from "./index";
import Image from "next/image";
import LogoPic from "./Images/logo.png";

function Languages({ locale, dispatch }) {
  return (
    // <div className="languages-container">
    //   {languages.map((language, index) => {
    //     const isActiveLocale = language.locale === locale;
    //     return (
    //       <div
    //         className="languages"
    //         key={index}
    //         style={{
    //           paddingLeft: 10,
    //           cursor: isActiveLocale ? "default" : "pointer",
    //           fontWeight: isActiveLocale ? "bold" : "normal",
    //           textDecoration: isActiveLocale ? "underLine" : "",
    //         }}
    //         onClick={() => {
    //           if (!isActiveLocale) {
    //             dispatch({
    //               type: "setLocale",
    //               locale: language.locale,
    //             });
    //           }
    //         }}
    //       >
    //         {language.name}
    //       </div>
    //     );
    //   })}
    // </div>

    <div className="logo-mobile-container">
      <div className="logo-mobile">
        <Image src={LogoPic} />
      </div>
    </div>
  );
}

export default Languages;
