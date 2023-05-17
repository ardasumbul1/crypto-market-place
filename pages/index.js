import Table from "../components/Table"
import handler from "../lib/myapi";
import Navbar from "../components/Navbar";
import Landing from "../components/Landing";

export default function Home({coins}) {
  return(
    <div>
      <Navbar />
      <Table coins={coins} />
    </div>

  )
}


export async function getStaticProps() {

  const formattedCoins = await handler();
 
    return {
      props: {
        coins: formattedCoins,
      },
    };
}
