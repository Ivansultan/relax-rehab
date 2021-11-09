import Image from "next/image";
import Link from "next/link";
import Button from "@material-ui/core/Button";
import Results1 from "../public/results1.jpg";
import Results2 from "../public/results2.jpg";
import Results3 from "../public/results3.jpg";
import Results4 from "../public/results4.jpg";
import Results5 from "../public/results5.jpg";
import Results6 from "../public/results6.jpg";

function WorkResultsWeb() {
  return (
    <div className="container-web">
      <Link href={"/"}>
        <Button
          style={{
            backgroundColor: "transparent",
            opacity: 1,
            color: "whitesmoke",
            border: "1px solid whitesmoke",
          }}
        >
          <span style={{ fontSize: "medium" }}>Назад</span>
        </Button>
      </Link>
      <h1 className="title">Результаты работ</h1>
      <div className="gallery-container">
        <a className="thumbnail" href="#thumb">
          <Image
            src={Results1}
            width="150px"
            height="116px"
            border-radius="5px"
          />
          <span>
            <Image
              src={Results1}
              width="500px"
              height="400px"
              border-radius="5px"
            />
          </span>
        </a>
        <a className="thumbnail" href="#thumb">
          <Image
            src={Results2}
            width="150px"
            height="116px"
            border-radius="5px"
          />
          <span>
            <Image
              src={Results2}
              width="500px"
              height="400px"
              border-radius="5px"
            />
          </span>
        </a>
        <a className="thumbnail" href="#thumb">
          <Image
            src={Results3}
            width="150px"
            height="116px"
            border-radius="5px"
          />
          <span>
            <Image
              src={Results3}
              width="500px"
              height="400px"
              border-radius="5px"
            />
          </span>
        </a>
        <a className="thumbnail" href="#thumb">
          <Image
            src={Results4}
            width="150px"
            height="116px"
            border-radius="5px"
          />
          <span>
            <Image
              src={Results4}
              width="500px"
              height="400px"
              border-radius="5px"
            />
          </span>
        </a>
        <a className="thumbnail" href="#thumb">
          <Image
            src={Results5}
            width="150px"
            height="116px"
            border-radius="5px"
          />
          <span>
            <Image
              src={Results5}
              width="500px"
              height="400px"
              border-radius="5px"
            />
          </span>
        </a>
        <a className="thumbnail" href="#thumb">
          <Image
            src={Results6}
            width="150px"
            height="116px"
            border-radius="5px"
          />
          <span>
            <Image
              src={Results6}
              width="500px"
              height="400px"
              border-radius="5px"
            />
          </span>
        </a>
      </div>
    </div>
  );
}

export default WorkResultsWeb;
