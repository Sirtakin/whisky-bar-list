import {
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  Box,
  Flex,
  GridItem,
  Grid,
  Text,
  Spacer,
  NumberInput,
  NumberInputField,
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

  const handleChange = (selectedPrice: number[]) =>
    setSelectedPrice(selectedPrice);

  const handleMinInput = (value: number) => {
    setSelectedPrice(selectedPrice.map((v, i) => (i === 0 ? value : v)));
  };

  console.log(selectedPrice);

  return (
    <>
      <Flex mb={3}>
        <Box>
          <Text>{selectedPrice[0]}</Text>
          <NumberInput
            maxW="100px"
            mr="2rem"
            inputMode="decimal"
            min={selectedPrice[0]}
            defaultValue={selectedPrice[0]}
            value={selectedPrice[0]}
            onChange={handleMinInput}
          >
            <NumberInputField />
          </NumberInput>
        </Box>
        <Spacer />
        <Box>
          <Text>{selectedPrice[1]}</Text>
        </Box>
      </Flex>
      <Box m={2}>
        <RangeSlider
          aria-label={["min", "max"]}
          defaultValue={[minPrice, maxPrice]}
          min={price[0]}
          max={price[price.length - 1]}
          onChangeEnd={handleChange}
        >
          <RangeSliderTrack>
            <RangeSliderFilledTrack />
          </RangeSliderTrack>
          <RangeSliderThumb
            index={0}
            fontSize="sm"
            boxSize="32px"
            children={selectedPrice[0]}
          />
          <RangeSliderThumb
            index={1}
            fontSize="sm"
            boxSize="32px"
            children={selectedPrice[1]}
          />
        </RangeSlider>
      </Box>
    </>
  );
};
