import { languages } from "./index";
import Image from "next/image";
import LogoPic from "./Images/logo2.png";
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
          <Image src={LogoPic} />
        </div>
      </div>
    </>
  );
};

export default Languages;
