import AllPosts from "../../components/posts/all-posts";
import { getAllPosts } from "../../lib/posts-util";



export default function AllPostsPage(props) {
    return (
        <AllPosts posts={props.allPosts} />
    )
}

export async function getStaticProps() {
    const allPosts = getAllPosts();
    return {
        props: {
            posts: allPosts
        }
    }
}