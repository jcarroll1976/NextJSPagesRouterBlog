import Link from "next/link";
import Image from 'next/image';

import classes from './post-item.module.css';


export default function PostItem(props) {
    const { title, image, excerpt, date, slug } = props.post;

    const formmatedDate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });

    const imagePath = `/images/posts/${slug}/${image}`;
    const linkPath = `/posts/${slug}`;

    return (
        <li className={classes.post}>
            <Link href={linkPath}>
                <div className={classes.image}>
                    <Image src={imagePath} alt={title} width={300} height={200} style={{width:'100%',height:'auto'}}/>
                </div>
                <div className={classes.content}>
                    <h3>TITLE</h3>
                    <time>{formmatedDate}</time>
                    <p>{excerpt}</p>
                </div>
            </Link>
        </li>
    )
}