import React from 'react'
import { Card, Typography, CardContent, Button} from '@mui/material'
import SkillChips from './SkillChips'

function JobCard({ job }) {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6">{job.title}</Typography>
        <SkillChips skills={job.skills}/>
        <Typography variant="body2">{job.description}</Typography>
        <Button variant="contained" sx={{ marginTop: '1rem'}}>Learn more</Button>
      </CardContent>
    </Card>
  )
}

export default JobCard