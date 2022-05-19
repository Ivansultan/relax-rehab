// import Image from "next/image";
// import Link from "next/link";
// import Button from "@material-ui/core/Button";
// import Results1 from "../public/results1.jpg";
// import Results2 from "../public/results2.jpg";
// import Results3 from "../public/results3.jpg";
// import Results4 from "../public/results4.jpg";
// import Results5 from "../public/results5.jpg";
// import Results6 from "../public/results6.jpg";

// function WorkResultsWeb() {
//   return (
//     <div className="work-results-container-web">
//       <Link href={"/"}>
//         <Button
//           style={{
//             backgroundColor: "transparent",
//             opacity: 1,
//             color: "whitesmoke",
//             border: "1px solid whitesmoke",
//           }}
//         >
//           <span style={{ fontSize: "medium" }}>Назад</span>
//         </Button>
//       </Link>
//       <h1 className="work-results-title">Результаты работ</h1>
//       <div className="gallery-container">
//         <a className="thumbnail" href="#thumb">
//           <Image
//             src={Results1}
//             width="150px"
//             height="116px"
//             border-radius="5px"
//           />
//           <span>
//             <Image
//               src={Results1}
//               width="500px"
//               height="400px"
//               border-radius="5px"
//             />
//           </span>
//         </a>
//         <a className="thumbnail" href="#thumb">
//           <Image
//             src={Results2}
//             width="150px"
//             height="116px"
//             border-radius="5px"
//           />
//           <span>
//             <Image
//               src={Results2}
//               width="500px"
//               height="400px"
//               border-radius="5px"
//             />
//           </span>
//         </a>
//         <a className="thumbnail" href="#thumb">
//           <Image
//             src={Results3}
//             width="150px"
//             height="116px"
//             border-radius="5px"
//           />
//           <span>
//             <Image
//               src={Results3}
//               width="500px"
//               height="400px"
//               border-radius="5px"
//             />
//           </span>
//         </a>
//         <a className="thumbnail" href="#thumb">
//           <Image
//             src={Results4}
//             width="150px"
//             height="116px"
//             border-radius="5px"
//           />
//           <span>
//             <Image
//               src={Results4}
//               width="500px"
//               height="400px"
//               border-radius="5px"
//             />
//           </span>
//         </a>
//         <a className="thumbnail" href="#thumb">
//           <Image
//             src={Results5}
//             width="150px"
//             height="116px"
//             border-radius="5px"
//           />
//           <span>
//             <Image
//               src={Results5}
//               width="500px"
//               height="400px"
//               border-radius="5px"
//             />
//           </span>
//         </a>
//         <a className="thumbnail" href="#thumb">
//           <Image
//             src={Results6}
//             width="150px"
//             height="116px"
//             border-radius="5px"
//           />
//           <span>
//             <Image
//               src={Results6}
//               width="500px"
//               height="400px"
//               border-radius="5px"
//             />
//           </span>
//         </a>
//       </div>
//     </div>
//   );
// }

// export default WorkResultsWeb;

import Link from "next/link";
import Button from "@material-ui/core/Button";
import Image from "next/image";
import Results1 from "../public/results1.jpg";
import Results2 from "../public/results2.jpg";
import Results3 from "../public/results3.jpg";
import Results4 from "../public/results4.jpg";
import Results5 from "../public/results5.jpg";
import Results6 from "../public/results6.jpg";
import { FormattedMessage } from "react-intl";

function WorkResultsWeb() {
  return (
    <>
      <div className="work-results-container-web">
        <Link href={"/"}>
          <Button
            style={{
              backgroundColor: "transparent",
              opacity: 1,
              color: "whitesmoke",
              border: "1px solid whitesmoke",
            }}
          >
            <span style={{ fontSize: "medium" }}>
              <FormattedMessage id="Back" defaultMessage="Back" />
            </span>
          </Button>
        </Link>

        <h1 className="work-results-title">
          <FormattedMessage id="Work results" defaultMessage="Work results" />
        </h1>

        <div className="gallery-container">
          <Link href="#slide-1" scroll={false}>
            <a>
              <Image src={Results1} width="110px" height="86px" />
            </a>
          </Link>
          <Link href="#slide-2" scroll={false}>
            <a>
              <Image src={Results2} width="110px" height="86px" />
            </a>
          </Link>
          <Link href="#slide-3" scroll={false}>
            <a>
              <Image src={Results3} width="110px" height="86px" />
            </a>
          </Link>
          <Link href="#slide-4" scroll={false}>
            <a>
              <Image src={Results4} width="110px" height="86px" />
            </a>
          </Link>
          <Link href="#slide-5" scroll={false}>
            <a>
              <Image src={Results5} width="110px" height="86px" />
            </a>
          </Link>
          <Link href="#slide-6" scroll={false}>
            <a>
              <Image src={Results6} width="110px" height="86px" />
            </a>
          </Link>
        </div>

        <div className="slider">
          <div className="slides">
            <div id="slide-1">
              <Image src={Results1} />
            </div>
            <div id="slide-2">
              <Image src={Results2} />
            </div>
            <div id="slide-3">
              <Image src={Results3} />
            </div>
            <div id="slide-4">
              <Image src={Results4} />
            </div>
            <div id="slide-5">
              <Image src={Results5} />
            </div>
            <div id="slide-6">
              <Image src={Results6} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WorkResultsWeb;
