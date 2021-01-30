import Banner from './banner'
import Logo from '../../ui/comps/logo'
import Menu from './menu'
import Social from '../../ui/comps/social'
import css from './header.module.css'
function LogoLeft({social}) {
	if (social) {
		return (
		<header className={css.header}>
			<Banner/>
			<Logo url="/"/>
			<Menu/>
			<div style={{marginLeft: 40}}><Social/></div>
		</header>
	)} else {
		return (
		<header className={css.header}>
			<Banner/>
			<Logo url="/"/>
			<Menu/>
        </header>
	)}
}
export {LogoLeft}

