import { makeStyles } from "@material-ui/core";
import { url } from "inspector";

export const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
    margin: 5,
    cursor: "pointer",
  },
  bullet: {
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    // fontFamily: "Lato",
    fontFamily: "  Oswald",
  },
  shortDescription: {
    display: "flex",
    justifyContent: "center",
    fontFamily: "Oswald",
    marginBottom: "-20px",
  },
  pos: {
    marginBottom: 12,
  },
  media: {
    paddingTop: "56.25%", // 16:9
    width: "100%",
  },
  img: {
    height: 150,
    width: 150,
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),

    overflow: "scroll",
    height: 500,
    maxWidth: 600,
  },

  cardsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    maxHeight: "100%",
    flexWrap: "wrap",
    marginTop: 20,
    // backgroundColor: "darkgray",
    // background: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/escheresque_ste.png",
    backgroundColor: "../public/background6.jpg",
  },

  card: {
    display: "flex",
    justifyContent: "space-around",
    width: 300,
    marginBottom: 15,
    marginTop: 15,
    minWidth: 275,
    margin: 5,
    cursor: "pointer",
  },

  modalTitle: {
    justifyContent: "center",
    display: "flex",
    opacity: 0.8,
  },

  modalDescription: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 20,
    opacity: 0.8,
  },

  modalImages: {
    paddingBottom: 20,
  },

  modalExtraInfo: {
    paddingLeft: 10,
    paddingRight: 10,
    opacity: 0.8,
  },
}));
