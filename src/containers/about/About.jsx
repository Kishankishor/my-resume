import React from 'react'
import { PageHeader } from '../../components/pageHeaderContainer/PageHeader'
import { BsInfoCircleFill } from 'react-icons/bs'
import { Animate } from 'react-simple-animate'
import { DiNodejs } from "react-icons/di";
import { FaDatabase } from "react-icons/fa";
import { FaReact } from "react-icons/fa6";
import { FaDev } from "react-icons/fa";
import './about.scss'
export const About = () => {
  const personalDetails = [
    {
      label: "Name",
      value: 'Kishan Kishore'
    },
    {
      label: "Age",
      value: '24'
    },
    {
      label: "Place",
      value: 'Thrissur, Kerala'
    },
    {
      label: "Email",
      value: 'kishankishore929@gmail.com'
    },
    {
      label: "Contact",
      value: '9633013038, 8075372430'
    }

  ]
  const job_summary = "Enthusiastic and dedicated beginner Web Developer with a strong foundation in programming principles and a passion for creating innovative software solutions. Proficient in Programming Languages and eager to learn and apply new technologies to solve complex problems. Adept at collaborating within teams to deliver high-quality code while contributing fresh ideas and a proactive approach to challenges. Possess excellent problem-solving skills, attention to detail, and a commitment to continuous learning. Looking to leverage academic training and any relevant personal projects to contribute effectively in an entry-level web development role"
  return (
    <section className="about">
      <PageHeader
        headerText='About Me'
        icons={<BsInfoCircleFill size={40} />}
      />
      <div className='about__content'>
        <div className='about__content__personalWrapper'>
          <Animate
            play
            duration={1.5}
            delay={0}
            start={{
              transform: 'translateX(-550px)'
            }}
            end={{
              transform: "translateX(0px)"
            }}>
            <h3>Web developer</h3>
            <p>{job_summary}</p>
          </Animate>
          <Animate
            play
            duration={1.5}
            delay={0}
            start={{
              transform: 'translateX(500px)'
            }}
            end={{
              transform: "translateX(0px)"
            }}>
            <h3 className='personalInformationHeader'>
              Personel information
            </h3>
            <ul>
              {personalDetails.map((item, i) => {
                return (
                  <li key={i}><span className='title'>{item.label}</span>:
                    <span className='value'>{item.value}</span>
                  </li>
                )
              })}
            </ul>
          </Animate>
        </div>

        <div className='about__content__servicesWrapper'>
          <Animate
            play
            duration={1.5}
            delay={0}
            start={{
              transform: 'translateX(500px)'
            }}
            end={{
              transform: "translateX(0px)"
            }}>
            <div className="about__content__servicesWrapper__inner">
              <div>
                <FaDatabase size={60} color='var( --yellow-theme-main-color)' />
              </div>
              <div>
                <DiNodejs size={60} color='var( --yellow-theme-main-color)' />
              </div>
              <div>
                <FaReact size={60} color='var( --yellow-theme-main-color)' />
              </div>
              <div>
                <FaDev size={60} color='var( --yellow-theme-main-color)' />
              </div>
            </div>
            </Animate>

        </div>


      </div>
    </section>


  )
}
