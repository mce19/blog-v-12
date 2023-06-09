import Link from "next/link"
import Layout from "../components/layout"


export default function Nosotros() {
  return (
    <Layout
      title={'Sobre mí'}
      description="Sobre mi, Andres Vargas, Blog de crecimiento"
    >
       <Link href="/">Ir a inicio</Link>
    </Layout>
  )
}
