import Copy from './copy'
import Social from '../../ui/comps/social'
import css from './footer.module.css'
function CopyLeft({social}) {
	if (social) {
		return (
			<footer id={css.left} className={css.footer}>
				<Copy />
				<Social />
			</footer>
	)} else {
		return (
			<footer id={css.footer} className={css.footer}>
				<Copy />
			</footer>
)}}

function CopyCenter({social}) {
	if (social) {
		return (
			<footer id="center" className={css.footer}>
				<div style={{flexGrow: .155}}></div>
				<Copy />
				<Social />
			</footer>
	)} else {
		return (
			<footer id={css.center} className={css.footer} style={{justifyContent: 'center'}}>
				<Copy />
			</footer>
)}}

function CopyRight({social}) {
	if (social) {
		return (
			<footer id={css.right} className={css.footer}>
				<Copy />
				<Social />
			</footer>
	)} else {
		return (
			<footer id={css.right} className={css.footer}>
				<Copy />
			</footer>
)}}

export { CopyLeft, CopyCenter, CopyRight }