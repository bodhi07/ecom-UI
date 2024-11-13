import React from 'react'
import { NavLink } from 'react-router-dom';


const BrowseCategory = () => {
  return (


    <>
    
     <h1 class=' text-3xl text-black-400'><b>|</b>Browse By Category</h1>

     <div class="container mx-auto p-20 ">
  <div class="flex space-x-20">
    
    <div class="w-full md:w-1/3 p-9 bg-red-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300  {
      
    });">
      <NavLink to='/men' className={({isActive})=> isActive ? 'active-link':''}>Men</NavLink>
      
    </div>
    
    
    <div class="w-full md:w-1/3 p-9 bg-red-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <NavLink to='/women' className={({isActive})=> isActive ? 'active-link':''}>Women</NavLink> 
    </div>
    
    <div class="w-full md:w-1/3 p-9 bg-red-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"> 
      <NavLink to='/kids' className={({isActive})=> isActive ? 'active-link':''}>Kids</NavLink>
    </div>

  </div>

</div>



    </>
    
  )
}

export default BrowseCategory
