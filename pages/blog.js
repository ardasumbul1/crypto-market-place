import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import dbConnect from '../lib/db';

dbConnect();

export default function Blog(){
    return(
        <div>
            <Navbar />
            <Footer />
        </div>
    )
}



export default function handler(req, res) {
  // Your API route logic goes here
  // You can now use Mongoose models and perform database operations
}