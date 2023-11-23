import Footer from "./components/Footer";
import Mainpage from "./components/Mainpage";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className=" min-w-full bg-gray-700 min-h-screen p-10">
     <div className="flex flex-col">
      <Navbar/>
      <Mainpage/>
      <Footer/>
     </div>
    </main>
  )
}
