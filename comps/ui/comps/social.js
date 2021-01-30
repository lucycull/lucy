import Link from 'next/link'
import seo from '../../../config/seo.config'
export default function Social() {
	return (
	<ul className="flex justify-center">
		{seo.social.map((icon) => (
			<li style={{margin: '0 15px'}}key={icon.name}>
				<Link href={icon.url}>
					<a><img src={`/social/${icon.name}.svg`} alt={icon.name}/></a>
				</Link>
			</li>
		))}
		<style jsx>{`img:hover{fill:var(--primary);}`}</style>
	</ul>
)}