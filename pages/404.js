import Link from "next/link"
import Layout from "../components/layout"

export default function Pagina404() {
  return (
    <Layout
        title="Página No Encontrada"
    >
        <p className="error">Página No Encontrada</p>
        <Link href='/tienda'>
            <a className="error-enlace">
                Volver a tienda
            </a>
        </Link>
    </Layout>
  )
}
