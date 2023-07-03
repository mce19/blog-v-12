import Layout from "../components/layout";
import Chema from "../components/chema";
import Post from "../components/post";
import Curso from "../components/curso";
import styles from "../styles/grid.module.css";

export default function Home({ chemas, posts, curso }) {
  return (
    <>
      <Layout
        title={"Inicio"}
        description={"Blog de crecimiento, venta de chemas y más"}
      >
        <main className="contenedor">
          <h1 className="heading">Blog</h1>
          <div className={styles.grid}>
            {posts?.map((post) => (
              <Post key={post.id} post={post.attributes} />
            ))}
          </div>
        </main>

        <Curso curso={curso.attributes} />

        <section className="contenedor">
          <h2 className="heading">Chemas</h2>

          <div className={styles.grid}>
            {chemas?.map((chema) => (
              <Chema key={chema.id} chema={chema.attributes} />
            ))}
          </div>
        </section>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const urlChemas = `${process.env.API_URL}/chemas?populate=imagen`;
  const urlPosts = `${process.env.API_URL}/posts?populate=imagen`;
  const urlCurso = `${process.env.API_URL}/curso?populate=imagen`;

  const [resChemas, resPosts, resCurso] = await Promise.all([
    fetch(urlChemas),
    fetch(urlPosts),
    fetch(urlCurso),
  ]);
  const [{ data: chemas }, { data: posts }, { data: curso }] =
    await Promise.all([resChemas.json(), resPosts.json(), resCurso.json()]);

  return {
    props: {
      chemas,
      posts,
      curso,
    },
  };
}
