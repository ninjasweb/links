import styles from './header.module.css'
import Image from "next/image"
import Logo from '@/assets/logo_white.png'
import Isologo from '@/assets/ninjasweb_white.svg'
import Link from 'next/link'

const Header = () => {
  return ( 
    <div className={styles.header}>
      <Link href="/">
        <Image priority src={Logo.src} width={90} height={90} alt="Ninjasweb"/>
      </Link>
      <Image priority src={Isologo} width={200} height={100} alt='Ninjasweb'/>
      <p>Convierte tus visitantes en clientes con nuestras soluciones de software.</p>
    </div>
   )
}
 
export default Header