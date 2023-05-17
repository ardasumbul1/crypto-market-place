import Table from "../components/Table"
import handler from "../lib/myapi";
import Navbar from "../components/Navbar";
import Landing from "../components/Landing";

export default function Home({ coins, fourcoins}) {
  return(
    <div>
      <Navbar />
      <h1>{fourcoins.name}</h1>
      <Table coins={coins} fourcoins={fourcoins}/>
    </div>

  )
}


export async function getStaticProps() {

  const formattedCoins = await handler();
  const fourcoins = [formattedCoins];

    return {
      props: {
        coins: formattedCoins,
        fourcoins: fourcoins,
      },
    };
}
