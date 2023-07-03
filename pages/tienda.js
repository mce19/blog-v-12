import Chema from "../components/chema"
import Layout from "../components/layout"
import styles from  "../styles/grid.module.css"


export default function Tienda({chemas}) {
  
  return (
    <Layout
      title={'Tienda virtual'}
      description="Tienda virtual, venta de camisetas, sueters, chemas"
    >

          <main className="contenedor">
            <h1 className="heading">Mi Colección</h1>

           <div className={styles.grid}>
               {chemas?.map(chema => (
                <Chema 
                key={chema.id}
                chema = {chema.attributes}
                />
               ))}
           </div>
        </main>
    </Layout>
  )
}


export async function getServerSideProps() {
    const respuesta =  await fetch(`${process.env.API_URL}/chemas?populate=imagen`);
    const {data: chemas} = await respuesta.json() 
    return {
      props: {
        chemas
      }
    }
}