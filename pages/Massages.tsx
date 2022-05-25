import React from "react";
import {
  Card,
  CardContent,
  Typography,
  CardMedia,
  CardActionArea,
} from "@material-ui/core";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import MasonryLayout from "./MasonryLayout";
import { FormattedMessage } from "react-intl";
import useStyles from "./styles";

export type MassageType = "japanese" | "vietnamese" | "relaxing" | "visceral";
type ExtraInfo = {
  title: React.ReactFragment;
  items: React.ReactElement[];
};

export type Massage = {
  title: React.ReactElement;
  shortDescription: React.ReactElement;
  description: React.ReactElement;
  images: any[];
  extraInfo: ExtraInfo[];
};
export type MassageList = { [M in MassageType]: Massage };

type Props = {};

const Massages = (props: Props) => {
  const massagesData: MassageList = {
    japanese: {
      title: <FormattedMessage id="Japanese" defaultMessage="Japanese" />,
      shortDescription: (
        <FormattedMessage
          id="(45 min. - 1 hour) - 800 UAH"
          defaultMessage="(45 min. - 1 hour) - 800 UAH"
        />
      ),
      description: (
        <FormattedMessage
          id="Yumeiho therapy dan 1 (Japanese massage technique) It is based on the body biomechanics and the effect of centere-of-gravity shift of the pelvic bones on human health.Yumeiho therapy includes the whole body lymphatic massage, gentle manual therapy and whole body muscle massage."
          defaultMessage="Yumeiho therapy dan 1 (Japanese massage technique) It is based on the body biomechanics and the effect of centere-of-gravity shift of the pelvic bones on human health.Yumeiho therapy includes the whole body lymphatic massage, gentle manual therapy and whole body muscle massage."
        />
      ),
      images: [
        "/japanese1.jpg",
        "/japanese2.jpg",
        "/japanese3.jpg",
        "/japanese4.jpg",
      ],
      extraInfo: [
        {
          title: (
            <FormattedMessage
              id="Applying these two techniques systematically and comprehensively (Yumeiho therapy dan 1,2), such problems are solved as:"
              defaultMessage="Applying these two techniques systematically and comprehensively (Yumeiho therapy dan 1,2), such problems are solved as:"
            />
          ),
          items: [
            <FormattedMessage id="Headaches" defaultMessage="Headaches" />,
            <FormattedMessage
              id="Painful menstruation"
              defaultMessage="Painful menstruation"
            />,
            <FormattedMessage
              id="Neck, back, lumbar pain"
              defaultMessage="Neck, back, lumbar pain"
            />,
            <FormattedMessage
              id="Increased fatigability"
              defaultMessage="Increased fatigability"
            />,
            <FormattedMessage
              id="Poor sleep quality"
              defaultMessage="Poor sleep quality"
            />,
            <FormattedMessage id="Scoliosis" defaultMessage="Scoliosis" />,
            <FormattedMessage id="Joint pain" defaultMessage="Joint pain" />,
            <FormattedMessage
              id="Hyper and hypotension"
              defaultMessage="Hyper and hypotension"
            />,
            <FormattedMessage
              id="Digestive disorders"
              defaultMessage="Digestive disorders"
            />,
          ],
        },
        {
          title: (
            <FormattedMessage id="It improves:" defaultMessage="It improves" />
          ),
          items: [
            <FormattedMessage
              id="Work productivity"
              defaultMessage="Work productivity"
            />,
            <FormattedMessage
              id="Tissue regeneration"
              defaultMessage="Tissue regeneration"
            />,
            <FormattedMessage
              id="The immune system, which is fortified"
              defaultMessage="The immune system, which is fortified"
            />,
            <FormattedMessage
              id="Metabolism, which is normalized"
              defaultMessage="Metabolism, which is normalized"
            />,
            <FormattedMessage
              id="Disease prevention"
              defaultMessage="Disease prevention"
            />,
            <FormattedMessage
              id="Sexual desire"
              defaultMessage="Sexual desire"
            />,
            <FormattedMessage id="Posture" defaultMessage="Posture" />,
            <FormattedMessage
              id="Circulation throughout the body"
              defaultMessage="Circulation throughout the body"
            />,
          ],
        },
      ],
    },
    vietnamese: {
      title: <FormattedMessage id="Vietnamese" defaultMessage="Vietnamese" />,
      shortDescription: (
        <FormattedMessage
          id="(45 min. - 1 hour) - 800 UAH"
          defaultMessage="(45 min. - 1 hour) - 800 UAH"
        />
      ),
      description: (
        <FormattedMessage
          id="Yumeiho therapy dan 2 (Vietnamese massage technique) This is a system of specially selected compressions, twists and stretches (based on martial arts techniques) aimed at deeply massaging muscles and ligaments, relieving stress from the whole body and increasing the joint range of motions."
          defaultMessage="Yumeiho therapy dan 2 (Vietnamese massage technique) This is a system of specially selected compressions, twists and stretches (based on martial arts techniques) aimed at deeply massaging muscles and ligaments, relieving stress from the whole body and increasing the joint range of motions."
        />
      ),
      images: [
        "/Vietnamese1.jpg",
        "/Vietnamese2.jpg",
        "/Vietnamese3.jpg",
        "/Vietnamese4.jpg",
      ],

      extraInfo: [
        {
          title: (
            <FormattedMessage
              id="Applying these two techniques systematically and comprehensively (Yumeiho therapy dan 1,2), such problems are solved as:"
              defaultMessage="Applying these two techniques systematically and comprehensively (Yumeiho therapy dan 1,2), such problems are solved as:"
            />
          ),
          items: [
            <FormattedMessage id="Headaches" defaultMessage="Headaches" />,
            <FormattedMessage
              id="Painful menstruation"
              defaultMessage="Painful menstruation"
            />,
            <FormattedMessage
              id="Neck, back, lumbar pain"
              defaultMessage="Neck, back, lumbar pain"
            />,
            <FormattedMessage
              id="Increased fatigability"
              defaultMessage="Increased fatigability"
            />,
            <FormattedMessage
              id="Poor sleep quality"
              defaultMessage="Poor sleep quality"
            />,
            <FormattedMessage id="Scoliosis" defaultMessage="Scoliosis" />,
            <FormattedMessage id="Joint pain" defaultMessage="Joint pain" />,
            <FormattedMessage
              id="Hyper and hypotension"
              defaultMessage="Hyper and hypotension"
            />,
            <FormattedMessage
              id="Digestive disorders"
              defaultMessage="Digestive disorders"
            />,
          ],
        },
        {
          title: (
            <FormattedMessage id="It improves:" defaultMessage="It improves:" />
          ),
          items: [
            <FormattedMessage
              id="Work productivity"
              defaultMessage="Work productivity"
            />,
            <FormattedMessage
              id="Tissue regeneration"
              defaultMessage="Tissue regeneration"
            />,
            <FormattedMessage
              id="The immune system, which is fortified"
              defaultMessage="The immune system, which is fortified"
            />,
            <FormattedMessage
              id="Metabolism, which is normalized"
              defaultMessage="Metabolism, which is normalized"
            />,
            <FormattedMessage
              id="Disease prevention"
              defaultMessage="Disease prevention"
            />,
            <FormattedMessage
              id="Sexual desire"
              defaultMessage="Sexual desire"
            />,
            <FormattedMessage id="Posture" defaultMessage="Posture" />,
            <FormattedMessage
              id="Circulation throughout the body"
              defaultMessage="Circulation throughout the body"
            />,
          ],
        },
      ],
    },
    relaxing: {
      title: (
        <FormattedMessage
          id="Remedial & Relaxing"
          defaultMessage="Remedial & Relaxing"
        />
      ),
      shortDescription: (
        // <FormattedMessage id="Neck-collar area (remedial and relaxing massage)" />
        <FormattedMessage
          id="(45 min. - 1 hour) - 500 UAH"
          defaultMessage="(45 min. - 1 hour) - 500 UAH"
        />
      ),
      description: (
        <FormattedMessage
          id="Neck-collar area massage. It is focused on the muscles around the neck, chest, and shoulder area."
          defaultMessage="Neck-collar area massage. It is focused on the muscles around the neck, chest, and shoulder area."
        />
      ),
      images: [
        "/relaxing1.jpg",
        "/relaxing2.jpg",
        "/relaxing3.jpg",
        "/relaxing4.jpg",
      ],

      extraInfo: [
        {
          title: "",
          items: [
            <FormattedMessage
              id="Relaxes the muscles of the neck and collar area"
              defaultMessage="Relaxes the muscles of the neck and collar area"
            />,
            <FormattedMessage
              id="Improves blood circulation and metabolism in the cervical spine."
              defaultMessage="Improves blood circulation and metabolism in the cervical spine."
            />,
            <FormattedMessage
              id="Accelerates the lymph drainage"
              defaultMessage="Accelerates the lymph drainage"
            />,
            <FormattedMessage
              id="Improves the cerebral circulation"
              defaultMessage="Improves the cerebral circulation"
            />,
            <FormattedMessage
              id="Relieves pain in the head, neck, and back area"
              defaultMessage="Relieves pain in the head, neck, and back area"
            />,
            <FormattedMessage
              id="Eliminates tight and stiff muscles"
              defaultMessage="Eliminates tight and stiff muscles"
            />,
            <FormattedMessage
              id="Normalizes sleep"
              defaultMessage="Normalizes sleep"
            />,
            <FormattedMessage
              id="Improves the nervous system function"
              defaultMessage="Improves the nervous system function"
            />,
          ],
        },
      ],
    },
    visceral: {
      title: <FormattedMessage id="Abdominal" defaultMessage="Abdominal" />,
      shortDescription: (
        <FormattedMessage
          id="(45 min. - 1 hour) - 500 UAH"
          defaultMessage="(45 min. - 1 hour) - 500 UAH"
        />
      ),
      description: (
        <FormattedMessage
          id="Visceral chiropractic (abdominal massage) This is a massage technique for influencing internal organs through compression, pounding, kneading, effleurage to recover the correct organ positions and microcirculation around them. It helps to manage a wide range of organ dysfunctions throughout the body."
          defaultMessage="Visceral chiropractic (abdominal massage) This is a massage technique for influencing internal organs through compression, pounding, kneading, effleurage to recover the correct organ positions and microcirculation around them. It helps to manage a wide range of organ dysfunctions throughout the body."
        />
      ),
      images: [
        "/visceral1.jpg",
        "/visceral2.jpg",
        "/visceral3.jpg",
        "/visceral4.jpg",
      ],

      extraInfo: [
        {
          title: (
            <FormattedMessage
              id="Abdominal massage eliminates:"
              defaultMessage="Abdominal massage eliminates:"
            />
          ),
          items: [
            <FormattedMessage
              id="Gastrointestinal tract dysfunctions"
              defaultMessage="Gastrointestinal tract dysfunctions"
            />,
            <FormattedMessage
              id="Kidney pathologies"
              defaultMessage="Kidney pathologies"
            />,
            <FormattedMessage
              id="Reproductive system disorders in men and women"
              defaultMessage="Reproductive system disorders in men and women"
            />,
            <FormattedMessage
              id="Poor blood circulation"
              defaultMessage="Poor blood circulation"
            />,
            <FormattedMessage
              id="Respiratory diseases"
              defaultMessage="Respiratory diseases"
            />,
            <FormattedMessage
              id="Pancreatitis, the liver and gallbladder dysfunctions."
              defaultMessage="Pancreatitis, the liver and gallbladder dysfunctions."
            />,
          ],
        },
        {
          title: (
            <FormattedMessage id="It improves:" defaultMessage="It improves:" />
          ),
          items: [
            <FormattedMessage
              id="The cardiovascular system function"
              defaultMessage="The cardiovascular system function"
            />,
            <FormattedMessage id="Metabolism" defaultMessage="Metabolism" />,
            <FormattedMessage
              id="Corrects overweight"
              defaultMessage="Corrects overweight"
            />,
            <FormattedMessage
              id="Psychoemotional state"
              defaultMessage="Psychoemotional state"
            />,
            <FormattedMessage
              id="Catarrhal diseases prevention and immune system stimulation."
              defaultMessage="Catarrhal diseases prevention and immune system stimulation."
            />,
          ],
        },
      ],
    },
  };

  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const [activeMassage, setActiveMassage] = React.useState<Massage | undefined>(
    undefined
  );

  const handleCardInfo = (massage?: Massage) => {
    setOpen(!open);

    setActiveMassage(massage);
  };

  return (
    <div id="massages" className="massages-container">
      <div className={classes.cardsContainer}>
        {Object.values(massagesData).map((massage, index) => {
          return (
            <Card key={index} className={classes.card}>
              <CardActionArea onClick={() => handleCardInfo(massage)}>
                <Typography
                  className={classes.title}
                  color="textSecondary"
                  gutterBottom
                >
                  {massage.title}
                </Typography>

                <CardMedia
                  className={classes.media}
                  image={massage.images[0]}
                />
                <CardContent>
                  <Typography paragraph className={classes.shortDescription}>
                    {massage.shortDescription}
                  </Typography>
                  <Typography
                    className={classes.pos}
                    color="textSecondary"
                  ></Typography>
                  <Typography variant="body2" component="p">
                    <br />
                    {}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          );
        })}

        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={open}
          onClose={() => handleCardInfo()}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <div className={classes.paper}>
              <h2 className={classes.modalTitle} id="transition-modal-title">
                {activeMassage?.title}
              </h2>

              <div className={classes.modalDescription}>
                {activeMassage?.description}
              </div>

              <div className={classes.modalImages}>
                <MasonryLayout images={activeMassage?.images! ?? []} />
              </div>

              <div>
                {activeMassage?.extraInfo.map((info) => {
                  console.log("info", info);
                  return (
                    <div className={classes.modalExtraInfo}>
                      {info.title}
                      <ol>
                        {info.items.map((item) => {
                          return <li>{item}</li>;
                        })}
                      </ol>
                    </div>
                  );
                })}
              </div>
            </div>
          </Fade>
        </Modal>
      </div>
    </div>
  );
};

export default Massages;
