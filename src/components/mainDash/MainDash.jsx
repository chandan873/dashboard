import React from 'react'
import Cards from '../cards/Cards'
import Table from '../table/Table'
import './MainDash.css'


const MainDash = () => {
  return (
    <div className='Maindash' >
        <h1>DashBoard</h1>
        
        <Cards/>
        <Table/>
    </div>
  )
}

export default MainDash