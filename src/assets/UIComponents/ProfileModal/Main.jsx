import React from 'react'
import RenderCards from './RenderCards'

const data=[
    {
      id: 1,
      title: "BMI Calculator",
      description: "Calculate your body mass index accurately.",
      solution: "BMI = Weight(kg) / Height(m)^2",
    },
    {
      id: 2,
      title: "Body Fat Calculator",
      description: "Estimate your body fat percentage.",
      solution: "Uses US Navy formula for body fat estimation.",
    },
    {
      id: 3,
      title: "Pregnancy Calculator",
      description: "Track pregnancy week & fetal growth.",
      solution: "Uses gestational age from LMP.",
    },
  ]

const Main = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
      <RenderCards data={data}/>
        
    </div>
  )
}

export default Main
