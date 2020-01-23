import React from 'react'
import '../stylesheets/Home.css'

import AddJobForm from '../components/AddJobForm'
import JobsContainer from './JobsContainer'

 const Home = (props) => {
    return(
        <div className="home-container">
            <h1>Track Dem Jobs</h1>
            <AddJobForm/>
            <JobsContainer jobs={props.jobs} />
        </div>
    )
}

export default Home