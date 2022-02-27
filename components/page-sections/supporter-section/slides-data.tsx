import Image from "next/image";
import nftCard from "atomic/_static/images/nft-card-01.png";
import { Card } from "../../slider/styled";

export const slidesData = [
  {
    key: 1,
    content: (
      <Card>
        <Image src={nftCard} alt="1" />
      </Card>
    ),
  },
  {
    key: 2,
    content: (
      <Card>
        <Image src={nftCard} alt="2" />
      </Card>
    ),
  },
  {
    key: 3,
    content: (
      <Card>
        <Image src={nftCard} alt="3" />
      </Card>
    ),
  },
  {
    key: 4,
    content: (
      <Card>
        <Image src={nftCard} alt="4" />
      </Card>
    ),
  },
];
