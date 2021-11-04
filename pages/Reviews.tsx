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

function Reviews() {
  return (
    <MainLayout title="Юмейхо терапия / Результаты работ">
      <div className="header-menu-mobile">
        <div className="logo-menu-mobile">
          <Image src={LogoPic} />
        </div>
        <div className="title-menu-mobile">
          <h2>Отзывы</h2>
        </div>

        <MenuMobile />

        <BottomNavPanel />
      </div>
    </MainLayout>
  );
}

export default Reviews;
