import Image from "next/image"
import styles from "./page.module.css"
import Header from "./components/header/page"
import Hero from "./components/hero/page"

export function Home() {
  return (
    <>
      <Header />
      <Hero />
    </>
  )
}

export default Home
