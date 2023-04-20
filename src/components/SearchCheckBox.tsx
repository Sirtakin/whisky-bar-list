import { Stack, Checkbox, CheckboxGroup } from "@chakra-ui/react";
import { Whisky } from "../hooks/useWhisky";
import { SortPrice } from "./SortPrice";

interface Props {
  categories: string;
  dropdowItem: Whisky[];
}

export const SearchCheckBox = ({ categories, dropdowItem }: Props) => {
  let destillery = [
    ...new Set<string>(
      dropdowItem
        .map((whisky) => whisky.destillery)
        .sort()
        .filter((str) => str !== "")
    ),
  ];
  let edition = [
    ...new Set<string>(
      dropdowItem
        .map((whisky) => whisky.edition)
        .sort()
        .filter((str) => str !== "")
    ),
  ];
  let country = [
    ...new Set<string>(
      dropdowItem
        .map((whisky) => whisky.country)
        .sort()
        .filter((str) => str !== "")
    ),
  ];
  let area = [
    ...new Set<string>(
      dropdowItem
        .map((whisky) => whisky.area)
        .sort()
        .filter((str) => str !== "")
    ),
  ];
  let age = [
    ...new Set<string>(
      dropdowItem
        .map((whisky) => whisky.age)
        .sort()
        .filter((str) => str !== "")
    ),
  ];
  let barrel = [
    ...new Set<string>(
      dropdowItem
        .map((whisky) => whisky.barrel)
        .sort()
        .filter((str) => str !== "")
    ),
  ];
  let smoke = [
    ...new Set<string>(
      dropdowItem
        .map((whisky) => whisky.smoke)
        .sort()
        .filter((str) => str !== "")
    ),
  ];

  function mapThisCategory(mapData: string[], selectedCategory: string) {
    if (categories === selectedCategory) {
      return mapData.map((element: string, index: number) => (
        <Checkbox
          size="md"
          key={index}
          onChange={(event) => console.log(event)}
        >
          {element}
        </Checkbox>
      ));
    }
  }

  return (
    <CheckboxGroup colorScheme="blue">
      <Stack m={2} spacing={2} direction="column">
        {mapThisCategory(destillery, "Destillery")}
        {mapThisCategory(edition, "Edition")}
        {mapThisCategory(country, "Country")}
        {mapThisCategory(area, "Area")}
        {mapThisCategory(age, "Age")}
        {mapThisCategory(barrel, "Barrel")}
        {mapThisCategory(smoke, "Smoke")}
      </Stack>
    </CheckboxGroup>
  );
};
