import Link from "next/link";
import Button from "@material-ui/core/Button";
import Image from "next/image";
import Background from "../public/background5.jpg";

function FAQWeb() {
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
      <h1 className="title">FAQ</h1>
      <div className="container-web">
        <big className="text-faq-web">
          <div className="text-web">
            <ul className="question">
              В. Чем Юмейхо терапия отличается от классического массажа?
            </ul>
            <ul className="answer">
              О. Классический массаж направлен на глубокую проработку мышц спины
              и выполняется на массажном столе. Массаж Юмейхо включает в себя –
              (японский) проработку мышц и фасций всего тела, мануальную
              терапию, висцеральный массаж; (вьетнамский) растяжки, скрутки,
              вытягивания, глубокие продавливания. Имеет системный подход к
              восстановлению организма и выполняется на мате.
            </ul>
          </div>

          <div className="text-web">
            <ul className="question">В. Как долго длиться сеанс массажа?</ul>
            <ul className="answer">О. От 45 минут до 1 часа</ul>
          </div>

          <div className="text-web">
            <ul className="question">В. Нужно ли раздеваться для массажа?</ul>
            <ul className="answer">
              О. Массаж выполняется в сменной, удобной для вас одежде, которую
              вы можете принести на сеанс.
            </ul>
          </div>

          <div className="text-web">
            <ul className="question">
              В. Используются ли в течении сеанса какие-либо масла или крема?
            </ul>
            <ul className="answer">О. Нет, не используются.</ul>
          </div>

          <div className="text-web">
            <ul className="question">
              В. Сколько сеансов массажа Юмейхо нужно сделать?
            </ul>
            <ul className="answer">
              О. Для каждого человека индивидуально, желательный диапазон для
              хорошего результата, курс от 8 до 20 сеансов, с периодичностью 2-3
              раза в неделю. В качестве профилактики, для поддержания тела в
              хорошем самочувствии, достаточно 1 раз в неделю.
            </ul>
          </div>

          <div className="text-web">
            <ul className="question">
              В. Как часто необходимо делать Юмейхо массаж?
            </ul>
            <ul className="answer">
              О. Если вы проходите массаж Юмейхо курсами, то их можно повторять
              каждые полгода или год.
            </ul>
          </div>

          <div className="text-web">
            <ul className="question">В. Можно ли есть перед массажем?</ul>
            <ul className="answer">
              О. Желательно делать массаж не раньше, чем через 2 часа после
              приема пищи.
            </ul>
          </div>

          <div className="text-web">
            <ul className="question">
              В. Есть ли противопоказания для массажа Юмейхо?
            </ul>
            <ul className="answer">
              О. Как и любая терапевтическая практика, массаж Юмейхо
              противопоказан при ряде заболеваний: онкопатология, инфекция
              костей и суставов, тяжелые расстройства психики, тромбофлебит,
              кожные заболевания.
            </ul>
          </div>

          <div className="text-web">
            <ul className="question">
              В. Можно ли делать массаж Юмейхо при протрузиях и грыжах спины?
            </ul>
            <ul className="answer">
              О. Да, можно и нужно, массаж уменьшит симптоматику и значительно
              улучшит самочувствие.
            </ul>
          </div>

          <div className="text-web">
            <ul className="question">В. Когда появятся результаты массажа?</ul>
            <ul className="answer">
              О. Ощутимые результаты вы получите после нескольких сеансов
              массажа, однако с большой вероятностью, вы почувствуете результат
              уже после первого сеанса, вы ощутите прилив энергии, расслабление,
              уменьшение или полное исчезновение боли.
            </ul>
          </div>

          <div className="text-web">
            <ul className="question">
              В. Будет ли мне больно во время массажа?
            </ul>
            <ul className="answer">
              О. Массаж напряженных мышц вызывает легкую боль, но через
              некоторое время болезненность исчезает.
            </ul>
          </div>
        </big>
      </div>
    </div>
  );
}

export default FAQWeb;
