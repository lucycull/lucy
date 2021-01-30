import Link from 'next/link'
import css from './contactcard.module.css'
import Social from './social'
export default function ContactCard() {
    return (
        <div id={css.card}>
            <h1>Get in Touch...</h1>
            <h2>
                You can drop me an email{" "}
                <Link href="/contact">
                    <a style={{textDecoration: 'underline'}}>here</a>
                </Link>
            </h2>
            <p> Alternatively you can contact me via my socials… </p>
            <Social/>
        </div>
    )
}
