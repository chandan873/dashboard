import React from 'react'
import Card from '../card/Card'
import {CardsData} from '../../data/data'
import './Cards.css'
const Cards = () => {
  return (
    <div className="Cards">
{CardsData.map((card,id)=>(
  <div className="parentContainer">
    <Card
    
    title={card.title}
    color={card.color}
    barValue={card.barValue}
    value={card.value}
    png={card.png}
    series={card.series}
    
    
    />
  </div>
))}
    </div>
  )
}

export default Cards