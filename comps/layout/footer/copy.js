import Link from 'next/link'
import seo from '../../../config/seo.config'
export default function Copy() {
	const yr = new Date().getFullYear();
	return (
	<Link href="/">
		<a style={{color: 'inherit'}}>&copy;{seo.title} {yr}</a>
	</Link>
)}