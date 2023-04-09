import React from 'react'
import { Chip } from '@mui/material'

function SkillChips({ skills }) {
  return (
    <>
    {skills.slice(0,4).map((skill, index) => (
    <Chip key={index} label={skill} sx={{ margin: '0.2rem'}}/>
    ))}
    </>
  )
}

export default SkillChips;