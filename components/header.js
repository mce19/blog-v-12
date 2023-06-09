import Image from 'next/future/image'
import Link from 'next/link'
import styles from '../styles/header.module.css'

export default function Header() {

    return (
        <header className={styles.header}>
            <div className={`contenedor ${styles.barra}`}>
                <Link href={'/'}>
                    
                        <Image src="/logo-svg.svg" width={100} height={40} alt='imagen logotipo' />

                  
                </Link>

                <nav className={styles.navegacion}>
                    <Link href="/">
                     
                            Inicio
                     
                    </Link>

                    <Link href="/nosotros">
                        
                            Nosotros
                     
                    </Link>
                </nav>
            </div>
        </header>
    )
}
