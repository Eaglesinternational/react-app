import React, { Component } from 'react'
import Slider from '../inc/slider'
import Mv from './includes/Mv'
import Footer from '../inc/Footer'



 class Homes extends Component {
  render() {
    return (
      <div>
        <Slider />
        <section className='py-3'>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h4 className='mt-5'>Our Company</h4>
                <div className="underline mb-3"></div>
                <p className='para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt doloribus a officia quo dolor, sunt, ex facilis voluptatum ipsam neque fugit, hic beatae explicabo? Perspiciatis ducimus voluptatem doloremque distinctio dicta.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum delectus aspernatur nobis eius impedit omnis ab tempora nihil dicta optio dolor, error quidem quaerat inventore nulla porro voluptas sint minus sequi officiis. Ut ea et obcaecati, in voluptas excepturi necessitatibus quo autem sunt? Vero quos esse quis dolore provident quidem!</p>
              </div>
            </div>
          </div>
        </section>
          <Mv />
          <section className='py-3'>
          <div className="container">
            <div className="row">
              <div className="col-md-12"> <h4>Our Services</h4>
              <div className="underline mb-3"></div></div>

              <div className="col-md-4">
                <div className="card shadow">
                <div className="card-body"> 

                      <h6>Web Designing</h6>
                      <div className="subunderline mb-3"></div>
                      <p className='para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt doloribus a officia quo dolor, sunt, ex facilis voluptatum ipsam neque fugit, hic beatae explicabo? Perspiciatis ducimus voluptatem doloremque distinctio dicta.</p>
                       </div>
              </div>
              </div>
              <div className="col-md-4">
                <div className="card shadow">
                <div className="card-body">

                      <h6>Development</h6>
                      <div className="subunderline mb-3"></div>
                      <p className='para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt doloribus a officia quo dolor, sunt, ex facilis voluptatum ipsam neque fugit, hic beatae explicabo? Perspiciatis ducimus voluptatem doloremque distinctio dicta.</p>
                       </div>
              </div>
              </div>
              <div className="col-md-4">
                <div className="card shadow">
                <div className="card-body">

                      <h6>Digital Marketing</h6>
                      <div className="subunderline mb-3"></div>
                      <p className='para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt doloribus a officia quo dolor, sunt, ex facilis voluptatum ipsam neque fugit, hic beatae explicabo? Perspiciatis ducimus voluptatem doloremque distinctio dicta.</p>
                       </div>
              </div>
              </div>


            </div>
          </div>
        </section>
        <Footer/>
      </div>
    )
  }
}

export default Homes
