import "./index.css";
import Box from "../box";
import Heading from "../heading";
import ListItem from "../list-item";

export default function Opportunities({
  rules,
  policy,
  transportation,
  languages,
  offers,
  instructions,
}) {
  return (
    <Box shadow className={"details"}>
      <Heading border>Додаткові властивості</Heading>
      <ListItem title="Правила дому" children={rules} />
      <ListItem title="Політика скасування" children={policy} />
      <ListItem title="Місцевий транспорт" children={transportation} />
      <ListItem title="Мови хоста" children={languages} />
      <ListItem title="Спеціальні пропозиції:" children={offers} />
      <ListItem title="Інструкції щодо реєстрації:" children={instructions} />
    </Box>
  );
}
