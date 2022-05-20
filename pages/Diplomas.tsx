import { Modal } from "@material-ui/core";
import React, { useState } from "react";
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
    require("../public/diploma1.jpg"),
    require("../public/diploma2.jpg"),
    require("../public/diploma3.jpg"),
    require("../public/diploma4.jpg"),
  ];

  const classes = useStyles();

  return (
    <div>
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
