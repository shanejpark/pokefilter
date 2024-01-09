import React from "react";

import AsyncSelect from "react-select/async";

export default function MoveSelect() {
  async function promiseOptions(inputValue) {
    const url = "https://pokeapi.co/api/v2/move?limit=100000&offset=0";
    try {
      const response = await fetch(url, {
        method: "GET",
        cache: "force-cache",
      });
      const result = await response.json();
      const names = result.results.map(function (item, index) {2
        return {
          label: item["name"]
            .split("-")
            .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
            .join(" "),
          value: index.toString(),
        };
      });
      console.log("wow");
      return names.filter((i) =>
        i.label.toLowerCase().includes(inputValue.toLowerCase())
      );
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <AsyncSelect
      isMulti
      cacheOptions
      defaultOptions
      loadOptions={promiseOptions}
    />
  );
}
