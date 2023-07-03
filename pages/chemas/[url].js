import Image from "next/image";
import styles from "../../styles/chema.module.css";
import Layout from "../../components/layout";

export default function Producto({chema}) {

  const { nombre, descripcion, imagen, precio } = chema[0].attributes

  return (

    <Layout 
    title={`Chema ${nombre}`}
    >
        <div className={styles.chemas}>
          <Image
            src={imagen.data.attributes.url} width={600} height={400}
            alt={`Imagen chema ${nombre}`}
          />
          <div className={styles.contenido}>
            <h3>{nombre}</h3>
            <p className={styles.descripcion}>{descripcion}</p>
            <p className={styles.precio}>₡ {precio}</p>

            <form className={styles.formulario}>
              <label htmlFor="cantidad">Cantidad:</label>

              <select id="cantidad">
                <option value="0">--Seleccione--</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>

              <input 
              type="submit"
              value="Agregar al carrito"
              />
            </form>
          </div>
        </div>
    </Layout>
  )
}

export async function getStaticPaths() {
  const respuesta = await fetch(`${process.env.API_URL}/chemas`)
  const { data } = await respuesta.json();

  const paths = data.map(chema => ({
    params: {
      url: chema.attributes.url
    }
  }))
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({params: { url }}) {
  const respuesta = await fetch(`${process.env.API_URL}/chemas?
filters[url]=${url}&populate=imagen`)
  const { data: chema } = await respuesta.json()
  return {
    props: {
      chema
    }
  }
}
