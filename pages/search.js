import Link from "next/link";
import { useState } from "react";

export default function Blog(props) {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = props.posts.filter((post) =>
    post.title.rendered.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <input
        type="text"
        placeholder="Search blog posts"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <h2></h2>
      {filteredPosts.map((post, index) => {
        let featuredImageUrl =
          post?._embedded?.["wp:featuredmedia"]?.[0]?.media_details?.sizes
            ?.medium?.source_url;
        if (!featuredImageUrl) {
          // use first image from post if no featured image available
          const matches = post.content.rendered.match(/<img.*?src="(.*?)"/);
          if (matches) {
            featuredImageUrl = matches[1];
          }
        }
        return (
          <Link href={`/blog/${post.slug}`}>
            <div key={index} className="postItem">
              <h3>{post.title.rendered}</h3>
              {featuredImageUrl && (
                <img
                  className="mainImg"
                  src={featuredImageUrl}
                  alt={post.title.rendered}
                />
              )}
              <div
                dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
              ></div>
              <hr />
            </div>
          </Link>
        );
      })}
    </>
  );
}

export async function getStaticProps() {
  const response = await fetch(
    "https://valaakam.com/wp-json/wp/v2/posts?_embed=true"
  );
  const data = await response.json();

  return {
    props: {
      posts: data,
    },
    revalidate: 10, // update content every 10 seconds
  };
}
