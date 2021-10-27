import React, { Fragment } from 'react'
export interface IError {
  message: string
}

const HomeScreen: React.FC = () => {
  return (
    <Fragment>
      <div className="header">
            <div className="container">
            <div className="row">
          <div className="col-2">
            <h1>
              Give Your Workout <br />
              A New Style!
            </h1>
            <p>
              Success isn&#39;t always about greatness. It&#39;s about consistency.
              Consistent <br />
              hard work gain success. Greatness will come.
            </p>
          <a href="#" className="btn">Explore Now &#8594;</a>
          </div>
          <div className="col-2">
            <img src="/images/image1.png" alt="image1" />
          </div>
        </div>
            </div>
        </div>
      {/* <!-- categories --> */}
      <div className="categories">
        <div className="small-container">
          <div className="row">
            <div className="col-3">
              <img src="/images/category-1.jpg" alt="category-1" />
            </div>
            <div className="col-3">
              <img src="/images/category-2.jpg" alt="category-2" />
            </div>
            <div className="col-3">
              <img src="/images/category-3.jpg" alt="category-3" />
            </div>
          </div>
          
        </div>
      </div>

      {/* <!-- Feature --> */}
      <div className="small-container">
        <h2 className="title">Featured Products</h2>
        <div className="row">
          <div className="col-4">
            <img src="/images/product-1.jpg" alt="product-1" />
            <h4>Fantastic Rubber Shoes</h4>
            <div className="rating">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="far fa-star"></i>
            </div>
            <p>$50.00</p>
          </div>
          <div className="col-4">
            <img src="/images/product-2.jpg" alt="product-1" />
            <h4>Fantastic Rubber Shoes</h4>
            <div className="rating">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="far fa-star"></i>
            </div>
            <p>$50.00</p>
          </div>
          <div className="col-4">
            <img src="/images/product-3.jpg" alt="product-1" />
            <h4>Fantastic Rubber Shoes</h4>
            <div className="rating">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="far fa-star"></i>
            </div>
            <p>$50.00</p>
          </div>
          <div className="col-4">
            <img src="/images/product-4.jpg" alt="product-1" />
            <h4>Fantastic Rubber Shoes</h4>
            <div className="rating">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="far fa-star"></i>
            </div>
            <p>$50.00</p>
          </div>
        </div>

        <h2 className="title">Latest Products</h2>
        <div className="row">
          <div className="col-4">
            <img src="/images/product-5.jpg" alt="product-1" />
            <h4>Fantastic Rubber Shoes</h4>
            <div className="rating">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="far fa-star"></i>
            </div>
            <p>$50.00</p>
          </div>
          <div className="col-4">
            <img src="/images/product-6.jpg" alt="product-1" />
            <h4>Fantastic Rubber Shoes</h4>
            <div className="rating">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="far fa-star"></i>
            </div>
            <p>$50.00</p>
          </div>
          <div className="col-4">
            <img src="/images/product-7.jpg" alt="product-1" />
            <h4>Fantastic Rubber Shoes</h4>
            <div className="rating">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="far fa-star"></i>
            </div>
            <p>$50.00</p>
          </div>
          <div className="col-4">
            <img src="/images/product-8.jpg" alt="product-1" />
            <h4>Fantastic Rubber Shoes</h4>
            <div className="rating">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="far fa-star"></i>
            </div>
            <p>$50.00</p>
          </div>
          <div className="col-4">
            <img src="/images/product-9.jpg" alt="product-1" />
            <h4>Fantastic Rubber Shoes</h4>
            <div className="rating">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="far fa-star"></i>
            </div>
            <p>$50.00</p>
          </div>
          <div className="col-4">
            <img src="/images/product-10.jpg" alt="product-1" />
            <h4>Fantastic Rubber Shoes</h4>
            <div className="rating">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="far fa-star"></i>
            </div>
            <p>$50.00</p>
          </div>
          <div className="col-4">
            <img src="/images/product-11.jpg" alt="product-1" />
            <h4>Fantastic Rubber Shoes</h4>
            <div className="rating">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="far fa-star"></i>
            </div>
            <p>$50.00</p>
          </div>
          <div className="col-4">
            <img src="/images/product-12.jpg" alt="product-1" />
            <h4>Fantastic Rubber Shoes</h4>
            <div className="rating">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="far fa-star"></i>
            </div>
            <p>$50.00</p>
          </div>
        </div>
      </div>

      {/* <!-- Offer --> */}
      <div className="offer">
        <div className="small-container">
          <div className="row">
            <div className="col-2">
              <img
                src="/images/exclusive.png"
                alt="exclusive"
                className="offer-image"
              />
            </div>
            <div className="col-2">
              <p>Exclusive Available on RedStore</p>
              <h1>Smart Band 4</h1>
              <small>
                In nostrud Lorem minim ut anim culpa aliqua pariatur occaecat
                culpa non aute laboris ea. Cupidatat enim nisi nostrud occaecat.
                Esse anim sunt sint labore ex minim mollit incididunt fugiat
              </small>
              <a href="#" className="btn">Buy Now &#8594;</a>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- testimonial--> */}
      <div className="testimonial">
        <div className="small-container">
          <div className="row">
            <div className="col-3">
              <i className="fas fa-quote-left"></i>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Praesentium, illo molestias distinctio, nemo minima sint id cum
                ipsa temporibus dolor tempora impedit dignissimos voluptates
                dolore aliquid, repellat consequuntur maxime rerum.
              </p>
              <div className="rating">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
              </div>
              <img src="/images/user-1.png" alt="user-1" />
              <h3>Kamryn Mitchell DDS</h3>
            </div>
            <div className="col-3">
              <i className="fas fa-quote-left"></i>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Praesentium, illo molestias distinctio, nemo minima sint id cum
                ipsa temporibus dolor tempora impedit dignissimos voluptates
                dolore aliquid, repellat consequuntur maxime rerum.
              </p>
              <div className="rating">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
              </div>
              <img src="/images/user-2.png" alt="user-1" />
              <h3>Coy Morissette</h3>
            </div>
            <div className="col-3">
              <i className="fas fa-quote-left"></i>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Praesentium, illo molestias distinctio, nemo minima sint id cum
                ipsa temporibus dolor tempora impedit dignissimos voluptates
                dolore aliquid, repellat consequuntur maxime rerum.
              </p>
              <div className="rating">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
              </div>
              <img src="/images/user-3.png" alt="user-1" />
              <h3>Ambrose Turner</h3>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Brands --> */}
      <div className="brands">
        <div className="small-container">
          <div className="row">
            <div className="col-5">
              <img
                src="/images/logo-coca-cola.png"
                alt="logo-coca-cola"
              />
            </div>
            <div className="col-5">
              <img src="/images/logo-godrej.png" alt="logo-coca-cola" />
            </div>
            <div className="col-5">
              <img src="/images/logo-oppo.png" alt="logo-coca-cola" />
            </div>
            <div className="col-5">
              <img src="/images/logo-paypal.png" alt="logo-coca-cola" />
            </div>
            <div className="col-5">
              <img src="/images/logo-philips.png" alt="logo-coca-cola" />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default HomeScreen
