import styles from './header.module.css'
import Image from "next/image"
import Logo from '@/assets/logo_white.png'
import Isologo from '@/assets/ninjasweb_white.svg'

const Header = () => {
  return ( 
    <div className={styles.header}>
      <Image priority src={Logo.src} width={90} height={90} alt="Ninjasweb"/>
      <Image priority src={Isologo} width={200} height={100} alt='Ninjasweb'/>
    </div>
   )
}
 
export default Header