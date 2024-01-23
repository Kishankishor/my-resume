import React from 'react'
import { PageHeader } from '../../components/pageHeaderContainer/PageHeader'
import { skillsData } from './utilis'
import { Animate, AnimateKeyframes } from 'react-simple-animate'
import { GiSkills } from "react-icons/gi";
import { Line } from 'rc-progress'
import './skill.scss'
export const Skill = () => {
  return (
    <section className="skills">

      <PageHeader
        headerText='My Skills'
        icons={<GiSkills  size={40} />}
      />
      <div className="skills__contentWrapper">
        {
          skillsData.map((item, i) => {
            return (
              <div className="skills__contentWrapper__innerContent" key={i}>
                <Animate
                  play
                  duration={1}
                  delay={0.3}
                  start={{
                    transform: 'translateX(-200px)'
                  }}
                  end={{
                    transform: 'translateX(0px)'
                  }}>
                    
                  <h3 className='skills__contentWrapper__innerContent__text'>
                    {
                      `<${item.label}/>`
                    }

                  </h3 >
                  <div>
                    {
                      item.data.map((item, i) => {
                        return (
                          <AnimateKeyframes
                            play
                            duration={1}
                            keyframes={['opacity : 1', 'opacity : 0']}
                            iterationCount={1}
                          ><div className='progressBarWrapper' key={i}>
                              <p>{item.skill}</p>
                              <Line
                                percent={item.percentage}
                                strokeWidth='2'
                                strokeColor='var(--yellow-theme-main-color)'
                                trailWidth="2"
                                strokeLinecap='square'>

                                </Line>


                            </div>


                          </AnimateKeyframes>

                        )
                      })
                    }
                  </div>


                </Animate>


              </div>
            )
          })
        }
      </div>
    </section>
  )
}
