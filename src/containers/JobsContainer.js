import React from 'react'
import '../stylesheets/JobContainer.css'

import JobCard from '../components/JobCard'



const JobsContainer = (props) => {

    const jobCards = props.jobs.map(job => {
        return (
            <JobCard
                key={job.id}
                {...job}
            />
        )
    })

    return (
        <div className="job-container">
            {jobCards}
        </div>
    )
}

export default JobsContainer