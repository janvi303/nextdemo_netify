import Link from "next/link";
import fakePosts from "../../post";
import Header from "./header";


export default function Post({ post }) {
  return (
    <>
        <Header/>
      <main>
        <article>
          <h1>{post.Title}</h1>
          <p>{post.Text}</p>
        </article>
      </main>
    </>
  );
}

export async function getStaticPaths() {
  const posts = fakePosts;
  const paths = posts.map((post) => ({
    params: { slug: post.Slug }
  }));

  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const post = fakePosts.find((p) => p.Slug === slug);

  return {
    props: { post }
  };
}