import React from 'react'
import assets from '../assets/assets'
import Title from './Title'
import ServiceCard from './ServiceCard'
import { motion } from "motion/react"

const Services = () => {

  const servicesData = [
    {
      title: 'Advertising',
      description: ' We create compelling ad campaigns that drive results and maximize ROI.',
      icon:  assets.ads_icon,
    },
  
     {
      title: 'Social Media',
      description: 'We manage and grow your social media presence to engage with your audience and build brand loyalty.',
      icon:  assets.social_icon,
    },
     {
      title: 'Content Writing',
      description: 'We craft high-quality, engaging content that resonates with your target audience and drives conversions.',
      icon:  assets.content_icon,
    },
        {
      title: 'Content marketing',
      description: 'We develop and distribute value which is relevant to attract.',
      icon:  assets.marketing_icon,
    },
  ]
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      transition={{ staggerChildren: 0.2 }}
     
      id='services' className='relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>
      <img src={assets.bgImage2} alt="" className='absolute -top-110 -left-70 -z-1 dark:hidden' />
      
      <Title title='What We Do?' description='We offer a wide range of services to help businesses achieve their marketing goals and drive growth.' />
      
      <div className='flex flex-col md:grid grid-cols-2'>
        {servicesData.map((service,index) => (
          <ServiceCard key={index} service={service} index={index} />             //*mounting service card 
        ))}
      
      </div>
    </motion.div>
  )
}

export default Services