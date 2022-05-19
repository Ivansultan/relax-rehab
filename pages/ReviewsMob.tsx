//  import BottomNavPanel from "./BottomNavPanel";
// import Link from "next/link";
// import Button from "@material-ui/core/Button";
// import MainLayout from "./MainLayout";
// import React, { useState } from "react";

// function Reviews() {
//   const [text, setText] = useState("");

//   const reviewsData = [
//     { comment: "Review 1", timePosted: "1 of October", userName: "Vlsdjlf" },
//     { comment: "Review 2", timePosted: "12 of October", userName: "Vlsdjlf" },
//     { comment: "Review 3", timePosted: "22 of October", userName: "Vlsdjlf" },
//   ];

//   if (typeof window === "undefined") {
//     return <div>Loading...</div>;
//     // localStorage.setItem(key, value)
//   }

//   const textInput = (event) => {
//     setText(event.target.value);
//   };

//   const handlePush = () => {};

//   return (
//     <div>
//       <Link href={"/MenuMobile"}>
//         <Button variant="contained">Назад</Button>
//       </Link>

//       <p>Comment</p>
//       <input value={text} onChange={textInput}></input>
//       <button onClick={handlePush}>Push</button>

//       {reviewsData.map((el, index) => {
//         return (
//           <div key={index}>
//             <div>{el.userName}</div>
//             <div>{el.comment}</div>
//             <div>{el.timePosted}</div>
//           </div>
//         );
//       })}
//       <BottomNavPanel />
//     </div>
//   );
// }

// export default Reviews;

import BottomNavPanel from "./BottomNavPanel";
import MainLayout from "./MainLayout";
import LogoPic from "./Images/logo2.png";
import Image from "next/image";
import MenuMobile from "./MenuMobile";
import Button from "@material-ui/core/Button";
import { FormattedMessage } from "react-intl";

function ReviewsMob() {
  const readMore = () => {
    let dots = document.getElementById("dots");
    let more = document.getElementById("more");
    let btn = document.getElementById("btn");

    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btn.innerHTML = "Подробнее";
      more.style.display = "none";
    } else {
      dots.style.display = "none";
      btn.innerHTML = "Скрыть";
      more.style.display = "inline";
    }
  };

  return (
    <MainLayout title="Юмейхо терапия / Результаты работ">
      <div className="reviews-container-mobile">
        <div className="menu-header-mobile">
          <div className="menu-logo-mobile">
            <Image src={LogoPic} />
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
              Amet Umerov (24 года) - IT специалист{" "}
            </h3>
            <big className="client-review">
              Уже больше 14 месяцев посещаю Евгения и за это время могу дать, на
              мой взгляд, объективный отзыв. Исходные данные: боли в шее и спине
              из-за многочасовой сидячей работы, операция недельной давности на
              колене и голеностопе (поэтому об активном спорте забыть минимум на
              3 месяца) Цели: избавиться от боли в шее, сократить время
              реабилитации после операции, поддерживать тело в тонусе из-за
              отсутствия активного спорта, размягчить сильно напряженные мышцы и
              по возможности добавить немного растяжки Началось все с массажа
              верхней части тела (шея, спина), так как это были приоритетные
              вещи. Спустя пару недель перешли к полному массажу всего тела (с
              учетом того что, что больное колено и голеностоп нельзя было
              сильно беспокоить). Я пробовал два вида массажа: японский и
              вьетнамский. Оба массажа на проработку всего тела, отличие в том,
              что<span id="dots">...</span>
              <span id="more">
                {" "}
                вьетнамский больше на растяжку, поэтому его мы делаем реже, чем
                японский. В первое время чувствовал что мышцы забиты, но с
                каждым новым сеансом было все легче, я потихоньку научился
                расслабляться физически (меньше чувствовать боли), а также
                ментально (научился отбрасывать мысли), появилось больше
                растяжки (например заметно на упражнении бабочка для
                тазобедренного сустава). Еженедельные часовые занятия помогают
                себя легче чувствовать как физически, так и психологически.
                Особо хорошо массаж действует при занятиях спортом (например
                плавание), тогда эффект от него кратно увеличивается.
                Достигнутые цели: шейная боль прошла уже спустя несколько
                сеансов, восстановление после операции прошло быстро за счет
                постепенного увеличения нагрузки на больные места, несмотря на
                периоды когда заниматься спортом было сложно (локдауны, плохая
                погода, травма), еженедельное посещение позволяет поддерживать
                тело в тонусе, в целом ощущение тела стало более легким за счет
                устранения блоков в мышцах. На данный момент я продолжаю
                посещать Евгения, поэтому рекомендую 👍{" "}
              </span>
            </big>
            <Button id="btn" onClick={() => readMore()}>
              Подробнее
            </Button>
          </div>

          <div className="review-section-mob">
            <h3 className="client-name">Юлия (38 лет) - диетолог</h3>
            <big className="client-review">
              Про Юмейхо слышала давно хорошие отзывы и очень интересно было
              попробовать. Этот массаж мне больше напоминает гимнастику с
              глубокой проработкой суставов. Первое впечатление, чувствуешь себя
              необычно, после скруток) После третьего сеанса, почувствовала
              легкость во всем теле и прилив энергии. Ну а дальше прям в кайф.
              Очень классное впечатление от массажа! С большим удовольствием еще
              повторю курс, т.к. внешне тоже видны изменения в лучшую сторону.
              Спасибо 🌻 Женя молодец 💪
            </big>
          </div>
        </div>
      </div>
      <BottomNavPanel />
    </MainLayout>
  );
}

export default ReviewsMob;
