import React from "react"
import styles from "./team.module.css"
import bello from "../../../public/bello_tukur.png"
import linkdin from "../../../public/devicon_linkedin.png"
import Image from "next/image"
import Link from "next/link"

function Team() {
  interface team {
    picture: string | any
    name: string
    image: string | any
    ceo: string
    details: string
    extension: string
  }

  class Team implements team {
    picture: string | any
    name: string
    image: string | any
    ceo: string
    details: string
    extension: string

    constructor(
      picture: string | any,
      name: string,
      image: string | any,
      ceo: string,
      details: string,
      extension: string
    ) {
      this.picture = picture
      this.name = name
      this.image = image
      this.ceo = ceo
      this.details = details
      this.extension = extension
    }
  }

  const team_array: team[] = [
    new Team(
      bello,
      `Bello Tukur`,
      linkdin,
      `CEO`,
      `our vision is to create an advanced speech recognition and intelligence system that will power Africa.`,
      `see more`
    ),
    new Team(
      bello,
      `Bello Tukur`,

      linkdin,
      `CEO`,
      `our vision is to create an advanced speech recognition and intelligence system that will power Africa.`,
      `see more`
    ),
    new Team(
      bello,
      `Bello Tukur`,

      linkdin,
      `CEO`,
      `our vision is to create an advanced speech recognition and intelligence system that will power Africa.`,
      `see more`
    ),
    new Team(
      bello,
      `Bello Tukur`,
      linkdin,
      `CEO`,
      `our vision is to create an advanced speech recognition and intelligence system that will power Africa.`,
      `see more`
    ),
    new Team(
      bello,
      `Bello Tukur`,
      linkdin,
      `CEO`,
      `our vision is to create an advanced speech recognition and intelligence system that will power Africa.`,
      `see more`
    ),
    new Team(
      bello,
      `Bello Tukur`,
      linkdin,
      `CEO`,
      `our vision is to create an advanced speech recognition and intelligence system that will power Africa.`,
      `see more`
    ),
    new Team(
      bello,
      `Bello Tukur`,
      linkdin,
      `CEO`,
      `our vision is to create an advanced speech recognition and intelligence system that will power Africa.`,
      `see more`
    ),
    new Team(
      bello,
      `Bello Tukur`,
      linkdin,
      `CEO`,
      `our vision is to create an advanced speech recognition and intelligence system that will power Africa.`,
      `see more`
    ),
  ]
  return (
    <div className={styles.team}>
      <div className={styles.team_container}>
        <h1> Team </h1>
        <div className={styles.team_container__grid}>
          {team_array.map((team, index) => {
            return (
              <div className={styles.team_container__grid___div} key={index}>
                <Image src={bello} alt="ceo picture" />
                <div className={styles.team_container__grid___div____ceo}>
                  <span> {team.name} </span>
                  <Image src={linkdin} alt="linkdin" />
                </div>
                <p> {team.ceo}</p>
                <span> {team.details} </span>
                <Link href="#" style={{ color: "#FF11F5" }}>
                  {team.extension}{" "}
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Team
