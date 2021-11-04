import Link from "next/link";
import Button from "@material-ui/core/Button";

function AboutMeWeb() {
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
          // variant="contained"
        >
          <span style={{ fontSize: "medium" }}>Назад</span>
        </Button>
      </Link>
      <h1 className="title">Обо мне</h1>
    </div>
  );
}

export default AboutMeWeb;
