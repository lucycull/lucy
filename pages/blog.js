import Layout from '../comps/layout/index'
import Hero from '../comps/ui/sections/hero/hero'
export default function Index() {
	return (
		<Layout title="Blog" description="Come and read my various thoughts, views and musings">
            <Hero variant="nobtn" head="Welcome to My Blog" sub="I like to write so expect to find a large array of topics…"/>
		</Layout>
)}