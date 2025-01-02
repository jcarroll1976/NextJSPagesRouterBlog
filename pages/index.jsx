import Head from "next/head";

import FeaturedPosts from "../components/home-page/featured-posts";
import Hero from "../components/home-page/hero";
import { getFeaturedPosts } from "../lib/posts-util";



export default function HomePage(props) {
    return (
        <>
        <Head>
            <title>Josh's Blog</title>
            <meta name="description" content="I post about web development and my journey into tech." />
        </Head>
        <Hero />
        <FeaturedPosts posts={props.posts} />
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
