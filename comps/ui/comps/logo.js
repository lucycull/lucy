import Image from 'next/image'
import Link from 'next/link'
import seo from '../../../config/seo.config'
export default function Logo({url}) {
	return (
	<>
	<Link name="logo-link" href={url}>
	<a>
	<picture>
  		<source 
    		srcset="/icons/logo_dark.svg" 
    		media="(prefers-color-scheme: dark)"/>
  		<img src="/icons/logo.svg" alt={seo.title}/>
	</picture>
		</a>
	</Link>
			<style jsx>{`
			img {
				width: 70px;
				cursor: pointer;
			}
		`}</style>
		</>
)}

