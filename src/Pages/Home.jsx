import Section from "../components/Section";
import { livingroom, property } from "../constants";
import Button from '../components/Button'
import {useState} from 'react'
import {Link} from 'react-router-dom'
import {bed, bath, size} from'../assets'

const Home = () => {

  const [search, setSearch] = useState('')


  return (
    <Section className='mt-12 container'>
      <div className='flex w-full gap-6 flex-wrap  justify-center '>
        <div className='block relative w-[50rem]'>
          <h1 className='text-6xl sm:text-6xl text-balance font-bold '>Where Dreams Become Home</h1>
          <p className='text-2xl text-balance sm:text-balance font-old '>Let us guide you to the perfect place for you and your loved ones.</p>

          <Button></Button>
      </div>
      <div className='space-y-5 '>
        {livingroom.map((item)=>(
          <div key={item.id} className='rounded-lg'>
            <img src={item.imgurl} width={347} height={223} className='rounded-lg transition group-hover:-translate-y-1 group-hover:shadow-xl bg-white object-cover object-center aspect-square'/>
          </div>
        ))}
      </div>

      </div>
      <div className='mt-12 '>
        <form className='flex w-full flex-wrap justify-between items-center'>
          <div  className="h-auto ">
            <input name='search'
            placeholder="search for the property"
            className='py-1.5 border hover:border-n-2 text-old 
            rounded-md '
            onChange={(e)=>setSearch(e.target.value)}
            />
            <Button className='ml-3 border rounded-full  p-5 hover:bg-n-2/70 bg-n-2 text-white ' >Search</Button>
          </div>


          <div  className='block  w-full rounded-md border-0 py-1.5 text-n-1 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-n-2 sm:max-w-xs sm:text-sm sm:leading-5 hover:border-n-2 '>
            <select  className="w-full pr-3">
              
              <option value='location'>Lordon</option>
              <option value='loca'> USA</option>
            </select>
          </div>

          <div className='block w-full rounded-md border-0 py-1.5 text-n-1 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-n-2 sm:max-w-xs sm:text-sm sm:leading-6'>
            <select className="w-full p-3">
             
              <option value='location'>House</option>
              <option value='loca'> Office </option>
              <option value='loca'> Apartment</option>
            </select>
          </div>
          <div className="block w-full rounded-md border-0 py-1.5 text-n-1 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-n-2 sm:max-w-xs sm:text-sm sm:leading-6">
            <select className="w-full" >
              
              <option value='location'>Rent</option>
              <option value='loca'> Sale</option>
            </select>
          </div>
          
        </form>
      </div>

      <div className="mt-12">
        <div>
          <h1 className="text-4xl text-bebas font-bold">All properties</h1>
        </div>

        <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-5 grid-cols-1 sm '>
          {property.map((proper)=>(
            <div key={proper.id} className="relative bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10 space-y-5 ">
              <div className="h-auto ">
                <Link to={proper.url}>
                  <img src={proper.imgurl } width={372} className="rounded max-h-[248] " height={248} />
                </Link>
                
              </div>
              <div className="flex flex-col">
                <h2 className='font-old text-xl '>{proper.price}</h2>
                <h1 className='font-bebas text-2xl'>{proper.office}</h1>
                <p className="text-sm text-n-1/50">{proper.location}</p>
                <div className="flex gap-3 font-old ">
                  <p className="text-sm text-n-1/50 flex">
                    <img src={bed} width={14} height={14}/>{proper.bedrooms}</p>
                  < p className="text-sm text-n-1/50 flex "> 
                  <img src={bath} width={14} height={14}/>   {proper.bathrooms}</p>
                </div>
                <p className="text-sm text-n-1/50 flex gap-2 ">
                  <img src={size} width={14} height={14}/>
                  {proper.size}</p>
              </div>
              
            </div>
          ))}
        </div>
      </div>
      
    </Section>
  )
}

export default Home