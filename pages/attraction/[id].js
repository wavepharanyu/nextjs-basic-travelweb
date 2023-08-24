import React from 'react'
import Attraction from '@/components/Attraction'
import Head from 'next/head'

const AttractionPage = ({data}) => {
  return (
    <>
     <Head>
      <meta property="og:title" content={data.attraction.name} />
      <meta property="og:description" content={data.attraction.detail} />
      <meta property="og:image" content={data.attraction.coverimage} />
    </Head>
        <div><Attraction attraction={data.attraction}/></div>
    </>
    
  )
}

export async function getStaticPaths() {

    const res = await fetch('https://www.melivecode.com/api/attractions')
    const data = await res.json()
   

    const paths = data.map((attraction) => ({
      params: { id: String(attraction.id) },
    }))
   
    return { paths, fallback: false }
}

export async function getStaticProps({params}) {
    const res = await fetch(`https://www.melivecode.com/api/attractions/${params.id}`)
    const data = await res.json()
  
    return {
      props: {
        data,
      },
    }
  }

export default AttractionPage