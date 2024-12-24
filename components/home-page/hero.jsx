import Image from 'next/image';
import classes from './hero.module.css';

export default function Hero() {
    return (
        <section className={classes.hero}>
            <div className={classes.image}>
                <Image src="/images/site/josh.jpg" alt='An image showing Josh' width={300} height={300}/>
            </div>
            <h1>Hi, I'm Josh</h1>
            <p>I blog about web development- especially about frontend frameworks like React.</p>
        </section>
    )
}