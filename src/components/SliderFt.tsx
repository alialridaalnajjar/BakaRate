// import Slider from "react-slick";
// import { animes } from "../data/animes";
// import Card from "./Card";

// export default function SimpleSlider() {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 300,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     centerMode: true,
//     centerPadding: "0px",
//   };

//   const x = animes.filter(
//     (anime) =>
//       anime.title.toLowerCase() === "solo leveling" ||
//       anime.title.toLowerCase() === "blue lock" ||
//       anime.title.toLowerCase() === "black clover"
//   );

//   return (
//     <Slider {...settings}>
//       {x.map((anime) => (
//         <div key={anime.title} className="flex flex-col items-center">
//           <h1 className="text-2xl font-semibold mb-4">Featured Now</h1>
//           <div className="relative flex flex-col items-center w-full max-w-md mx-auto">
//             <img
//               src={anime?.ft}
//               className="rounded-3xl w-full max-h-64 object-cover"
//               alt=""
//             />
//             <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-violet-500/60 bg-clip-padding backdrop-filter backdrop-blur-lg rounded-3xl p-4 w-11/12">
//               <Card
//                 item={{
//                   title: anime.title,
//                   hasSub: anime.hasSub,
//                   hasDub: anime.hasDub,
//                   imgSrc: anime.imgSrc,
//                   rate: anime.rate,
//                 }}
//               />
//             </div>
//           </div>
//         </div>
//       ))}
//     </Slider>
//   );
// }
