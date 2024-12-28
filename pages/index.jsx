import FeaturedPosts from "../components/home-page/featured-posts";
import Hero from "../components/home-page/hero";
import getFeaturedPosts from "../lib/posts-util";



export default function HomePage(props) {
    return (
        <>
        <Hero />
        <FeaturedPosts posts={DUMMY_POSTS} />
        </>
    )
}

export async function getStaticProps() {
    const featuredPosts = getFeaturedPosts();
    return {
        props: {
            posts: featuredPosts
        }
    }
}
