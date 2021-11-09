import { Modal } from "@material-ui/core";
import React, { useState } from "react";
import Image from "next/image";
// import Diploma1 from "../public/diploma1.jpg";
// import Diploma2 from "../public/diploma2.jpg";
// import Diploma3 from "../public/diploma3.jpg";
// import Diploma4 from "../public/diploma4.jpg";
import { Masonry, Tile } from "./MasonryLayout";
import { useStyles } from "./styles";

let brakePoints = [350, 500, 750];

function Contacts() {
  const [state, handleState] = useState({
    isModalVisible: false,
    activeImage: "",
  });

  const handleDiploma = (image: string) => {
    handleState({ isModalVisible: true, activeImage: image });
  };

  const closeModal = () => {
    handleState({ isModalVisible: false, activeImage: "" });
  };

  const diplomas = [
    // <img src="../public/diploma1.jpg" />,
    // <img src="../public/diploma2.jpg" />,
    // <img src="../public/diploma3.jpg" />,
    // <img src="../public/diploma4.jpg" />,
    // { Diploma1 },
    // { Diploma2 },
    // { Diploma3 },
    // { Diploma4 },
    //   <Image src={Diploma1}/>,
    //   <Image src={Diploma2}/>,
    //   <Image src={Diploma3}/>,
    //   <Image src={Diploma4}/>,
    require("../public/diploma1.jpg"),
    require("../public/diploma2.jpg"),
    require("../public/diploma3.jpg"),
    require("../public/diploma4.jpg"),
  ];

  const classes = useStyles();

  return (
    <div
    // className={classes.containerContactsDiplomas}
    >
      <div>
        <Masonry cardStyle={{ cursor: "pointer" }} brakePoints={brakePoints}>
          {diplomas.map((image, id) => {
            return (
              <div onClick={() => handleDiploma(image)}>
                <Tile src={image} />
              </div>
            );
          })}
        </Masonry>
      </div>
      <Modal
        className={classes.modal}
        open={state.isModalVisible}
        onClose={closeModal}
        closeAfterTransition
        BackdropProps={{
          timeout: 500,
        }}
      >
        <div onClick={closeModal}>
          <Tile src={state.activeImage} />
        </div>
      </Modal>
    </div>
  );
}

export default Contacts;
