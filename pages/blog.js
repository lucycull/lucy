import Link from 'next/link'
import Layout from '../comps/layout/index'
import Hero from '../comps/ui/sections/hero/hero'
import {getAllPosts} from '../lib/fetchposts'
import BlogList from '../comps/ui/sections/blog/list'
export default function Blog({allPosts}) {
  return (
    <Layout title="Blog" description="A collection of stories, opinions and tutorials by Mac Hooper">
	    <Hero variant="nobtn" head="Welcome to My Blog" sub="I like to write so expect to find a large array of topics…"/>
	    <BlogList posts={allPosts}/>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'id',
    'title',
    'date',
    'slug',
    'coverImage',
    'excerpt',
  ])
  return {
    props: {allPosts}
  }
}