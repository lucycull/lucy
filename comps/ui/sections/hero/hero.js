import {Standard, NoButton} from './variants'
export default function Hero({variant, head, sub, buttonText, buttonUrl, buttonVariant}) {
    if (variant.includes('nobtn')) {
        return (
            <NoButton head={head} sub={sub}/>
        )
    } else {
        return (
        <Standard head={head} sub={sub} buttonText={buttonText} buttonUrl={buttonUrl} buttonVariant={buttonVariant}/>
)}}