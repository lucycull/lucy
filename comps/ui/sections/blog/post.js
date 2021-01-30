import Link from "next/link";
import css from './post.module.css'
export default function Post({img, title, excerpt, url}) {
    return (
    <Link href={url}>
        <div className={css.post}>
            <img src={img} alt={title}/>
            <h3>{title}</h3>
            <p>{excerpt}</p>
        </div>
    </Link>
)}
