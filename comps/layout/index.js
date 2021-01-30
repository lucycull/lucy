import Head from './head'
import Wrapper from './wrapper'
import Header from './header/index'
import Content from './content'
import Footer from './footer/index'
export default function Layout({title, description, children, home}) {
	if (title.includes('Home')) {
		return (
			<div style={{backgroundAttachment: 'fixed'}}>
			<Head pageTitle={title} description={description}/>
			<Wrapper>
				<Header/>
					<Content content={children}/>
			</Wrapper>
		</div> 			
		)
	} else {
	return (
		<>
			<Head pageTitle={title} description={description}/>
			<Wrapper>
				<Header/>
					<Content content={children}/>
				<Footer variant='center'/>
			</Wrapper>
		</> 
)}}
