import Table from "../components/Table"
import handler from "../lib/myapi";
import Navbar from "../components/Navbar";
import WhyUs from "../components/WhyUs";
import Join from "../components/Join";
import Footer from "../components/Footer"

export default function Home({coins}) {
  return(
    <div>
      <Navbar />
      <Table coins={coins} />
      <WhyUs />
      <Join />
      <Footer />
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
