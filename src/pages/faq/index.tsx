import Link from "next/link";
import Button from "@material-ui/core/Button";
import { FormattedMessage } from "react-intl";
import MainLayout from "src/components/MainLayout";
import logoPic from "/public/logo2.png";
import Image from "next/image";
import MenuMobile from "src/components/MenuMobile";
import BottomNavPanel from "src/components/BottomNavPanel";

function FAQ() {
  return (
    <>
      <MainLayout title="FAQ">
        <div className="faq-container-web">
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
          <h1 className="title">FAQ</h1>
          <div className="container-web">
            <big className="text-faq-web">
              <div className="text-web">
                <ul className="question">
                  <FormattedMessage
                    id="Q. How does Yumeiho therapy differ from classical massage?"
                    defaultMessage="Q. How does Yumeiho therapy differ from classical massage?"
                  />
                </ul>
                <ul className="answer">
                  <FormattedMessage
                    id="A. The classic massage is aimed at deep working out of the muscles of the back and is performed on a massage table. Yumeiho massage includes - (Japanese) working out the muscles and fascia of the whole body, manual therapy, visceral massage; (Vietnamese) stretch marks, twists, pulling, deep pushes. It has a systematic approach to the recovery of the body and is carried out on the mat."
                    defaultMessage="A. The classic massage is aimed at deep working out of the muscles of the back and is performed on a massage table. Yumeiho massage includes - (Japanese) working out the muscles and fascia of the whole body, manual therapy, visceral massage; (Vietnamese) stretch marks, twists, pulling, deep pushes. It has a systematic approach to the recovery of the body and is carried out on the mat."
                  />
                </ul>
              </div>

              <div className="text-web">
                <ul className="question">
                  <FormattedMessage
                    id="Q. How long does a massage last?"
                    defaultMessage="Q. How long does a massage last?"
                  />
                </ul>
                <ul className="answer">
                  <FormattedMessage
                    id="A. From 45 minutes to 1 hour"
                    defaultMessage="A. From 45 minutes to 1 hour"
                  />
                </ul>
              </div>

              <div className="text-web">
                <ul className="question">
                  <FormattedMessage
                    id="Q. Do I need to undress for a massage?"
                    defaultMessage="Q. Do I need to undress for a massage?"
                  />
                </ul>
                <ul className="answer">
                  <FormattedMessage
                    id="A. Massage is performed in changeable, comfortable clothes that you can bring to the session."
                    defaultMessage="A. Massage is performed in changeable, comfortable clothes that you can bring to the session."
                  />
                </ul>
              </div>

              <div className="text-web">
                <ul className="question">
                  <FormattedMessage
                    id="Q. Are any oils or creams used during the session?"
                    defaultMessage="Q. Are any oils or creams used during the session?"
                  />
                </ul>
                <ul className="answer">
                  <FormattedMessage
                    id="A. No, none is used."
                    defaultMessage="A. No, none is used."
                  />
                </ul>
              </div>

              <div className="text-web">
                <ul className="question">
                  <FormattedMessage
                    id="Q. How many Yumeiho massages should I have?"
                    defaultMessage="Q. How many Yumeiho massages should I have?"
                  />
                </ul>
                <ul className="answer">
                  <FormattedMessage
                    id="A. It is individual for every person. The desired range for a good result is a course from 8 to 20 sessions, with a frequency of 2-3 times a week. As a preventive measure, to maintain the body in good health, it is enough to undergo a massage course with a frequency of one time per week."
                    defaultMessage="A. It is individual for every person. The desired range for a good result is a course from 8 to 20 sessions, with a frequency of 2-3 times a week. As a preventive measure, to maintain the body in good health, it is enough to undergo a massage course with a frequency of one time per week."
                  />
                </ul>
              </div>

              <div className="text-web">
                <ul className="question">
                  <FormattedMessage
                    id="Q. How often should Yumeiho massage?"
                    defaultMessage="Q. How often should Yumeiho massage?"
                  />
                </ul>
                <ul className="answer">
                  <FormattedMessage
                    id="A. If you take Yumeiho massage courses, they can be repeated every six months or a year."
                    defaultMessage="A. If you take Yumeiho massage courses, they can be repeated every six months or a year."
                  />
                </ul>
              </div>

              <div className="text-web">
                <ul className="question">
                  <FormattedMessage
                    id="Q. Can I eat before a massage?"
                    defaultMessage="Q. Can I eat before a massage?"
                  />
                </ul>
                <ul className="answer">
                  <FormattedMessage
                    id="A. It is advisable to massage not earlier than 2 hours after eating."
                    defaultMessage="A. It is advisable to massage not earlier than 2 hours after eating."
                  />
                </ul>
              </div>

              <div className="text-web">
                <ul className="question">
                  <FormattedMessage
                    id="Q. Are there any contraindications for Yumeiho massage?"
                    defaultMessage="Q. Are there any contraindications for Yumeiho massage?"
                  />
                </ul>
                <ul className="answer">
                  <FormattedMessage
                    id="A. Like any therapeutic practice, Yumeiho massage is contraindicated for a number of diseases such as oncopathology, bone and joint infections, severe mental disorders, thrombophlebitis, skin diseases."
                    defaultMessage="A. Like any therapeutic practice, Yumeiho massage is contraindicated for a number of diseases such as oncopathology, bone and joint infections, severe mental disorders, thrombophlebitis, skin diseases."
                  />
                </ul>
              </div>

              <div className="text-web">
                <ul className="question">
                  <FormattedMessage
                    id="Q. Is it possible to massage Yumeiho with protrusions and hernias of the back?"
                    defaultMessage="Q. Is it possible to massage Yumeiho with protrusions and hernias of the back?"
                  />
                </ul>
                <ul className="answer">
                  <FormattedMessage
                    id="A. Yes, it is possible and necessary. Massage will reduce the symptoms and greatly improve the well-being."
                    defaultMessage="A. Yes, it is possible and necessary. Massage will reduce the symptoms and greatly improve the well-being."
                  />
                </ul>
              </div>

              <div className="text-web">
                <ul className="question">
                  <FormattedMessage
                    id="Q. When will the massage results appear?"
                    defaultMessage="Q. When will the massage results appear?"
                  />
                </ul>
                <ul className="answer">
                  <FormattedMessage
                    id="A. You will get tangible results after several massage sessions, but with a high probability, you will feel the result after the first session, you will feel a burst of energy, relaxation, reduction or complete disappearance of pain."
                    defaultMessage="A. You will get tangible results after several massage sessions, but with a high probability, you will feel the result after the first session, you will feel a burst of energy, relaxation, reduction or complete disappearance of pain."
                  />
                </ul>
              </div>

              <div className="text-web">
                <ul className="question">
                  <FormattedMessage
                    id="Q. Will I be hurt during the massage?"
                    defaultMessage="Q. Will I be hurt during the massage?"
                  />
                </ul>
                <ul className="answer">
                  <FormattedMessage
                    id="A. The massage of the tense muscles causes slight pain, but after a while the pain disappears."
                    defaultMessage="A. The massage of the tense muscles causes slight pain, but after a while the pain disappears."
                  />
                </ul>
              </div>
            </big>
          </div>
        </div>

        <div className="faq-container-mobile">
          <div className="menu-header-mobile">
            <div className="menu-logo-mobile">
              <Image src={logoPic} />
            </div>
            <div className="menu-title-mobile">
              <h2>FAQ</h2>
            </div>
            <MenuMobile />
          </div>

          <hr className="line" />

          <div className="container-mob">
            <big className="text-faq-mob">
              <div className="text-mob">
                <ul className="question">
                  <FormattedMessage
                    id="Q. How does Yumeiho therapy differ from classical massage?"
                    defaultMessage="Q. How does Yumeiho therapy differ from classical massage?"
                  />
                </ul>
                <ul className="answer">
                  <FormattedMessage
                    id="A. The classic massage is aimed at deep working out of the muscles of the back and is performed on a massage table. Yumeiho massage includes - (Japanese) working out the muscles and fascia of the whole body, manual therapy, visceral massage; (Vietnamese) stretch marks, twists, pulling, deep pushes. It has a systematic approach to the recovery of the body and is carried out on the mat."
                    defaultMessage="A. The classic massage is aimed at deep working out of the muscles of the back and is performed on a massage table. Yumeiho massage includes - (Japanese) working out the muscles and fascia of the whole body, manual therapy, visceral massage; (Vietnamese) stretch marks, twists, pulling, deep pushes. It has a systematic approach to the recovery of the body and is carried out on the mat."
                  />
                </ul>
              </div>

              <div className="text-mob">
                <ul className="question">
                  <FormattedMessage
                    id="Q. How long does a massage last?"
                    defaultMessage="Q. How long does a massage last?"
                  />
                </ul>
                <ul className="answer">
                  <FormattedMessage
                    id="A. From 45 minutes to 1 hour"
                    defaultMessage="A. From 45 minutes to 1 hour"
                  />
                </ul>
              </div>

              <div className="text-mob">
                <ul className="question">
                  <FormattedMessage
                    id="Q. Do I need to undress for a massage?"
                    defaultMessage="Q. Do I need to undress for a massage?"
                  />
                </ul>
                <ul className="answer">
                  <FormattedMessage
                    id="A. Massage is performed in changeable, comfortable clothes that you can bring to the session."
                    defaultMessage="A. Massage is performed in changeable, comfortable clothes that you can bring to the session."
                  />
                </ul>
              </div>

              <div className="text-mob">
                <ul className="question">
                  <FormattedMessage
                    id="Q. Are any oils or creams used during the session?"
                    defaultMessage="Q. Are any oils or creams used during the session?"
                  />
                </ul>
                <ul className="answer">
                  <FormattedMessage
                    id="A. No, none is used."
                    defaultMessage="A. No, none is used."
                  />
                </ul>
              </div>

              <div className="text-mob">
                <ul className="question">
                  <FormattedMessage
                    id="Q. How many Yumeiho massages should I have?"
                    defaultMessage="Q. How many Yumeiho massages should I have?"
                  />
                </ul>
                <ul className="answer">
                  <FormattedMessage
                    id="A. It is individual for every person. The desired range for a good result is a course from 8 to 20 sessions, with a frequency of 2-3 times a week. As a preventive measure, to maintain the body in good health, it is enough to undergo a massage course with a frequency of one time per week."
                    defaultMessage="A. It is individual for every person. The desired range for a good result is a course from 8 to 20 sessions, with a frequency of 2-3 times a week. As a preventive measure, to maintain the body in good health, it is enough to undergo a massage course with a frequency of one time per week."
                  />
                </ul>
              </div>

              <div className="text-mob">
                <ul className="question">
                  <FormattedMessage
                    id="Q. How often should Yumeiho massage?"
                    defaultMessage="Q. How often should Yumeiho massage?"
                  />
                </ul>
                <ul className="answer">
                  <FormattedMessage
                    id="A. If you take Yumeiho massage courses, they can be repeated every six months or a year."
                    defaultMessage="A. If you take Yumeiho massage courses, they can be repeated every six months or a year."
                  />
                </ul>
              </div>

              <div className="text-mob">
                <ul className="question">
                  <FormattedMessage
                    id="Q. Can I eat before a massage?"
                    defaultMessage="Q. Can I eat before a massage?"
                  />
                </ul>
                <ul className="answer">
                  <FormattedMessage
                    id="A. It is advisable to massage not earlier than 2 hours after eating."
                    defaultMessage="A. It is advisable to massage not earlier than 2 hours after eating."
                  />
                </ul>
              </div>

              <div className="text-mob">
                <ul className="question">
                  <FormattedMessage
                    id="Q. Are there any contraindications for Yumeiho massage?"
                    defaultMessage="Q. Are there any contraindications for Yumeiho massage?"
                  />
                </ul>
                <ul className="answer">
                  <FormattedMessage
                    id="A. Like any therapeutic practice, Yumeiho massage is contraindicated for a number of diseases such as oncopathology, bone and joint infections, severe mental disorders, thrombophlebitis, skin diseases."
                    defaultMessage="A. Like any therapeutic practice, Yumeiho massage is contraindicated for a number of diseases such as oncopathology, bone and joint infections, severe mental disorders, thrombophlebitis, skin diseases."
                  />
                </ul>
              </div>

              <div className="text-mob">
                <ul className="question">
                  <FormattedMessage
                    id="Q. Is it possible to massage Yumeiho with protrusions and hernias of the back?"
                    defaultMessage="Q. Is it possible to massage Yumeiho with protrusions and hernias of the back?"
                  />
                </ul>
                <ul className="answer">
                  <FormattedMessage
                    id="A. Yes, it is possible and necessary. Massage will reduce the symptoms and greatly improve the well-being."
                    defaultMessage="A. Yes, it is possible and necessary. Massage will reduce the symptoms and greatly improve the well-being."
                  />
                </ul>
              </div>

              <div className="text-mob">
                <ul className="question">
                  <FormattedMessage
                    id="Q. When will the massage results appear?"
                    defaultMessage="Q. When will the massage results appear?"
                  />
                </ul>
                <ul className="answer">
                  <FormattedMessage
                    id="A. You will get tangible results after several massage sessions, but with a high probability, you will feel the result after the first session, you will feel a burst of energy, relaxation, reduction or complete disappearance of pain."
                    defaultMessage="A. You will get tangible results after several massage sessions, but with a high probability, you will feel the result after the first session, you will feel a burst of energy, relaxation, reduction or complete disappearance of pain."
                  />
                </ul>
              </div>

              <div className="text-mob">
                <ul className="question">
                  <FormattedMessage
                    id="Q. Will I be hurt during the massage?"
                    defaultMessage="Q. Will I be hurt during the massage?"
                  />
                </ul>
                <ul className="answer">
                  <FormattedMessage
                    id="A. The massage of the tense muscles causes slight pain, but after a while the pain disappears."
                    defaultMessage="A. The massage of the tense muscles causes slight pain, but after a while the pain disappears."
                  />
                </ul>
              </div>
            </big>
          </div>
        </div>
        <BottomNavPanel />
      </MainLayout>
    </>
  );
}

export default FAQ;
