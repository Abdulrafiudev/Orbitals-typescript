import React from "react"
import styles from "./hero.module.css"
import hero_image from "../../../public/Frame 1000002719.png"
import Image from "next/image"

function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.hero_container}>
        <div className={styles.hero_container__first}>
          <h1>
            {" "}
            AI voice Intelligence built to power popular low resource African
            languages and more.
          </h1>
        </div>
        <div className={styles.hero_container__second}>
          <p>
            {" "}
            Fuelling Africa's future with advanced speech system that speaks the
            language of progress and powering the next wave of African
            innovation
          </p>
        </div>
        <div className={styles.hero_container__third}>
          <Image src={hero_image} alt="logo image" />
        </div>
      </div>
    </div>
  )
}

export default Hero
