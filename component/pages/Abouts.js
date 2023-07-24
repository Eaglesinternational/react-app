import React from 'react';
import Mv from './includes/Mv';
import Footer from '../inc/Footer';

export default function Abouts() {
  return (
    <div className='me'>
    <section className='py-4 bg-primary text-center mt-30'>
        <h1 className='text-white mt-5'> About Us</h1>
  </section>
  <section className='py-3'>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h4>About our Company</h4>
                <div className="underline mb-3"></div>
                <p className='para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt doloribus a officia quo dolor, sunt, ex facilis voluptatum ipsam neque fugit, hic beatae explicabo? Perspiciatis ducimus voluptatem doloremque distinctio dicta.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum delectus aspernatur nobis eius impedit omnis ab tempora nihil dicta optio dolor, error quidem quaerat inventore nulla porro voluptas sint minus sequi officiis. Ut ea et obcaecati, in voluptas excepturi necessitatibus quo autem sunt? Vero quos esse quis dolore provident quidem!</p>
              </div>
            </div>
          </div>
        </section>
        <Mv />
        <Footer />
  </div>
  )
}
