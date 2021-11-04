import Link from "next/link";
import Button from "@material-ui/core/Button";

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
          // variant="contained"
        >
          <span style={{ fontSize: "medium" }}>Назад</span>
        </Button>
      </Link>
      <h1 className="title">Результаты работ</h1>
    </div>
  );
}

export default WorkResultsWeb;
