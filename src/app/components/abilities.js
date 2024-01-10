import React, { useState } from "react";
import DebounceSelect from "./DebounceSelect";

export default function AbilitySelect() {
  const [value, setValue] = useState();
  async function fetchAbilities(inputValue) {
    console.log("fetching abilities", inputValue);
    return fetch("https://pokeapi.co/api/v2/ability?limit=100000&offset=0", {
      cache: "force-cache",
    })
      .then((response) => response.json())
      .then((body) =>
        body.results.map((item, index) => ({
          label: item["name"]
            .split("-")
            .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
            .join(" "),
          value: index.toString(),
        }))
      );
  }
  return (
    <DebounceSelect
      showSearch
      value={value}
      placeholder="Select Abilities"
      fetchOptions={fetchAbilities}
      onChange={(newValue) => {
        setValue(newValue);
      }}
      style={{
        width: "30%",
      }}
    />
  );
}
