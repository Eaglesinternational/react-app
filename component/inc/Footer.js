import React from 'react';
import {Link} from 'react-router-dom';
export default function Footer() {
  return (
   <section className='bg-dark text-white py-5'>
    <div className="container ">
        <div className="row">
            <div className="col-md-4">
                <h6 className='text-warning'>Company Info</h6>
                <hr />
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum, nam!</p>
            </div>
            <div className="col-md-4">
                <h6 className='text-warning'>Quick Links</h6>
                <hr />
                <div><Link  to="/home" className='text-decoration-none'>Home</Link></div>
                <div><Link  to="/abouts" className='text-decoration-none'>About Us</Link></div>
                <div><Link  to="/contact"className='text-decoration-none'>Contact Us</Link></div>
                <div><Link  to="/"className='text-decoration-none'>Blogs</Link></div>
            </div>
            <div className="col-md-4">
                <h6 className='text-warning'>Contact Information</h6>
                <hr />
                <div><p>C/60 Guinkomey, Cotonou</p></div>
                <div><p>+229 67810731</p></div>
                <div><p>ekebu4real@yahoo.com</p></div>
            </div>
        </div>
    </div>
   </section>
  )
}
