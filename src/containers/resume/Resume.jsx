import React from 'react'
import { PageHeader } from '../../components/pageHeaderContainer/PageHeader'
import './resume.scss'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import { data } from './utilis'
import {MdWork} from 'react-icons/md'
import { FaBriefcase } from "react-icons/fa";

import  'react-vertical-timeline-component/style.min.css'
export const Resume = () => {
  return (
    <section className='resume'>
      <PageHeader
        headerText='Career'
        icons ={<FaBriefcase size={40}  />}
      />
      <div className="timeline">
        <div className="timeline__exp">
          <h3 className='timeline__exp__headerText'>
            {`<Experience / Trainings/>`}
          </h3>
          <VerticalTimeline
            layout={'1-column'}
            lineColor='var(--yellow-theme-main-color)'
          >
            {
              data.experience.map((item, i) => {
                return (
                  <VerticalTimelineElement key={i}
                  contentStyle={{
                    background : 'none',
                    color : 'var(--yellow-theme-sub-text-color )',
                    border : '1.5px solid var(--yellow-theme-main-color) '
                  }}
                  date={item.date}
                  icon = {<MdWork/>}
                  iconStyle={{
                    background : '#181818',
                    color : 'var(--yellow-theme-main-color )'
                  }}
                  className='timeline__exp__vertical-timeline-element'>
                    <div className="verticalTimeline">
                      <h3 className='verticalTimeline_title'>
                        {item.title}
                      </h3>
                      <h4 className='verticalTimeline_subtite'>
                            {
                              item.place
                            }
                      </h4>
                     

                    </div>
                    <p className='verticalTimeline_desc' style={{fontSize : '15px'}}>{
                      item.description}</p>



                  </VerticalTimelineElement>
                )
              })
            }
                
            

          </VerticalTimeline>
        </div>
        <div className="timeline__education">
          <h3 className='timeline__education__headerText'>
          {`<Education/>`}
          </h3>
          <VerticalTimeline
            layout={'1-column'}
            lineColor='var(--yellow-theme-main-color)'
          >
            {
              data.education.map((item, i) => {
                return (
                  <VerticalTimelineElement key={i}
                  contentStyle={{
                    background : 'none',
                    color : 'var(--yellow-theme-sub-text-color )',
                    border : '1.5px solid var(--yellow-theme-main-color) '
                  }}
                  date={item.date}
                  
                  icon = {<MdWork/>}
                  iconStyle={{
                    background : '#181818',
                    color : 'var(--yellow-theme-main-color )'
                  }}
                  className='timeline__education__vertical-timeline-element'
                  >
                    <div className="education_verticalTimeline">
                      <h3 className='education_verticalTimeline_title'>
                        {item.title}
                      </h3>
                      <h4 className='education_verticalTimeline_subtite'>
                            {
                              item.place
                            }
                      </h4>
                      

                    </div>
                    <p className='education_verticalTimeline_desc' style={{fontSize : '15px'}}>{
                      item.description}</p>



                  </VerticalTimelineElement>
                )
              })
            }
                
            

          </VerticalTimeline>
        </div>
      </div>
    </section>

  )
}
