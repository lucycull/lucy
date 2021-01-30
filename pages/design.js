import Layout from '../comps/layout/index'
import DesignGrid from '../comps/ui/sections/grids/designgrid'
import Hero from '../comps/ui/sections/hero/hero'

export default function Index() {
	return (
		<Layout title="Design" description="Take a look at Lucy Cull's graphic design portfolio, including Logos, Website Designs and more">
            <Hero variant="nobtn" head="My Design Portfolio" sub="You can follow my socials to keep up to date with my latest designs…"/>  
            <DesignGrid/>
		</Layout>
)}