import BbsCardList from "./components/BbsCardList";
import { BBSData } from "./types/types";

async function getBbsAllData() {
  const res = await fetch("http://localhost:3000/api/post", {
    cache: "no-store",
  });

  const bbsAllData = await res.json();
  return bbsAllData;
}

export default async function Home() {
  const bbsAllData: BBSData[] = await getBbsAllData();

  return (
    <main>
      <BbsCardList bbsAllData={bbsAllData} />
    </main>
  );
}
