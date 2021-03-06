import seo from '../config/seo.config'
import Layout from '../comps/layout/index'
import Hero from '../comps/ui/sections/hero/hero'
import ContactCard from '../comps/ui/comps/contactcard'
export default function Index() {
	return (
		<Layout title="Home" description={seo.description}>
			<Hero variant="standard" head="Hi, nice to meet you" sub="My name is Lucy and I'm a freelance designer and photographer" buttonText="Find Out More" buttonUrl="/blog" buttonVariant='primary'/>
			<ContactCard/>
		</Layout>
)}