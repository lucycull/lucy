import Layout from '../comps/layout/index'
import Hero from '../comps/ui/sections/hero/hero'
import PhotoGrid from '../comps/ui/sections/grids/photogrid'
export default function Photos() {
	return (
		<Layout title="Photos" description="Take a look at the various photographs I have taken of gigs, landscapes and portraits">
            <Hero variant="nobtn" head="My Photography Portfolio" sub="Photography is all about capturing moments and memories for me."/>
		<PhotoGrid/>
		</Layout>
)}