// Footer.js

import React from 'react';
import logo from '../images/Logo.svg'

function Footer() {
  return (
    <footer>
      <section>
        <div className='company-info'>
          <img src={logo} alt='small little lemon logo' />
          <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
        </div>
        <div>
          <h3>Important Links</h3>
          <ul>
            <li><a href='/'>Home</a></li>
            <li><a href='/'>About</a></li>
            <li><a href='/'>Menu</a></li>
            <li><a href='/'>Reservations</a></li>
            <li><a href='/'>Order Online</a></li>
            <li><a href='/'>Login</a></li>
          </ul>
        </div>
        <div>
          <h3>Contact</h3>
          <ul>
            <li>Address: <br/> 1234 Lemon City, USA</li>
            <li>Phone: <br/> 1-234-567-89101</li>
            <li>Email: <br/> Littlelemon@littlelemon.lemon</li>
          </ul>
        </div>
        <div>
          <h3>Social Media</h3>
          <ul>
            <li><a href='/'>Facebook</a></li>
            <li><a href='/'>Instagram</a></li>
            <li><a href='/'>TikTok</a></li>
          </ul>
        </div>
      </section>
    </footer>
  );
}

export default Footer;