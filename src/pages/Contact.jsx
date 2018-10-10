import React, {Component} from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/footer.jsx';
import Jumbotron from '../components/Jumbotron.jsx';

class Contact extends Component {
  render() {
    return (
      <div>
        <div className="container">

          <Jumbotron title="Contact Me" subtitle="Contact Page! #Win"/>

          <Navbar/>

          <form>
            <div className="form-group">
              <label for="firstName">First and Last Name</label>
              <input type="text" className="form-control" id="firstName" placeholder="John Smith"/>
            </div>

            <div className="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
            </div>

            <div className="form-group">
              <label for="phoneNumber">Contact Number</label>
              <input type="text" className="form-control" id="phoneNumber" placeholder="(716)777-7777"/>
            </div>

            <div className="form-group">
              <div className="input-group-prepend">
                <span className="input-group-text">Message</span>
              </div>
              <textarea className="form-control" aria-label="With textarea"></textarea>
            </div>




            <button type="submit" className="btn btn-primary">Submit</button>
          </form>



          <Footer/>
        </div>
      </div>
    );
  }
}

export default Contact
