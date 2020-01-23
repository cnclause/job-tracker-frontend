import React from 'react'
import '../stylesheets/JobCard.css'


const JobCard = (props) => {
    console.log(props.job)
    return(
        <div className="job-card">
            <h1 className="job-title">Job Title: {props.job_title}</h1>
            <h2 className="company-title">Company: {props.company}</h2>
            <p className="company-about">About the Company: {props.about_company}</p>
            <p className="job-description">Job Description: {props.job_description}</p>
            <p className="company-extras">Extras: {props.extras}</p>
        </div>
    )
}

export default JobCard