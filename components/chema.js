import Image from "next/image";
import Link from "next/link";
import styles from "../styles/chemas.module.css";

export default function Chema({ chema }) {
  const { descripcion, imagen, nombre, precio, url } = chema;

  return (
    <div>
      <div className={styles.chemas}>
        <Image
          src={imagen.data.attributes.formats.medium.url}
          width={600}
          height={400}
          alt={`Imagen chema ${nombre}`}
          className={styles.img}
        />
        <div className={styles.contenido}>
        <h3>{nombre}</h3>
        <p className={styles.descripcion}>{descripcion}</p>
        <p className={styles.precio}>{precio}</p> 
        <Link href={`/chemas/${url}`}>
          <a className={styles.enlace}>
            Ver Producto</a>
        </Link>
        </div>
      </div>
    </div>
  );
}
