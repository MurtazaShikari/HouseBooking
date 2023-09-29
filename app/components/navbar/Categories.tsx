"use client";

import Container from "../Container";
import { TbBeach, TbMountain, TbPool } from "react-icons/tb";
import {
  GiBarn,
  GiBoatFishing,
  GiCactus,
  GiCastle,
  GiCaveEntrance,
  GiForestCamp,
  GiIsland,
  GiWindmill,
} from "react-icons/gi";
import { IoDiamond } from "react-icons/io5";
import { BsSnow } from "react-icons/bs";
import { MdOutlineVilla } from "react-icons/md";
import { FaSkiing } from "react-icons/fa";
import CategoryBox from "../CategoryBox";
import {
  usePathname,
  useSearchParams,
} from "next/dist/client/components/navigation";

export const categories = [
  {
    label: "Beach",
    Icon: TbBeach,
    description: "This property is closed to the beach",
  },
  {
    label: "Windmills",
    Icon: GiWindmill,
    description: "This property is has windimlls",
  },
  {
    label: "Modern",
    Icon: MdOutlineVilla,
    description: "This property is modern",
  },
  {
    label: "Countryside",
    Icon: TbMountain,
    description: "This property is in the countryside!",
  },
  {
    label: "Pools",
    Icon: TbPool,
    description: "This property has a pool",
  },
  {
    label: "Islands",
    Icon: GiIsland,
    description: "This property is on an island",
  },
  {
    label: "Lake",
    Icon: GiBoatFishing,
    description: "This property is close to a lake",
  },
  {
    label: "Skiing",
    Icon: FaSkiing,
    description: "This property has skiing activities",
  },
  {
    label: "Castles",
    Icon: GiCastle,
    description: "This property is in a castle",
  },
  {
    label: "Camping",
    Icon: GiForestCamp,
    description: "This property has camping activities",
  },
  {
    label: "Artic",
    Icon: BsSnow,
    description: "This property is in the arctic",
  },
  {
    label: "Cave",
    Icon: GiCaveEntrance,
    description: "This property is in a cave",
  },
  {
    label: "Desert",
    Icon: GiCactus,
    description: "This property is in the desert",
  },
  {
    label: "Barn",
    Icon: GiBarn,
    description: "This property is in the barn",
  },
  {
    label: "Lux",
    Icon: IoDiamond,
    description: "This property is luxurious",
  },
];
const Categories = () => {
  const params = useSearchParams();
  const category = params?.get("category");
  const pathname = usePathname();

  const isMainPage = pathname === "/";
  if (!isMainPage) {
    return null;
  }
  return (
    <Container>
      <div
        className="
        pt-4
        flex
        flex-row
        items-center
        justify-between
        overflow-x-hidden"
      >
        {categories.map((item) => (
          <CategoryBox
            key={item.label}
            label={item.label}
            selected={category === item.label}
            icon={item.Icon}
          />
        ))}
      </div>
    </Container>
  );
};

export default Categories;
