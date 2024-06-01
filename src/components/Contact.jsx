import React, {useState}from 'react'
import Button from "../components/Button";

const Contact = ({children, title}) => {
    const  [form, setform] = useState({name:'', email:'',number:'' })

    const [isLoading, setisLoading] = useState(false)

    const handleChange=(e)=>{
        setform({...form, [e.target.name]:e.target.value})
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        setisLoading(true)
        alert('submitted')
    }


  return (
    <div className=' block w-full rounded-md border-0 py-20 px-4  m-auto h-auto text-n-1 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-n-2 sm:max-w-xs sm:text-sm sm:leading-6'>
        <form action="get" className=''>
            <div className=' border-b  '>
                <p className='text-xl text-n-1 font-old '>{title}</p>
                <h1 className='font-bebas font-bold  text-4xl mb-4 '>{children}</h1>
            </div>
            <div className='flex flex-col mt-4 gap-3 '>
                <h2 className='font-bebas font-bold text-3xl'>Get in touch to receive more info</h2>

                <input 
                name='name' 
                placeholder='Full name'
                type='text'
                required
                value={form.name}
                className='border hover:border-n-2 p-3 placeholder:font-thin placeholder:italic placeholder:font-old rounded-md'
                onChange={handleChange}
                
                />

                <input 
                name='email' 
                placeholder='Email'
                type='email'
                required
                value={form.email}
                className='border hover:border-n-2 p-3 placeholder:font-thin placeholder:italic placeholder:font-old rounded-md'
                onChange={handleChange}
                
                />

                <input 
                name='number' 
                placeholder="Phone Number"
                type='text'
                required
                value={form.number}
                className='border hover:border-n-2 p-3 placeholder:font-thin placeholder:italic placeholder:font-old rounded-md'
                onChange={handleChange}
                
                />

                <Button type='submit' href='/' disable={isLoading} onClick={handleSubmit} className='border rounded-full bg-n-2 text-white font-old  '>Request info</Button>
            </div>
        </form>
    </div>
  )
}

export default Contact