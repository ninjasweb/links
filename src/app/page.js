"use client"
import styles from './page.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { Links, Controls } from '@/config/data'
import { useState } from 'react'

export default function Home() {
  const [isHovered, setIsHovered] = useState(-1)
  return (
    <>
      <main className={styles.main}>
        <div className={styles.content}>
          <div className={styles.link_container}>
            {Links.map((link, index)=>{
              return (
                <Link target='_blank' href={link.url} key={index}>
                  <div
                    title={link.title}
                    onMouseEnter={() => setIsHovered(index)}
                    onMouseLeave={() => setIsHovered(-1)} 
                    className={styles.link}>
                    <Image 
                      style={{ filter: `brightness(0) invert(${index === isHovered ? 0 : 1})` }} 
                      className={styles.icon} src={link.icon} 
                      alt={link.title} 
                      width={40} height={40} />
                    <p className={styles.title}>{link.title}</p>
                  </div>
                </Link>
              )
            })}
            <div className={styles.navigation}>
              {Controls.map((item, index)=>{
                return(
                  <Link href={item.url} key={index}>
                    <div title={item.title} className={styles.item}>
                      <Image src={item.icon} width={30} height={30} alt={item.title}/>
                    </div>
                  </Link>
                  
                )
              })}
            </div>
          </div>
          <p className={styles.promo}>¿Quieres crear tu propia página como esta?</p>
        </div>
      </main>
    </>
  )
}
