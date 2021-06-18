import React, { Component } from 'react'
import { Link } from 'gatsby'
import Logo from '../images/logo.png'
import { FaCartArrowDown } from 'react-icons/fa'

export default class Navbar extends Component {
  //we need to change to the functional component
  state = {
    navbarState: false,
    navbarClassState: 'collapse navbar-collapse',
    menus: [
      {
        id: 1,
        item: 'Home',
        url: '/'
      },
      {
        id: 2,
        item: 'About',
        url: '/about'
      },
      {
        id: 3,
        item: 'Services',
        url: '/services'
      },
      {
        id: 4,
        item: 'Contact',
        url: '/contact'
      }
    ]
  }

  myToggler = () => {
    this.state.navbarState
      ? this.setState({
          navbarState: false,
          navbarClassState: 'collapse navbar-collapse'
        })
      : this.setState({
          navbarState: true,
          navbarClassState: 'collapse navbar-collapse show'
        })
  }

  render () {
    return (
      <div>
        <nav className='navbar navbar-expand-md bg-theme text-white'>
          <Link to='/' className='navbar-brand ml-5'>
            <img src={Logo} alt='' width='40px' />
          </Link>
          <button
            className='navbar-toggler'
            type='button'
            onClick={this.myToggler}
          >
            <span className='text-white'>menu</span>
          </button>
          <div className={this.state.navbarClassState}>
            <ul className='navbar-nav ml-auto mr-5'>
              {this.state.menus.map(menu => {
                return (
                  <li key={menu.id} className='nav-item'>
                    <Link to={menu.url} className='nav-link text-white'>
                      {menu.item}
                    </Link>
                  </li>
                )
              })}
              <li className='nav-item'>
                <Link to='/' className='nav-link text-white'>
                  <FaCartArrowDown className='cart-icon' />
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}
