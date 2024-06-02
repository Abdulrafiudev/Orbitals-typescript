"use client"
import React from "react"
import styles from "./header.module.css"
import Image from "next/image"
import logo from "../../../public/Logo-on-black 1.png"
import dropdown from "../../../public/dropdown.png"
import profile from "../../../public/profile-icon.png"
import Link from "next/link"
import { usePathname } from "next/navigation"

function Header() {
  //to get the current path
  const pathname: string = usePathname()

  // creating an interface
  interface menu {
    title: string
    dropdown: boolean
    path: string
  }
  // creating a class to ease multiple object creation
  class Menu implements menu {
    title: string
    dropdown: boolean
    path: string

    constructor(title: string, dropdown: boolean, path: string) {
      this.title = title
      this.dropdown = dropdown
      this.path = path
    }
  }
  //array creation

  const menu_list: menu[] = [
    new Menu(`ABOUT US`, false, "/"),
    new Menu(`MODELS`, true, "#"),
    new Menu(`PLAYGROUND`, false, "#"),
    new Menu(`CONTACT US`, false, "#"),
    new Menu(`DEVELOPERS`, true, "#"),
  ]
  return (
    <>
      <div className={styles.nav}>
        <div className={styles.nav_container}>
          <div className={styles.nav_container__left}>
            <Image src={logo} alt="logo image" />
          </div>
          <div className={styles.nav_container__middle}>
            {menu_list.map((list, index) => {
              return (
                <div
                  className={styles.nav_container__middle___list}
                  key={index}
                >
                  <Link
                    href="#"
                    className={
                      pathname === list.path ? styles.active : styles.paragraph
                    }
                  >
                    {list.title}
                  </Link>
                  {list.dropdown && <Image src={dropdown} alt="dropdown" />}
                </div>
              )
            })}
          </div>
          <div className={styles.nav_container__right}>
            <Image src={profile} alt="profile" />
            <span> Dahir Bello </span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
