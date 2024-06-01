import Section from "../components/Section";
import Contact from '../components/Contact'
import {prop1} from '../assets'

const Sanfra = () => {
  return (
    <Section className='mt-12 container'>
     <div className="w-full ">
       <img src={prop1}  className="w-full h-60 max-md:hidden "/>
     </div>




     <div className='flex mt-12 w-full gap-16 flex-wrap  '>
      <div  className="flex flex-col w-full lg:w-6/12 xl:w-8/12 ">
          <p className="text-n-1/75 text-xl font-old">San Francisco, CA, USA</p>
          <h2 className='text-4xl font-bebas font-bold mt-4'>San Francisco Office</h2>

          <p className='text-n-1/75 text-xl text-wrap mt-10 font-old'>Lorem ipsum dolor sit amet consectetur adipiscing elit etiam cras tellus sit tempor amet, nascetur quam ornare proin platea diam amet sed fringilla eget pretium id sagittis in porttitor pharetra dui. A venenatis molestie vitae rutrum eu leo gravida odio arcu neque nulla etiam adipiscing amet. Diam sit tempor ut quis sodales tellus aliquam aliquam quis a nisl sapien nunc id etiam penatibus.</p>


          <h3 className='font-bebas font-bold text-2xl mt-10 '>About the property</h3>

          <p className='text-n-1/75 text-xl text-wrap mt-10 font-old'>Lorem ipsum dolor sit amet consectetur adipiscing elit etiam cras tellus sit tempor amet, nascetur quam ornare proin platea diam amet sed fringilla eget pretium id sagittis in porttitor pharetra dui. A venenatis molestie vitae rutrum eu leo gravida odio arcu neque nulla etiam adipiscing amet. Diam sit tempor ut quis sodales tellus aliquam aliquam quis a nisl sapien nunc id etiam penatibus.</p>

     </div>

     <div className="">
       <Contact title='Property for sale'>$ 300000</Contact>
      </div>
     </div>


        

     

      
    </Section>
  )
}

export default Sanfra