import Layout from '../components/layout'
import Link from 'next/link'

export default function Home() {

  return (
    <>
      <Layout 
        title={'Inicio'}
        description={'Blog de crecimiento, venta de chemas y más'}
      >  
     
     <h1>Hola desde el index</h1>
     <Link href="/nosotros">Nosotros</Link>
      </Layout>
    </>
  )
}

