import AllPosts from "../../components/posts/all-posts";

const DUMMY_POSTS = [
    {
        slug: 'getting-started-with-nextjs',
        title: 'Getting Started with NextJS',
        image: 'getting-started-nextjs.png',
        excerpt: 'NextJS is a React framework for production - it makes building fullstack React apps and sites a breeze.',
        date: '2022-02-10'
    },
    {
        slug: 'getting-started-with-react',
        title: 'Getting Started with React',
        image: 'getting-started-react.png',
        excerpt: 'React is a JavaScript library for building user interfaces. Learn what React is all about.',
        date: '2022-02-10'
    },
    {
        slug: 'getting-started-with-angular',
        title: 'Getting Started with Angular',
        image: 'getting-started-angular.png',
        excerpt: 'Angular is a platform that makes it easy to build applications with the web. Angular combines declarative templates, dependency injection, end to end tooling, and integrated best practices to solve development challenges.',
        date: '2022-02-10'
    },
    {
        slug: 'getting-started-with-svelte',
        title: 'Getting Started with Svelte',
        image: 'getting-started-svelte.png',
        excerpt: 'Svelte is a radical new approach to building user interfaces. Whereas traditional frameworks like React and Vue do the bulk of their work in the browser, Svelte shifts that work into a compile step that happens when you build your app.',
        date: '2022-02-10'
    }
];

export default function AllPostsPage() {
    return (
        <AllPosts posts={DUMMY_POSTS} />
    )
}