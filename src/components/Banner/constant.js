import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faHamburger } from "@fortawesome/free-solid-svg-icons";

export const bannerItems = [
  { view: "Online Course", link: "/s/store" },
  { view: "blog", link: "/blog" },
  {
    view: <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>,
    link: "/cart",
  },
];
