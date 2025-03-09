import {
  pageFive,
  pageFour,
  pageOne,
  pageSeven,
  pageSix,
  pageThree,
  pageTwo,
} from "../assets/images";

export const handleGetImage = (step = 0) => {
  switch (step) {
    case 1:
      return pageOne;
    case 2:
      return pageTwo;
    case 3:
      return pageThree;
    case 4:
      return pageFour;
    case 5:
      return pageFive;
    case 6:
      return pageSix;
    case 7:
      return pageSeven;
    default:
      return pageOne;
  }
};
