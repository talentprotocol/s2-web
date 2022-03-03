import Image from "next/image";
import talent0 from "atomic/_static/images/talent-0.png";
import talent1 from "atomic/_static/images/talent-1.png";
import talent2 from "atomic/_static/images/talent-2.png";
import talent3 from "atomic/_static/images/talent-3.png";
import talent4 from "atomic/_static/images/talent-4.png";
import talent5 from "atomic/_static/images/talent-5.png";
import { Card } from "../../slider/styled";

export const slidesData = [
  {
    key: "talent0",
    content: (
      <Card>
        <Image src={talent0} alt="talent0" />
      </Card>
    ),
  },
  {
    key: "talent1",
    content: (
      <Card>
        <Image src={talent1} alt="talent1" />
      </Card>
    ),
  },
  {
    key: "talent2",
    content: (
      <Card>
        <Image src={talent2} alt="talent2" />
      </Card>
    ),
  },
  {
    key: "talent3",
    content: (
      <Card>
        <Image src={talent3} alt="talent3" />
      </Card>
    ),
  },
  {
    key: "talent4",
    content: (
      <Card>
        <Image src={talent4} alt="talent4" />
      </Card>
    ),
  },
  {
    key: "talent5",
    content: (
      <Card>
        <Image src={talent5} alt="talent5" />
      </Card>
    ),
  },
];
