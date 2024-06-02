import Image from "next/image"
import styles from "./page.module.css"
import Header from "./components/header/page"
import Hero from "./components/hero/page"
import Vision from "./components/vision/page"

export function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Vision />
    </>
  )
}

export default Home
