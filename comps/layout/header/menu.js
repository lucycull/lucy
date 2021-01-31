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
			<span id="close" onClick={menuToggle}>&times;</span>
				{util.navigation.map((link) => (
					<li key={link.name}>
						<Link href={`/${link.name.toLowerCase()}`}>
							<a>{link.name}</a>
						</Link>
					</li>
				))}
			</ul>
			<style jsx>{`
			nav {
				display: grid;
				place-items: center;
				flex-direction: column;
				position: absolute; 
				top: 0;
				right: 0;
				width: ${menu ? '100vw' : '-100vw'};
				height: 100vh;
				transition: .4s ease;
			}
			nav ul {
				flex-direction: column;
				width: 100vw;
				height: 100vh;
				justify-content: center;
				align-items: center;
				background: var(--white);
				font-size: 2rem;
				display: ${menu ? 'flex' : 'none'};
				transition: .4s ease;
			}
			nav ul li {
				margin: 1rem 0;
			}
			#close {
				font-size: 3rem;
				position: absolute;
				top: 15px;
				right: 30px;
				color: var(--primary);
				cursor: pointer;
			}
			@media(min-width: 760px) {
				nav, nav ul {
					width: auto;
					height: auto;
					background: transparent;
					flex-direction: row;
					justify-content: space-evenly;
					align-items: center;
					position: relative;
				}
				#close {
					display: none;
				}
			}
			`}</style>
		</nav>
	</>
)}

