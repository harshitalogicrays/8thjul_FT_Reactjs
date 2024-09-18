import React, { useEffect, useState } from 'react'
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, MagnifyingGlassIcon, ShoppingCartIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useMycontext } from '../CartContext'
import { toast } from 'react-toastify'
import { ShowOnLogin, ShowOnLogout } from './hiddenlinks'
import { useDispatch } from 'react-redux'
import { FILTER_BY_SEARCH } from '../redux/filterSlice'
import ThemeBtn from './ThemeBtn'

const Header = ({products=[]}) => {
  const [username,setUsername]=useState("Guest")
  const redirect =useNavigate()
  const data=useMycontext()
    const navigation = [
        { name: 'Home', href: '/', current: true },
        { name: 'About', href: '/about', current: false },
        { name: 'Products', href: '/products', current: false },
      ]
    let obj = JSON.parse(sessionStorage.getItem("8thjulreact"))
      useEffect(()=>{
      if(sessionStorage.getItem("8thjulreact") != null){
          setUsername(obj.name)
      }
      },[sessionStorage.getItem("8thjulreact")])
  
      let handleLogout=()=>{
        if(sessionStorage.getItem("8thjulreact") != null){
          sessionStorage.removeItem("8thjulreact")
          toast.info("loggedOut Successfully")
          redirect('/')
        }
      }

    //search
    let [search,setSearch]=useState('')
    const dispatch = useDispatch()
    useEffect(()=>{
       dispatch(FILTER_BY_SEARCH({products,search}))
    },[search])
  return (
    <Disclosure as="nav" className="bg-gray-800">
      <div className="px-4">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <img
                alt="Your Company"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                className="h-8 w-auto"
              />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.href}
                    className={({ isActive}) =>
                     isActive ? "bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" :'text-gray-300 hover:bg-red-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium'
                    }
              
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
                <ThemeBtn/>
          {/* search */}
          <div className="ml-6 hidden sm:flex items-center">
              <form className="flex items-center relative">
                <input
                  type="text"
                  className="bg-gray-700 text-gray-300 rounded-md pl-3 pr-10 py-2 focus:outline-none"
                  placeholder="Search..." value={search} onChange={(e)=>setSearch(e.target.value)}
                />
                <MagnifyingGlassIcon className="h-5 w-5 absolute right-2 text-gray-400 pointer-events-none" />
              </form>
            </div>
            {/* ////// */}
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <Link to='/cart'
              type="button"
              className="text-6xl me-2   relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              <ShoppingCartIcon className="h-9 w-9"/>
              <span className="absolute -top-1 -right-2 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-red-600 rounded-full">
     {data.cartItems.length}
    </span>
            </Link>
            <ShowOnLogout>
                <NavLink to='/register'
                    className={({ isActive}) =>
                     isActive ? "bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" :'text-gray-300 hover:bg-red-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium'
                    } > Register </NavLink>

               <NavLink to='/login'
                    className={({ isActive}) =>
                     isActive ? "bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" :'text-gray-300 hover:bg-red-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium'
                    } > Login </NavLink> 
            </ShowOnLogout>
            {/* Profile dropdown */}
            <ShowOnLogin>
            <a  className=
                   'text-gray-300 hover:bg-red-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium'
                    > Welcome {username} </a>
            <Menu as="div" className="relative ml-3">
              <div>
                <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Open user menu</span>
                  <img
                    alt=""
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    className="h-8 w-8 rounded-full"
                  />
                </MenuButton>
              </div>
              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <MenuItem>
                  <Link to={`/profile/${obj?.userId}`} className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                    Your Profile
                  </Link>
                </MenuItem>
                <MenuItem>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                    Settings
                  </a>
                </MenuItem>
                <MenuItem>
                  <button className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100" onClick={handleLogout}>
                    Sign out
                  </button>
                </MenuItem>
              </MenuItems>
            </Menu>
            </ShowOnLogin>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as={NavLink}
              to={item.href}
              className={({ isActive}) =>
                isActive ? "bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" :'text-gray-300 hover:bg-red-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium'
               }
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>   
  )
}

export default Header
