import {
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
} from "@chakra-ui/react";
import { useState } from "react";
import { Whisky } from "../hooks/useWhisky";

interface Props {
  priceRange: Whisky[];
}

export const SortPrice = ({ priceRange }: Props) => {
  let price = [
    ...new Set<number>(priceRange.map((whisky) => whisky.price).sort()),
  ];

  let minPrice = price[0];
  let maxPrice = price[price.length - 1];

  const [selectedPrice, setSelectedPrice] = useState([minPrice, maxPrice]);

  console.log(selectedPrice);

  return (
    <>
      <RangeSlider
        aria-label={["min", "max"]}
        defaultValue={[minPrice, maxPrice]}
        min={price[0]}
        max={price[price.length - 1]}
        onChangeEnd={(val) => setSelectedPrice(val)}
      >
        <RangeSliderTrack>
          <RangeSliderFilledTrack />
        </RangeSliderTrack>
        <RangeSliderThumb index={0} />
        <RangeSliderThumb index={1} />
      </RangeSlider>
    </>
  );
};
