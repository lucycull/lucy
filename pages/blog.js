import Layout from '../comps/layout/index'
import Hero from '../comps/ui/sections/hero/hero'
import BlogList from '../comps/ui/sections/blog/list'
import Post from '../comps/ui/sections/blog/post'
export default function Blog() {
	return (
		<Layout title="Blog" description="Come and read my various thoughts, views and musings">
            <Hero variant="nobtn" head="Welcome to My Blog" sub="I like to write so expect to find a large array of topics…"/>
			<BlogList/>
			<Post url="/blog" img="/photos/00.png" title="Blog Post" excerpt="A small snippet of blog post"/>
		</Layout>
)}