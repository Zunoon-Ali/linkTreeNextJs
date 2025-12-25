import Image from "next/image";
import HomePage from "@/app/Components/Home/page";
import Header from "../app/Partials/Header/Header"
function Home() {
  return (
    <>
        <Header />

      <HomePage />

    </>
  );
}
export default Home;