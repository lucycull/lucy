import Link from 'next/link'
import Post from './post'
import css from './blog.module.css'
export default function BlogList({posts}) {
    posts.map(post => {
        console.log(post.id)
    })
    return (
        <div id={css.postList}>
            {posts.map((post, index) => {
                return (
                    <div key="testing 123">
                    <Link as={`/posts/${post.slug}`} href="/posts/[slug]">
                            <a><Post img={post.coverImage} title={post.title} excerpt={post.excerpt}/></a>
                    </Link>
                    </div>
                )})}
        </div>
)}