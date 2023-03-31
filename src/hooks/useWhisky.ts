import whiskies from "../data/whiskies";

export interface Whisky {
  id: number;
  destillery: string;
  edition: string;
  country: string;
  area: string;
  age: string;
  barrel: string;
  smoke: string;
  price: number;
}

const useWhiskies = () => ({ data: whiskies });

export default useWhiskies;
