import Layout from '../comps/layout/index'
import Hero from '../comps/ui/sections/hero/hero'
import ContactForm from '../comps/forms/contact'
export default function Index() {
	return (
		<Layout title="Contact" description="Get in touch, whether it be about working together or just to ask a question.">
            <Hero variant="nobtn" head="Get in Touch" sub="If you like what you see or want to know more, send me a message!"/>
			<ContactForm/>
		</Layout>
)}