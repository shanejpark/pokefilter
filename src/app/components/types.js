const TypeList = [
  {
    label: "Normal",
    value: "normal",
    icon: "/types/normal.png",
  },
  {
    label: "Fighting",
    value: "fighting",
    icon: "/types/fighting.png",
  },
  {
    label: "Flying",
    value: "flying",
    icon: "/types/flying.png",
  },
  {
    label: "Poison",
    value: "poison",
    icon: "/types/poison.png",
  },
  {
    label: "Ground",
    value: "ground",
    icon: "/types/ground.png",
  },
  {
    label: "Rock",
    value: "rock",
    icon: "/types/rock.png",
  },
  {
    label: "Bug",
    value: "bug",
    icon: "/types/bug.png",
  },
  {
    label: "Ghost",
    value: "ghost",
    icon: "/types/ghost.png",
  },
  {
    label: "Steel",
    value: "steel",
    icon: "/types/steel.png",
  },
  {
    label: "Fire",
    value: "fire",
    icon: "/types/fire.png",
  },
  {
    label: "Water",
    value: "water",
    icon: "/types/water.png",
  },
  {
    label: "Grass",
    value: "grass",
    icon: "/types/grass.png",
  },
  {
    label: "Electric",
    value: "electric",
    icon: "/types/electric.png",
  },
  {
    label: "Psychic",
    value: "psychic",
    icon: "/types/psychic.png",
  },
  {
    label: "Ice",
    value: "ice",
    icon: "/types/ice.png",
  },
  {
    label: "Dragon",
    value: "dragon",
    icon: "/types/dragon.png",
  },
  {
    label: "Dark",
    value: "dark",
    icon: "/types/dark.png",
  },
  {
    label: "Fairy",
    value: "fairy",
    icon: "/types/fairy.png",
  },
];

import React, { useState } from "react";
import { Select, Space } from "antd";
import Image from "next/image";

export default function TypeSelect() {
  const [value, setValue] = useState();
  return (
    <Select
      mode="multiple"
      value={value}
      placeholder="Select Types"
      onChange={(newValue) => {
        setValue(newValue);
      }}
      style={{
        width: "30%",
      }}
      options={TypeList}
      optionRender={(option) => (
        <Space>
          <span role="img" aria-label={option.data.label}>
            <Image alt="types" src={option.data.icon} width={15} height={15} />
          </span>
          {option.data.label}
        </Space>
      )}
    />
  );
}
