import React from 'react'
import CardSection from '../../../components/CardSection'
import {Helmet} from "react-helmet";
const Home = () => {
  return (
    <div>
    <Helmet>
        <title>Home</title>
      </Helmet>
      <CardSection/>
    </div>
  )
}

export default Home