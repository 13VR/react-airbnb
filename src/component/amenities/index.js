import "./index.css";
import Heading from "../heading";
import Box from "../box";
import ListItem from "../list-item";

import poolLogo from "./poolLogo.svg";
import gymLogo from "./gymLogo.svg";
import breakfastLogo from "./breakfastLogo.svg";
import wiFiLogo from "./wiFiLogo.svg";
import parkingLogo from "./parkingLogo.svg";
import petsLogo from "./petsLogo.svg";
import airportLogo from "./airportLogo.svg";
import serviceLogo from "./serviceLogo.svg";
import roomServiceLogo from "./roomServiceLogo.svg";
import childLogo from "./childLogo.svg";

export default function Amenities({
  pool,
  gym,
  breakfast,
  wiFi,
  parking,
  pets,
  airport,
  service,
  roomService,
  child,
}) {
  return (
    <Box shadow className={"details"}>
      <Heading border>Зручності</Heading>

      <ListDetails
        pool={pool}
        gym={gym}
        breakfast={breakfast}
        wiFi={wiFi}
        parking={parking}
        pets={pets}
        airport={airport}
        service={service}
        roomService={roomService}
        child={child}
      />
    </Box>
  );
}

function ListDetails({
  pool,
  gym,
  breakfast,
  wiFi,
  parking,
  pets,
  airport,
  service,
  roomService,
  child,
}) {
  return (
    <ul className="details__list">
      {pool ? (
        <ListItem imageSrc={poolLogo}>
          <span>{pool}</span>
          <span>Басейн</span>
        </ListItem>
      ) : null}

      {gym ? (
        <ListItem imageSrc={gymLogo}>
          <span>{gym}</span>
          <span>Спортивний зал</span>
        </ListItem>
      ) : null}

      {breakfast ? (
        <ListItem imageSrc={breakfastLogo}>
          <span>{breakfast}</span>
          <span>Безкоштовний сніданок</span>
        </ListItem>
      ) : null}

      {wiFi ? (
        <ListItem imageSrc={wiFiLogo}>
          <span>{wiFi}</span>
          <span>Безкоштовний WI-FI</span>
        </ListItem>
      ) : null}

      {parking ? (
        <ListItem imageSrc={parkingLogo}>
          <span>{parking}</span>
          <span>Безкоштовний WI-FI</span>
        </ListItem>
      ) : null}

      {pets ? (
        <ListItem imageSrc={petsLogo}>
          <span>{parking}</span>
          <span>Дозволено розміщення з домашніми тваринами</span>
        </ListItem>
      ) : null}

      {airport ? (
        <ListItem imageSrc={airportLogo}>
          <span>{airport}</span>
          <span>Трансфер до/з аеропорту</span>
        </ListItem>
      ) : null}

      {service ? (
        <ListItem imageSrc={serviceLogo}>
          <span>{service}</span>
          <span>Консьєрж-сервіс</span>
        </ListItem>
      ) : null}

      {roomService ? (
        <ListItem imageSrc={roomServiceLogo}>
          <span>{roomService}</span>
          <span>Обслуговування номерів</span>
        </ListItem>
      ) : null}

      {child ? (
        <ListItem imageSrc={childLogo}>
          <span>{child}</span>
          <span>Підходить для дітей</span>
        </ListItem>
      ) : null}
    </ul>
  );
}
