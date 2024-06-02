import React from "react"
import styles from "./vision.module.css"

function Vision() {
  interface Vision {
    header: string
    detail: string
  }

  const vison: Vision[] = [
    {
      header: `Vision`,
      detail: `our vision is to create an advanced speech recognition and intelligence system that will power Africa.`,
    },
    {
      header: `Mission`,
      detail: `Fuelling Africa's future with advanced speech system that speaks the language of progress and powering the next wave of African innovation`,
    },
  ]

  return (
    <div className={styles.vision}>
      {vison.map((item, index) => {
        return (
          <div className={styles.vision__container} key={index}>
            <h1> {item.header} </h1>
            <p> {item.detail} </p>
          </div>
        )
      })}
    </div>
  )
}

export default Vision
