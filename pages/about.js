import Link from "next/link";
import fakePosts from "../post";
import Header from "./post/header";


export default function About({ post }) {
  return (
    <>
      <header>
       
        <Header/>
        <h1>about</h1>
      </header>
      <main>
        <h2>All Posts</h2>
        <ol>
          {fakePosts.map((post) => (
            <li key={post.Id}>
              <Link href={`/post/${post.Slug}`}>
                <a>{post.Title}</a>
              </Link>
            </li>
          ))}
        </ol>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const post = fakePosts;

  return {
    props: { post }
  }
}