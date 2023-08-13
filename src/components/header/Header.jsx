import React, {useState} from 'react'
import styles from './header.module.css'
import {GiHamburgerMenu} from 'react-icons/gi'

export default function Header() {
    const [isMenuVisible, setIsMenuVisible] = useState(false)
  return (
      <div className={styles.container}>
          <img className={styles.logo} src='../BRAND AFFAIRS (1).png'></img>
         
          <div className={styles.innerDiv}>
              <h4>Home</h4>
              <h4>Orders</h4>
              <h4>Wishlist</h4>
              <h4>Bag</h4>
              <h4>Login</h4>
          </div>
          <div className={styles.memuBtnDiv}>
              <button onClick={()=>setIsMenuVisible(!isMenuVisible)}><GiHamburgerMenu/></button>
          </div>
          <div
              style={isMenuVisible ? { transform: 'translateX(25%)', display:'flex' } : {}}
              className={styles.menuDiv}>
          <span>Home</span>
          <span>Orders</span>
          <span>Whishlist</span>
          <span>Bag</span>
          <span>Login</span>
            
          </div>
    </div>
  )
}
