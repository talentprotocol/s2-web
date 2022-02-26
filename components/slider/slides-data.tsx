import Image from "next/image";
import talentCard from "atomic/_static/images/talent-card.png";
import { Card } from "./styled";

export const slidesData = [
  {
    key: 1,
    content: (
      <Card>
        <Image src={talentCard} alt="1" />
      </Card>
    ),
  },
  {
    key: 2,
    content: (
      <Card>
        <Image src={talentCard} alt="2" />
      </Card>
    ),
  },
  {
    key: 3,
    content: (
      <Card>
        <Image src={talentCard} alt="3" />
      </Card>
    ),
  },
  {
    key: 4,
    content: (
      <Card>
        <Image src={talentCard} alt="4" />
      </Card>
    ),
  },
];
