import BottomNavPanel from "src/components/BottomNavPanel";
import MainLayout from "src/components/MainLayout";
import logoPic from "/public/logo2.png";
import Image from "next/image";
import MenuMobile from "src/components/MenuMobile";
import Button from "@material-ui/core/Button";
import { FormattedMessage } from "react-intl";
import ReviewsWeb from "../reviews";

function ReviewsMob() {
  const readMore = () => {
    let dots = document.getElementById("dots");
    let more = document.getElementById("more");
    let btn = document.getElementById("btn");

    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btn.innerHTML = "more";
      more.style.display = "none";
    } else {
      dots.style.display = "none";
      btn.innerHTML = "less";
      more.style.display = "inline";
    }
  };

  return (
    <MainLayout title="Юмейхо терапия / Результаты работ">
      <div className="reviews-container-mobile">
        <div className="menu-header-mobile">
          <div className="menu-logo-mobile">
            <Image src={logoPic} />
          </div>
          <div className="menu-title-mobile">
            <h2>
              <FormattedMessage id="Reviews" defaultMessage="Reviews" />
            </h2>
          </div>
          <MenuMobile />
        </div>

        <hr className="line" />

        <div className="review-box-mob">
          <div className="review-section-mob">
            <h3 className="client-name">
              <FormattedMessage
                id="Amet Umerov (24 years old) - IT specialist"
                defaultMessage="Amet Umerov (24 years old) - IT specialist"
              />
            </h3>
            <big className="client-review">
              <FormattedMessage
                id="I have been visiting Evgeny for more than 14 months and during this time, I can give, in my opinion, objective review. Basic data: neck and back pain due to many hours of sedentary work, a week-old operation on the knee and ankle (therefore, you can forget about active sports for at least 3 months). Objectives: to get rid of neck pain, to reduce recovery time after surgery, to keep the body in tone due to the lack of active sports, to soften severely tense muscles and possibly add some stretch marks. It all started with an upper body massage (neck, back), as these were priority things. After a couple of weeks, a full-body massage course was started (taking into account that the diseased knee and ankle could not be much disturbed). I tried two types of massage: Japanese and Vietnamese. Both massages are aimed at working out of the whole body. The difference is that"
                defaultMessage="I have been visiting Evgeny for more than 14 months and during this time, I can give, in my opinion, objective review. Basic data: neck and back pain due to many hours of sedentary work, a week-old operation on the knee and ankle (therefore, you can forget about active sports for at least 3 months). Objectives: to get rid of neck pain, to reduce recovery time after surgery, to keep the body in tone due to the lack of active sports, to soften severely tense muscles and possibly add some stretch marks. It all started with an upper body massage (neck, back), as these were priority things. After a couple of weeks, a full-body massage course was started (taking into account that the diseased knee and ankle could not be much disturbed). I tried two types of massage: Japanese and Vietnamese. Both massages are aimed at working out of the whole body. The difference is that"
              />
              <span id="dots">...</span>
              <span id="more">
                <FormattedMessage
                  id="Vietnamese massage is focused more on stretching, so we do it less often than Japanese one. At first, I felt like my muscles were clogged, but with each new session it got easier. I slowly learned to relax physically (feel less pain) and mentally (learn to throw away thoughts), more stretch marks appeared (for example, it became noticeable on the butterfly exercise for the hip joint). Weekly one-hour trainings help to feel better both physically and psychologically. Massage works especially well during sports activities (for example, swimming). Then the effect of it is multiplied. Achieved goals: neck pain disappeared after a few sessions, recovery after surgery has passed fast due to a gradual increase in the load on the sick places. Despite periods when it was difficult to exercise (lockdowns, bad weather, injury), a weekly attendance allowed keeping the body in good shape. The whole sensation of the body is become easier due to the elimination of blocks in the muscles. Now, I continue to visit Evgeny, so I recommend him as a highly qualified specialist 👍"
                  defaultMessage="Vietnamese massage is focused more on stretching, so we do it less often than Japanese one. At first, I felt like my muscles were clogged, but with each new session it got easier. I slowly learned to relax physically (feel less pain) and mentally (learn to throw away thoughts), more stretch marks appeared (for example, it became noticeable on the butterfly exercise for the hip joint). Weekly one-hour trainings help to feel better both physically and psychologically. Massage works especially well during sports activities (for example, swimming). Then the effect of it is multiplied. Achieved goals: neck pain disappeared after a few sessions, recovery after surgery has passed fast due to a gradual increase in the load on the sick places. Despite periods when it was difficult to exercise (lockdowns, bad weather, injury), a weekly attendance allowed keeping the body in good shape. The whole sensation of the body is become easier due to the elimination of blocks in the muscles. Now, I continue to visit Evgeny, so I recommend him as a highly qualified specialist 👍"
                />
              </span>
            </big>
            <Button id="btn" onClick={() => readMore()}>
              more
            </Button>
          </div>

          <div className="review-section-mob">
            <h3 className="client-name">
              <FormattedMessage
                id="Julia (38 years old) - nutritionist"
                defaultMessage="Julia (38 years old) - nutritionist"
              />
            </h3>
            <big className="client-review">
              <FormattedMessage
                id="I heard good reviews about Yumeiho for a long time, and it was very interesting to try. This massage is more like gymnastics with a deep joint workout. The first impression is that you feel unusual after twisting. After the third session, I felt a lightness in my whole body and a surge of energy. And then just a pleasure. A very cool massage experience! I will repeat the course with great pleasure, because outwardly, changes for the better are also visible. Thank you, Jenya 🌻 You are the best 💪"
                defaultMessage="I heard good reviews about Yumeiho for a long time, and it was very interesting to try. This massage is more like gymnastics with a deep joint workout. The first impression is that you feel unusual after twisting. After the third session, I felt a lightness in my whole body and a surge of energy. And then just a pleasure. A very cool massage experience! I will repeat the course with great pleasure, because outwardly, changes for the better are also visible. Thank you, Jenya 🌻 You are the best 💪"
              />
            </big>
          </div>
        </div>
      </div>
      <ReviewsWeb />
      <BottomNavPanel />
    </MainLayout>
  );
}

export default ReviewsMob;
