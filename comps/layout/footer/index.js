import {CopyLeft, CopyCenter, CopyRight} from './variants'
export default function Footer({variant, social}) {
	if (variant.includes('left')) { 
	  return (
		<CopyLeft social={social}/>
)} else if (variant.includes('center')) {
	return (
		<CopyCenter social={social}/>
)} else {
	return (
		<CopyRight social={social}/>
	)
}} 
