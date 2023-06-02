import React, { useEffect,useState } from 'react'
import Header from '../../../views/header'
import Introduction from './Introduction'
import SlideImage from './SlideIm'
import axiosClient from '../../../axios-client'
import Loading from '../../../views/loadings/Loading'
import About from '../../../views/Header/About'
import DefProduct from '../../../views/Header/DefProduct'
function landingPage() {
  const [catalogs,setcatalogs] = useState([])
  const [loading,setloading] = useState(false)
  useEffect(()=>{
    axiosClient.get('/getCatalog')
    .then(({data})=>{
      console.log(data.data)
      setcatalogs(data.data)
      setloading(true)
    }).catch(err=>{
      console.log(err)
    })
  },[])
  return (
    <div className='landing'>
      <Introduction/>
      {/* <About/> */}
      {loading?
      <>
      {catalogs.map(c=><SlideImage ca={c}/>)}
      </>
      :
     <Loading/>
      }
      {/* <DefProduct/> */}
    </div>
  )
}

export default landingPage