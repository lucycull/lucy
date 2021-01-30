import Link from 'next/link'
export default function Button({variant, text, url, bg, hov}) {
    if (variant.includes('ghost')) {
       return (
       <>
        <button href={url}>{text}</button>
        <style jsx>{`
            button {background: transparent;}
            button:hover {
                background: var(--primary);
            }
        `}</style>
        </>
)} else if (variant.includes('primary')) {
    return (
        <>
        <button href={url}>{text}</button>
        <style jsx>{`
            button {background: var(--primary); border: 0;}
            button:hover {
                background: var(--grey);
            }
        `}</style>
        </>
)} else if (variant.includes('success')) {
        return (
            <>
            <button href={url}>{text}</button>
            <style jsx>{`
                button {background: var(--success); border: 0;}
                button:hover {
                    background: var(--grey);
                }
            `}</style>
            </>
)} else if (variant.includes('warning')) {
    return (
        <>
        <button href={url}>{text}</button>
        <style jsx>{`
            button {background: var(--warn); border: 0;}
            button:hover {
                background: var(--grey);
            }
        `}</style>
        </>
)} else if (variant.includes('error')) {
    return (
        <>
        <button href={url}>{text}</button>
        <style jsx>{`
            button {background: var(--error); border: 0;}
            button:hover {
                background: var(--grey);
            }
        `}</style>
        </>
)} else {
    return (
        <>
        <button href={url}>{text}</button>
        <style jsx>{`
            button {background: var(--grey); border: 0;}
            button:hover {
                background: var(--primary);
            }
        `}</style>
        </>
)}}