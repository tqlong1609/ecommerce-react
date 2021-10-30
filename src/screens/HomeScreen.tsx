import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { IProduct } from '../components/Products';
import Rating from '../components/Rating';
import { State } from '../state';
import { getDecLatestProducts, getDecProducts } from '../state/actions/productList';
export interface IError {
  message: string
}

export const MAX_PRODUCT_FEATURED = 4
const MAX_PRODUCT_LATEST = 8

const HomeScreen: React.FC = () => {
  const dispatch = useDispatch()
  const { products: productFeatured } = useSelector((state: State) => state.productListFeature)
  const { products: productLatest } = useSelector((state: State) => state.productListLatest)

  // console.log('products',products);
  const onShowAlert = () => {
    alert('Sorry! This function is not completed yet')
  }

  useEffect(() => {
    dispatch(getDecProducts)
    dispatch(getDecLatestProducts)
  }, [])
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
              <a className="btn" onClick={onShowAlert}>Explore Now &#8594;</a>
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
          {
            productFeatured && productFeatured?.length >= MAX_PRODUCT_FEATURED && productFeatured?.slice(0, MAX_PRODUCT_FEATURED)?.map(product => (
              <Link to={`/product/${product._id}`} key={product._id} className="col-4">
                <img src={product.image} alt={'product_' + product._id} />
                <h4>{product.name}</h4>
                <Rating rating={product.rating} />
                <p>${product.price}</p>
              </Link>
            ))
          }
        </div>

        {/* Latest Product */}
        <h2 className="title">Latest Products</h2>
        <div className="row">
          {
            productLatest && productLatest?.length >= MAX_PRODUCT_LATEST && productLatest?.slice(0, MAX_PRODUCT_LATEST)?.map(product => (
              <Link to={`/product/${product._id}`} key={product._id} className="col-4">
                <img src={product.image} alt={'product_' + product._id} />
                <h4>{product.name}</h4>
                <Rating rating={product.rating} />
                <p>${product.price}</p>
              </Link>
            ))
          }
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
              <a onClick={onShowAlert} className="btn">Buy Now &#8594;</a>
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
