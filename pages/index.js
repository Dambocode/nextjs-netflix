// Import nextjs components
import Head from "next/head";

// Import custom components
import Card from "../components/card";
import Container from "../components/container";
import Col from "../components/col";
import Layout from "../components/layout";
import Row from "../components/row";

// Import API Function
import { getAllMovies } from "../lib/api";

export async function getStaticProps() {
  const movies = await getAllMovies();
  return {
    props: {
      movies,
    },
  };
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

export default function Home({ movies }) {
  return (
    <Layout>
      <Head>
        <title>IST 363 Netflix</title>
      </Head>

      <main>
        <Container>
          <Row>
            {movies.nodes.map((movie, index) => {
              // console.log(movie.featuredImage.node.sourceUrl)
              const { title, slug, featuredImage } = movie;
              return (
                <>
                  <Col key={index} xs="6" s="6" md="4" lg="3">
                    <Card
                      title={title}
                      image={featuredImage}
                      slug={slug}
                      key={index}
                    />
                  </Col>
                  {/* <h1>{movie.title}</h1> */}
                </>
              );
            })}
          </Row>
        </Container>
      </main>
    </Layout>
  );
}
