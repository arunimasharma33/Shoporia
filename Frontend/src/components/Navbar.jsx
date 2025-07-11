import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { NavLink , Link} from 'react-router-dom'
import { useState } from 'react'
import { ShopContext } from '../context/ShopContext'

const Navbar = () => {


  const [visible, setVisible]= useState(false)
  const {setShowSearch, getCartCount, setCartItems, navigate, token , setToken}= useContext(ShopContext);
  const logout = () =>{
    navigate('/login')
    localStorage.removeItem('token')
    setToken('')
    setCartItems({})
    
    }

  return (
    <div className='flex items-center justify-between py-5 font-medium'>
      <Link to='/'><img src={assets.logo} className='w-40' />
      </Link>

      <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
        <NavLink to='/' className='flex flex-col items-center gap-1'>
        <p>HOME</p>
        <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
        </NavLink>


        <NavLink to='/collection' className='flex flex-col items-center gap-1'>
        <p>COLLECTION</p>
        <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
        </NavLink>



        <NavLink to='/about' className='flex flex-col items-center gap-1'>
        <p>ABOUT</p>
        <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
        </NavLink>


        <NavLink to='/contact' className='flex flex-col items-center gap-1'>
        <p>CONTACT</p>
        <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
        </NavLink>
      </ul>


    <div className='flex items-center gap-6'>
      <img src={assets.search_icon} className='w-5 cursor-pointer' onClick={()=>setShowSearch(true)}/>
      <div className='group relative'>
  <img
    src={assets.profile_icon}
    className='w-5 cursor-pointer'
    onClick={() => token ? null : navigate('/login')}
  />

  {/* Always render this div, only toggle inner content */}
  <div className='absolute right-0 pt-4 hidden group-hover:block z-10'>
    {token && (
      <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
        <p className='cursor-pointer hover:text-black'>My Profile</p>
        <p className='cursor-pointer hover:text-black' onClick={() => navigate('/orders')}>Orders</p>
        <p className='cursor-pointer hover:text-black' onClick={logout}>Logout</p>
      </div>
    )}
  </div>
</div>


      <Link to='/cart' className='relative'>
        <img src={assets.cart_icon} className='w-5 min-w-5'/>
        <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading bg-black text-white
        aspect-square rounded-full text-[10px]'>{getCartCount()}</p>
      </Link>


      <img onClick={()=>{
        setVisible(true)
      }} src={assets.menu_icon} className='w-5 cursor-pointer sm:hidden'></img>
    </div>

      {/*SideBar with setVisible(true)*/}

      <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible?'w-full' : 'w-0'}`}>
        <div className='flex flex-col text-gray-600'>
          <div className='flex items-center gap-4 p-3 cursor-pointer' onClick={()=>{
            setVisible(false)
          }}>
             
            <img src={assets.dropdown_icon} className='h-4 rotate-180'/>
             
            
            <p>Back</p>
          </div>
          <NavLink onClick={()=>{setVisible(false)}} className='py-2 pl-6 border' to='/'>HOME</NavLink>
          <NavLink onClick={()=>{setVisible(false)}} className='py-2 pl-6 border' to='/collection'>COLLECTION</NavLink>
          <NavLink onClick={()=>{setVisible(false)}} className='py-2 pl-6 border' to='/about'>ABOUT</NavLink>
          <NavLink onClick={()=>{setVisible(false)}} className='py-2 pl-6 border' to='/contact'>CONTACT</NavLink>
        </div>
      </div>
    </div>
  )
}

export default Navbar