import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import requests from '../Requests'

const Home = () => {
  return (
    <>

      <Main />
      <Row rowId='1' title='Popular' fetchUrl={requests.requestPopular}/>
      <Row rowId='2' title='Trending' fetchUrl={requests.requestTrending}/>
      <Row rowId='3' title='Top Rated' fetchUrl={requests.requestTopRated}/>
      <Row rowId='4' title='Horror' fetchUrl={requests.requestHorror}/>
      <Row rowId='5' title='Up Coming' fetchUrl={requests.requestUpcoming}/>
      
    </>
  )
}

export default Home