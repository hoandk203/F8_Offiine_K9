import React from 'react'
import { useSelector } from 'react-redux'
import { getJobs} from '../../store'

export default function () {
  const jobs = useSelector(getJobs)
  return (
    <div>
        <h3>ListJob</h3>
        <ul>
            {jobs.map((job, index)=>{
                return <li key={index}>{job.name} | {job.priority}</li>
            })}
        </ul>
    </div>
  )
}
