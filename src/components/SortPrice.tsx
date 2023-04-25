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

  const minPrice = price[0];
  const maxPrice = price[price.length - 1];

  const [selectedPrice, setSelectedPrice] = useState([minPrice, maxPrice]);

  const handleChange = (selectedPrice: number[]) =>
    setSelectedPrice(selectedPrice);

  const handleMinInput = (value: string) => {
    setSelectedPrice(
      selectedPrice.map((v, i) => (i === 0 ? parseInt(value) : v))
    );
  };

  const handleMaxInput = (value: string) => {
    setSelectedPrice(
      selectedPrice.map((v, i) => (i === 1 ? parseInt(value) : v))
    );
  };

  return (
    <>
      <Flex mb={3}>
        <Box>
          <NumberInput
            maxW="100px"
            mr="2rem"
            defaultValue={selectedPrice[0]}
            min={minPrice}
            max={selectedPrice[1]}
            keepWithinRange={false}
            value={selectedPrice[0]}
            onChange={handleMinInput}
          >
            <NumberInputField />
          </NumberInput>
        </Box>
        <Spacer />
        <Box>
          <NumberInput
            maxW="100px"
            mr="2rem"
            defaultValue={maxPrice}
            min={selectedPrice[0]}
            max={maxPrice}
            keepWithinRange={false}
            value={selectedPrice[1]}
            onChange={handleMaxInput}
          >
            <NumberInputField />
          </NumberInput>
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
