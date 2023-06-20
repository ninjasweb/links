import styles from './footer.module.css'

const Footer = () => {
  const year = new Date().getFullYear()
  return ( 
    <div className={styles.footer}>
      <div>
        <p>Ninjasweb ウェブ {year} © Todos los derechos reservados</p>
      </div>
    </div>
   )
}
 
export default Footer
