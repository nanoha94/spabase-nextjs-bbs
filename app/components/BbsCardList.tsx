import { BBSData } from "../types/types";
import BbsCard from "./BbsCard";

interface Props {
  bbsAllData: BBSData[];
}

const BbsCardList = ({ bbsAllData }: Props) => {
  return (
    <ul className="grid lg:grid-cols-3 px-4 py-4 gap-4">
      {bbsAllData.map((data) => (
        <li key={data.id}>
          <BbsCard bbsData={data} />
        </li>
      ))}
    </ul>
  );
};

export default BbsCardList;
