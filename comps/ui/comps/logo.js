import Image from 'next/image'
import Link from 'next/link'
import seo from '../../../config/seo.config'
export default function Logo({url}) {
	return (
	<>
	<Link href={url}>
		<img
			src="/icons/logo.svg"
			alt={seo.title}
		/>
	</Link>
			<style jsx>{`
			img {
				width: 70px;
			}
		`}</style>
		</>
)}

