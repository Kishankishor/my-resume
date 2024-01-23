import React, { useState } from 'react'
import { PageHeader } from '../../components/pageHeaderContainer/PageHeader'
import './portfolio.scss'
import { FaProjectDiagram } from "react-icons/fa";
export const Portfolio = () => {

  const [hoverValue, setHoverValue] = useState(null)

  const handleHover = (index) => {
    setHoverValue(index)
  }

  const portfolioData = [
    {
      id: 1,
      name: 'Netflix Clone',
      image: 'https://th.bing.com/th/id/OIP.ufmlz3QcIh3sqoEd7L-3TQHaEK?w=305&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
      link: 'https://main--delightful-sprinkles-e5dfa9.netlify.app/'
    },
    {
      id: 2,
      name: 'Amazon Clone',
      image: 'https://th.bing.com/th/id/OIP.oPsG5CxpeTPqtdA40Ym2ZAHaE7?w=253&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
      link: 'https://main--storied-cascaron-b1de60.netlify.app/'
    },
    {
      id: 3,
      name: 'Coming Soon !..',
      image: 'https://th.bing.com/th/id/OIP.-cYdWKbuNE1yIBeNFYMYVwHaEr?rs=1&pid=ImgDetMain',
      link: ''
    }
  ]
  return (
    <section className='portfolio'>

      <PageHeader
        headerText='Portfolio'
        icons = {<FaProjectDiagram  size={40}/>} />
      <div className="portfolio__content">
        <div className="portfolio__content__cards">
          {
            portfolioData.map((item, index) => {
              return (
                <div className="portfolio__content__cards__item"
                  key={`cardItem${item.id}`}
                  onMouseEnter={() => handleHover(index)}
                  onMouseLeave={() => handleHover(null)}>
                  <div className='portfolio__content__cards__item__imageWrapper'>
                    <a href={item.link}>
                      <img src={item.image} alt="" />
                    </a>

                  </div>
                  <div className="overlay">
                    {index === hoverValue && (
                      <div>
                        <p>{item.name}</p>
                        <a href={item.link}> <button>Visit</button></a>
                       
                      </div>)}


                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </section>

  )
}
