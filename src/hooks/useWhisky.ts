import whiskyData from "../data/whiskyData";

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

const useWhiskies = () => ({ data: whiskyData });

export default useWhiskies;
