import React from 'react';
import TotalPrice from './TotalPrice'; // Import the TotalPrice component
import { Figure } from 'react-bootstrap';
import './AboutPage.css';

const AboutPage = ({ totalPrice }) => {
  return (
    <div className="about-page-container">
      <TotalPrice totalPrice={totalPrice} />
      <h1>About Our Store</h1>
      <br></br>
      <p>Welcome to our online store. We offer a variety of products for you to enjoy.</p>
      <div className="logo-container">
        <Figure>
          <div className="figure-wrapper">
            <Figure.Image
              width={300}
              height={200}
              src="https://static.vecteezy.com/system/resources/previews/008/976/210/non_2x/clothing-store-logo-design-with-hanger-illustration-vector.jpg"
              alt="Store logo"
              className="mb-3"
            />
            <Figure.Caption>
              A store that sells tees for an effortless, cool, and comfy vibe, serving looks since day one.
            </Figure.Caption>
          </div>
        </Figure>
      </div>
      <div className="about-page-image">
        <img
          src="https://img.freepik.com/free-photo/shirt-mockup-concept-with-plain-clothing_23-2149448751.jpg"
          className="img-fluid rounded"
          alt="Black and white minimalistic tees"
        />
      </div>
      <div className="mb-3">
        <img
          src="https://static.dezeen.com/uploads/2016/04/ETQ-Store-Amsterdam-by-Studio-Jos-van-Dijk_dezeen_sq2.jpg"
          className="img-fluid rounded"
          alt="Inside a minimalistic gray clothing store"
        />
      </div>
      <footer className="footer mt-5">
        <h5>Contact us:</h5>
        <p>Email: clothingstore@mail.coc</p>
        <p>Telephone: 020 1234563</p>
        <p>Find us on Instagram: @clothingstore</p>
      </footer>
    </div>
  );
};

export default AboutPage;