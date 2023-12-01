import "./index.css";
import Heading from "../heading";
import Box from "../box";
import ListItem from "../list-item";

import guestLogo from "./guestLogo.svg";
import bedroomLogo from "./bedroomLogo.svg";
import bedLogo from "./bedLogo.svg";
import bathsLogo from "./bathsLogo.svg";

export default function Details({ guests, bedrooms, beds, baths }) {
  return (
    <Box shadow className={"details"}>
      <Heading border>Деталі властивості:</Heading>

      <ListDetails
        guests={guests}
        bedrooms={bedrooms}
        beds={beds}
        baths={baths}
      />
    </Box>
  );
}

function ListDetails({ guests, bedrooms, beds, baths }) {
  return (
    <ul className="details__list">
      <ListItem imageSrc={guestLogo}>
        <span>{guests}</span>
        <span>гості</span>
      </ListItem>

      <ListItem imageSrc={bedroomLogo}>
        <span>{bedrooms}</span>
        <span>спальня</span>
      </ListItem>

      <ListItem imageSrc={bedLogo}>
        <span>{beds}</span>
        <span>ліжко</span>
      </ListItem>

      <ListItem imageSrc={bathsLogo}>
        <span>{baths}</span>
        <span>ванна кімната</span>
      </ListItem>
    </ul>
  );
}
