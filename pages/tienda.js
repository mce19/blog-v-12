import Link from "next/link"
import Chemas from "../components/listado-chemas"
import Layout from "../components/layout"
import styles from  "../styles/chemas.module.css"


export default function Tienda({chemas}) {
  console.log(chemas);
  
  return (
    <Layout
      title={'Tienda virtual'}
      description="Tienda virtual, venta de camisetas, sueters, chemas"
    >

<main className="contenedor">
            <h1 className="heading">Nuestra Colección</h1>
                  <Chemas
             
                  />
        </main>
    </Layout>
  )
}


export async function getServerSideProps() {
    const respuesta =  await fetch(`${process.env.API_URL}/posts?populate=imagen`);
    const {data: chemas} = await respuesta.json() 
    return {
      props: {
        chemas
      }
    }
}