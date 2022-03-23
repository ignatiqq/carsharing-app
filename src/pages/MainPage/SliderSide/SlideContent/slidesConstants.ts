import { ISlide } from "../types";

import sliderImage1 from "assets/images/sliderImage1.png";
import sliderImage2 from "assets/images/sliderImage2.png";
import sliderImage3 from "assets/images/sliderImage3.png";
import sliderImage4 from "assets/images/sliderImage4.png";


export const slides: Array<ISlide> = [
    {
      image: sliderImage1,
      title: "Free parking",
      subtitle: "Leave your car in paid city parking lots and permitted places without violating traffic rules, as well as at airports.",
      button: {
        text: "Details",
        gradientFrom: "#13493F",
        gradientTo: "#0C7B1B"
      }
    },
    {
      image: sliderImage2,
      title: "Insurance",
      subtitle: "Full car insurance",
      button: {
        text: "Details",
        gradientFrom: "#132949",
        gradientTo: "#0C7B67"
      }
    },
    {
      image: sliderImage3,
      title: "Petrol",
      subtitle: "A full tank at any gas station in the city at our expense",
      button: {
        text: "Details",
        gradientFrom: "#493013",
        gradientTo: "#7B0C3B"
      }
    },
    {
      image: sliderImage4,
      title: "Service",
      subtitle: "The car goes through a weekly maintenance",
      button: {
        text: "Details",
        gradientFrom: "#281349",
        gradientTo: "#720C7B"
      }
    }
]