"use client"
import styles from './page.module.css'
import Image from 'next/image'
import Logo from '../assets/logo_white.png'
import Isologo from '@/assets/ninjasweb_white.svg'
import Link from 'next/link'
import { Links } from '@/config/data'
import { useState } from 'react'

export default function Home() {
  const [isHovered, setIsHovered] = useState(-1)
  return (
    <>
      <main className={styles.main}>
        <div className={styles.header}>
          <Image priority src={Logo.src} width={90} height={90} alt="Ninjasweb"/>
          <Image src={Isologo} width={200} height={100} alt='Ninjasweb'/>
        </div>
        <div className={styles.content}>
          <div className={styles.link_container}>
            {Links.map((link, index)=>{
              return (
                <Link href={link.url} key={index}>
                  <div 
                    onMouseEnter={() => setIsHovered(index)}
                    onMouseLeave={() => setIsHovered(-1)} 
                    className={styles.link}>
                    <Image style={{ filter: `brightness(0) invert(${index === isHovered ? 0 : 1})` }} className={styles.icon} src={link.icon} alt={link.title} width={40} height={40} />
                    <p className={styles.title}>{link.title}</p>
                  </div>
                </Link>
              )
            })}
          </div>
          <p className={styles.promo}>¿Quieres crear tu propia página?</p>
        </div>
        <div className={styles.footer}>
          <div>
            <p>Todos los derechos reservados</p>
          </div>
        </div>
      </main>
    </>
  )
}
