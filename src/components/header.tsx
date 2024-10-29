
import Link from 'next/link'
import React from 'react'

const Header = () => {
    
    const navigations = [
        {
            id: 1,
            title: 'Home',
            url: '/'
        },
        {
            id: 2,
            title: 'About',
            url: '/about'
        },
        {
            id: 3,
            title: 'Contact',
            url: '/contact'
        },
        {
            id: 4,
            title: 'Product',
            url: '/product'
        }
    ]
  return (
    <div className="bg-slate-50 text-slate-950 text-center shadow-lg p-2">
        <div>
            {navigations.map((navigation, index) => {
                return (
                    <Link key={index} href={navigation.url}>{navigation.title}</Link>
                )
            })}
            
        </div>
    </div>
  )
}

export default Header