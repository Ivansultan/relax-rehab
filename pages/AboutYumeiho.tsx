import Image from "next/image";
import Yumeiho from "./Images/yumeiho.png";
import Yumeiho2 from "./Images/yumeiho2.jpg";

function AboutYumeiho() {
  return (
    <div className="about-yumeiho-container">
      <div style={{ marginLeft: 15, marginRight: 15 }}>
        <text>
          <h3 style={{ textAlign: "center" }}>О ЮМЕЙХО ТЕРАПИИ</h3>

          <big>
            <div className="yumeiho">
              <Image src={Yumeiho} />
            </div>
            Юмейхо терапия с японского языка, переводится как - "восстановление
            жизненных сил", эта система имеет холистический (целостный) подход к
            восстановлению организма человека. Под понятием "жизненные силы"
            подразумевается, что при коррекции костей таза, позвоночника,
            конечностей и гипертонуса мышц, полноценно восстанавливается
            движение крови, лимфы, иннервация (нервная связь), энергетика
            человека. Сама терапия была создана профессором Масаюки Сайонджи,
            японским врачом-эсперантистом в 1978 году и на момент 2004 года, уже
            была признана и широко распространена в 73 странах мира. В основе
            Юмейхо терапии лежат древние техники восстановления физиологии путем
            равновесия и баланса, работы с фасциями, мио-суставной
            функциональной коррекции, акупрессуры, мануальной терапии,
            висцеральной хиропрактики, гимнастики.
          </big>

          <p>
            <big>
              <div className="yumeiho2">
                <Image src={Yumeiho2} />
              </div>
              Статистика утверждает, что около 98% людей имеет смещение тазовых
              костей практически с детства. Причины смещения могут быть самые
              разные: во время беременности и при родах у мам, у детей при
              рождении, при падениях , ушибах, привычка сидеть в неправильной
              позе, работа связанная с тяжелой физической нагрузкой,
              малоподвижный образ жизни. Организм представляет собой единую
              систему рычагов и связок, при смещении любого его рычага-сустава,
              непременно возникает смещение во всех других суставах в той или
              иной степени. Центром организма является линия пересечения
              позвоночника и линия подвздошных костей (линия таза). По аналогии,
              можно сказать, что тазовая кость является "фундаментом здания", а
              позвоночник и конечности его "стенами". Поэтому легко представить,
              когда говорят, что "фундамент поплыл", стены начинают рушиться. В
              этом случае Юмейхо терапия помогает привести в равновесие и баланс
              весь опорно-двигательный аппарат, улучшить работу внутренних
              органов, что в свою очередь стимулирует организм бороться с
              патологическими отклонениями и восстановить жизненные силы, для
              полноценной счастливой жизни без боли.
            </big>
          </p>
        </text>
      </div>
    </div>
  );
}

export default AboutYumeiho;
