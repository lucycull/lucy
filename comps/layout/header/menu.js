import {useState} from 'react'
import Link from 'next/link'
import util from '../../../config/util.config'
import css from './menu.module.css'
export default function Menu() {
	const [menu, setMenu] = useState(false);
	function menuToggle() {
		setMenu(!menu)
	}
	return (
	<>
		<a id={css.menubtn} onClick={menuToggle}>
	        <svg width="40" height="40">
   		       <rect width="40" height="3" x="0" y="12" style={{fill: '#1c1c1c'}}/>
       		   <rect width="40" height="3" x="0" y="24" style={{fill: '#1c1c1c'}} />
	        </svg>
		</a>
		<nav id={css.nav}>
			<ul>
				{util.navigation.map((link) => (
					<li key={link.name}>
						<Link href={`/${link.name.toLowerCase()}`}>
							<a>{link.name}</a>
						</Link>
					</li>
				))}
			</ul>
		</nav>
	</>
)}

