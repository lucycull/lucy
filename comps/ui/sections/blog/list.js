import Link from 'next/link'
import Post from './post'
import css from './blog.module.css'
export default function BlogList({posts}) {
    console.log(posts)
    return (
        <div id={css.postList}>
            {posts.map(post => {
                return (
                    <Link as={`/posts/${post.slug}`} href="/posts/[slug]">
                            <a key={post.id}><Post img={post.coverImage} title={post.title} excerpt={post.excerpt}/></a>
                    </Link>
                )})}
        </div>
)}