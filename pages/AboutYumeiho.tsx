import Image from "next/image";
import Yumeiho from "./Images/yumeiho.png";
import Yumeiho2 from "./Images/yumeiho2.jpg";
import FooterMob from "./FooterMob";
import FooterWeb from "./FooterWeb";
import { FormattedMessage } from "react-intl";

function AboutYumeiho() {
  return (
    <>
      <div className="about-yumeiho-container">
        <h3 className="yumeiho-title">
          <FormattedMessage
            id="ABOUT YUMEIHO THERAPY"
            defaultMessage="ABOUT YUMEIHO THERAPY"
          />
        </h3>
        <div className="first-section">
          <div className="yumeiho">
            <Image className="img" src={Yumeiho} />
          </div>
          <div className="text">
            <big>
              <FormattedMessage
                id="Yumeiho therapy from Japanese is translated as (recovery of vitality.)recovery of vitality. This system has a holistic approach to the recovery of the human body. By the concept of (vitality) means that during correction of the bones of the pelvis, spine, limbs and hypertone of muscles, the movement of blood, lymph, innervation (nerve connection), and human energy are fully restored. Japanese Esperantist, Professor Masayuki Saionji in 1978, created the therapy itself, and by 2004 it had already been recognized and widely distributed in 73 countries around the world. The basis of Yumeiho therapy is ancient techniques for restoration of physiology through equilibrium and balance, working with fascias, myo-articular functional correction, acupressure, manual therapy, visceral chiropractics, and gymnastics."
                defaultMessage="Yumeiho therapy from Japanese is translated as (recovery of vitality.)recovery of vitality. This system has a holistic approach to the recovery of the human body. By the concept of (vitality) means that during correction of the bones of the pelvis, spine, limbs and hypertone of muscles, the movement of blood, lymph, innervation (nerve connection), and human energy are fully restored. Japanese Esperantist, Professor Masayuki Saionji in 1978, created the therapy itself, and by 2004 it had already been recognized and widely distributed in 73 countries around the world. The basis of Yumeiho therapy is ancient techniques for restoration of physiology through equilibrium and balance, working with fascias, myo-articular functional correction, acupressure, manual therapy, visceral chiropractics, and gymnastics."
              />
            </big>
          </div>
        </div>

        <div className="second-section">
          <div className="yumeiho2">
            <Image className="img" src={Yumeiho2} />
          </div>
          <div className="text2">
            <big>
              <FormattedMessage
                id="Statistics say that about 98% of people have a displacement of the pelvic bones almost since childhood. The reasons for the displacement can be very different: during pregnancy and childbirth in mothers, at birth in children, with falls, bruises, the habit of sitting in the wrong position, work associated with heavy physical exertion, a sedentary lifestyle. The body is a single system of levers and ligaments, when the displacement of any of its lever-joint necessarily cause the displacement in all other joints in one degree or another. The center of the body is the line of intersection of the spine and the line of the ilium (line of the pelvis). By analogy, we can say that the pelvic bone is the (foundation of the building), and the spine and limbs are its (walls). Therefore, it is easy to imagine when they say, (the foundation has floated), the walls start to collapse. In this case, Yumeiho therapy helps to bring the musculoskeletal system completely into balance, improve the functioning of the internal organs, which in turn stimulates the body to fight pathological abnormalities and restore vitality, for a full happy life without pain."
                defaultMessage="Statistics say that about 98% of people have a displacement of the pelvic bones almost since childhood. The reasons for the displacement can be very different: during pregnancy and childbirth in mothers, at birth in children, with falls, bruises, the habit of sitting in the wrong position, work associated with heavy physical exertion, a sedentary lifestyle. The body is a single system of levers and ligaments, when the displacement of any of its lever-joint necessarily cause the displacement in all other joints in one degree or another. The center of the body is the line of intersection of the spine and the line of the ilium (line of the pelvis). By analogy, we can say that the pelvic bone is the (foundation of the building), and the spine and limbs are its (walls). Therefore, it is easy to imagine when they say, (the foundation has floated), the walls start to collapse. In this case, Yumeiho therapy helps to bring the musculoskeletal system completely into balance, improve the functioning of the internal organs, which in turn stimulates the body to fight pathological abnormalities and restore vitality, for a full happy life without pain."
              />
            </big>
          </div>
        </div>
        <FooterMob />
      </div>
      <div className="about-yumeiho-container-web">
        <h3 className="yumeiho-title-web">
          <FormattedMessage
            id="ABOUT YUMEIHO THERAPY"
            defaultMessage="ABOUT YUMEIHO THERAPY"
          />
        </h3>
        <div className="first-section-web">
          <div className="yumeiho-web">
            <Image className="img-web" src={Yumeiho} />
          </div>
          <div className="text-container-web">
            <big className="text-web">
              <FormattedMessage
                id="Yumeiho therapy from Japanese is translated as (recovery of vitality.)recovery of vitality. This system has a holistic approach to the recovery of the human body. By the concept of (vitality) means that during correction of the bones of the pelvis, spine, limbs and hypertone of muscles, the movement of blood, lymph, innervation (nerve connection), and human energy are fully restored. Japanese Esperantist, Professor Masayuki Saionji in 1978, created the therapy itself, and by 2004 it had already been recognized and widely distributed in 73 countries around the world. The basis of Yumeiho therapy is ancient techniques for restoration of physiology through equilibrium and balance, working with fascias, myo-articular functional correction, acupressure, manual therapy, visceral chiropractics, and gymnastics."
                defaultMessage="Yumeiho therapy from Japanese is translated as (recovery of vitality.)recovery of vitality. This system has a holistic approach to the recovery of the human body. By the concept of (vitality) means that during correction of the bones of the pelvis, spine, limbs and hypertone of muscles, the movement of blood, lymph, innervation (nerve connection), and human energy are fully restored. Japanese Esperantist, Professor Masayuki Saionji in 1978, created the therapy itself, and by 2004 it had already been recognized and widely distributed in 73 countries around the world. The basis of Yumeiho therapy is ancient techniques for restoration of physiology through equilibrium and balance, working with fascias, myo-articular functional correction, acupressure, manual therapy, visceral chiropractics, and gymnastics."
              />
            </big>
          </div>
        </div>

        <div className="second-section-web">
          <div className="yumeiho2-web">
            <Image className="img2-web" src={Yumeiho2} />
          </div>
          <div className="text2-container-web">
            <big className="text2-web">
              <FormattedMessage
                id="Statistics say that about 98% of people have a displacement of the pelvic bones almost since childhood. The reasons for the displacement can be very different: during pregnancy and childbirth in mothers, at birth in children, with falls, bruises, the habit of sitting in the wrong position, work associated with heavy physical exertion, a sedentary lifestyle. The body is a single system of levers and ligaments, when the displacement of any of its lever-joint necessarily cause the displacement in all other joints in one degree or another. The center of the body is the line of intersection of the spine and the line of the ilium (line of the pelvis). By analogy, we can say that the pelvic bone is the (foundation of the building), and the spine and limbs are its (walls). Therefore, it is easy to imagine when they say, (the foundation has floated), the walls start to collapse. In this case, Yumeiho therapy helps to bring the musculoskeletal system completely into balance, improve the functioning of the internal organs, which in turn stimulates the body to fight pathological abnormalities and restore vitality, for a full happy life without pain."
                defaultMessage="Statistics say that about 98% of people have a displacement of the pelvic bones almost since childhood. The reasons for the displacement can be very different: during pregnancy and childbirth in mothers, at birth in children, with falls, bruises, the habit of sitting in the wrong position, work associated with heavy physical exertion, a sedentary lifestyle. The body is a single system of levers and ligaments, when the displacement of any of its lever-joint necessarily cause the displacement in all other joints in one degree or another. The center of the body is the line of intersection of the spine and the line of the ilium (line of the pelvis). By analogy, we can say that the pelvic bone is the (foundation of the building), and the spine and limbs are its (walls). Therefore, it is easy to imagine when they say, (the foundation has floated), the walls start to collapse. In this case, Yumeiho therapy helps to bring the musculoskeletal system completely into balance, improve the functioning of the internal organs, which in turn stimulates the body to fight pathological abnormalities and restore vitality, for a full happy life without pain."
              />
            </big>
          </div>
        </div>
        <FooterWeb />
      </div>
    </>
  );
}

export default AboutYumeiho;
