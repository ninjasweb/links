import styles from './page.module.css'
import Image from 'next/image'
import Logo from '../assets/logo_white.png'
import Isologo from '@/assets/ninjasweb_white.svg'
import Link from 'next/link'
import { Links } from '@/config/data'

export default function Home() {
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
                  <div className={styles.link}>
                    <Image src={link.icon} alt={link.title} width={50} height={50} />
                    <p className={styles.title}>{link.title}</p>
                  </div>
                </Link>
              )
            })}
          </div>
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
