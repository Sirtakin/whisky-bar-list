import { collection, Firestore, getDocs } from "firebase/firestore";
import { firestore } from "./Firebase";

export const FirestoreData = () => {
  async function getCities(db: Firestore) {
    const citiesCol = collection(db, "whisky");
    const citySnapshot = await getDocs(citiesCol);
    const cityList = citySnapshot.docs.map((doc) => doc.data());
    return cityList;
  }

  console.log(getCities(firestore));
};
