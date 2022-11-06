import Header from "../components/header";
import About from "../components/about";
import Tool from "../components/tool";
import Footer from "../components/footer";
import Portfolio from "../components/portfolio";


export default function Home() {
  return (
    <>
        <Header/>
        <About/>
        <Tool/>
        <Portfolio id={"portfolio"}/>
        <Footer/>
    </>
  )
}
