import React, { Component } from 'react';
import Footer from '../inc/Footer';

 class Contact extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name: '',
         email: '',
         message: ''
      }
    }
    


    handlerNameChange=(event) =>{
        this.setState({
          name: event.target.value
        })
    }

    handlerEmailChange =(event)=>{
      this.setState({
        email: event.target.value
      })
    }
    handlerMessageChange =(event)=>{
      this.setState({
        message: event.target.value
      })
    }

    handleSubmit = (event) => {
      alert(`${this.state.name} ${this.state.email} ${this.state.message}`)
      event.preventDefault()
    }






  render() {
    return (
      <div>
        <section className='py-4 bg-primary text-center '>
        <h1 className='text-white mt-5'>Contact Us</h1>
  </section>
  <section className='py-3'>
          <div className="container">
            <div className="row">
              <div className="col-md-8">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.283387169323!2d2.4287097741141217!3d6.357352825073625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1023559fe38ac2f1%3A0x1b79317f770e3ff2!2sInternational%20Model%20School%2C%20Cotonou!5e0!3m2!1sen!2sbj!4v1689768555929!5m2!1sen!2sbj" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>
              <div className="col-md-4">
              <div className="card shadow">
              <div className="card-body py-4">
              <h4>Send Your Idea</h4>
                <div className="underline mb-3"></div>
                <form action="" onSubmit={this.handleSubmit}>
                  <label htmlFor="">Name</label>
                  <input type="text"  placeholder='Enter Your Name' required className='form-control mb-3' value={this.state.name} onChange={this.handlerNameChange}/>
                  <label htmlFor="">Email</label>
                  <input type="text"  placeholder='Enter Your Email' required className='form-control mb-3' value={this.state.email} onChange={this.handlerEmailChange}/>
                  <label htmlFor="">Message</label>
                 <textarea required className='form-control nam mb-3' value={this.state.message} onChange={this.handlerMessageChange} ></textarea>
                 <button type='submit' className="btn btn-primary w-100">Submit</button>
                </form>
              </div>
              </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    )
  }
}

export default Contact
