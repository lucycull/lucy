import Link from "next/link";
import css from './blog.module.css'
export default function Post({img, title, excerpt}) {
    return (
        <div className={css.post}>
            <img src={img} alt={title}/>
            <h3>{title}</h3>
            <p>{excerpt}</p>
        </div>
)}
