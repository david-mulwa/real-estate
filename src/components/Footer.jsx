import Section from './Section'
import {socials, navigation, company, event, login, resources} from '../constants'
import {logo} from'../assets'

const Footer = () => {
  return (
    <Section className='!px-0 !py-0 '>


      <div className='flex  flex-wrap  gap-5 container justify-between   '>
        <div className='block w-full  lg:w-3/12 xl:w-3/12'>
          <img src={logo} alt='logo'/>
          <p className='text-balance mt-4 font-old text-xl '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec.</p>
        </div>

        <div className='flex flex-col '>
          <p className='text-sm font-bebas text-bold text-n-2'>product</p>
          <div className='space-y-7 mt-4 '>
            {navigation.map((item)=>(
                <ul key={item.id}>
                  <l1 className='font-old hover:text-n-2 '>{item.title}</l1>
                </ul>
            ))}
          </div>
          
        </div>
        <div className='flex flex-col '>
          <p className='text-sm font-bebas text-bold text-n-2'>company</p>
          <div className='space-y-7 mt-4 '>
            {company.map((item)=>(
                <ul key={item.id}>
                  <l1 className='font-old hover:text-n-2 '>{item.title}</l1>
                </ul>
            ))}
          </div>
          
        </div>
        <div className='flex flex-col '>
          <p className='text-sm font-bebas text-bold text-n-2'>Socials</p>
          <div className='space-y-7 mt-4 '>
            {event.map((item)=>(
                <ul key={item.id} >
                  <l1 className='font-old hover:text-n-2 '>{item.title}</l1>
                </ul>
            ))}
          </div>
          
        </div>
        <div className='flex flex-col '>
          <p className='text-sm font-bebas text-bold text-n-2'>resources</p>
          <div className='space-y-7 mt-4 '>
            {resources.map((item)=>(
                <ul key={item.id}>
                  <l1 className='font-old hover:text-n-2 '>{item.title}</l1>
                </ul>
            ))}
          </div>
          
        </div>
        <div className='flex flex-col '>
          <p className='text-sm font-bebas text-bold text-n-2'>login</p>
          <div className='space-y-7 mt-4'>
            {login.map((item)=>(
                <ul key={item.id}>
                  <l1 className='font-old hover:text-n-2 '>{item.title}</l1>
                </ul>
            ))}
          </div>
          
        </div>

      </div>


        <div className='container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col border-t mt-4'>
            <p className='caption text-n-1 lg:block '  >
                © {new Date().getFullYear()}.  All rights reserved
            </p>

            <ul className='flex gap-5 flex-wrap'>
              {socials.map((item)=>(
                <a key={item.id} href={item.url} target="_blank" className='flex items-center justify-center w-10 h-10 rounded-full transition-colors hover:bg-n-2'>
                  <img src={item.iconUrl} width={16} height={16} alt={item.title}/>
                </a>
              ))}
            </ul>

        </div>
    
    </Section>
  )
}

export default Footer