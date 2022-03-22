import { ISlide } from "../types";

import sliderImage1 from "assets/images/sliderImage1.png";
import sliderImage2 from "assets/images/sliderImage2.png";
import sliderImage3 from "assets/images/sliderImage3.png";
import sliderImage4 from "assets/images/sliderImage4.png";


export const slides: Array<ISlide> = [
    {
      image: sliderImage1,
      title: "Бесплатная парковка",
      subtitle: "Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, а также в аэропортах.",
      button: {
        text: "Подробнее",
        gradientFrom: "#13493F",
        gradientTo: "#0C7B1B"
      }
    },
    {
      image: sliderImage2,
      title: "Страховка",
      subtitle: "Полная страховка страховка автомобиля ",
      button: {
        text: "Подробнее",
        gradientFrom: "#132949",
        gradientTo: "#0C7B67"
      }
    },
    {
      image: sliderImage3,
      title: "Бензин",
      subtitle: "Полный бак на любой заправке города за наш счёт",
      button: {
        text: "Подробнее",
        gradientFrom: "#493013",
        gradientTo: "#7B0C3B"
      }
    },
    {
      image: sliderImage4,
      title: "Обслуживание",
      subtitle: "Автомобиль проходит еженедельное ТО",
      button: {
        text: "Подробнее",
        gradientFrom: "#281349",
        gradientTo: "#720C7B"
      }
    }
]