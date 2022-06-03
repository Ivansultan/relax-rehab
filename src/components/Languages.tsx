import { languages } from "../pages/index";
import Image from "next/image";
import logoPic from "/public/logo2.png";
import Link from "next/link";
import { useRouter } from "next/router";

const Languages = () => {
  const { locale } = useRouter();
  return (
    <>
      <div className="languages-container">
        {languages.map((language, index) => {
          const isActiveLocale = language.locale === locale;
          return (
            <Link href="/" key={index} locale={language.locale}>
              <a
                className="languages"
                key={index}
                style={{
                  paddingLeft: 10,
                  color: isActiveLocale ? "lightgreen" : "whitesmoke",
                  cursor: isActiveLocale ? "default" : "pointer",
                  textDecoration: isActiveLocale ? "" : "none",
                }}
              >
                {language.name}
              </a>
            </Link>
          );
        })}
      </div>

      <div className="logo-mobile-container">
        <div className="logo-mobile">
          <Image src={logoPic} />
        </div>
      </div>
    </>
  );
};

export default Languages;
