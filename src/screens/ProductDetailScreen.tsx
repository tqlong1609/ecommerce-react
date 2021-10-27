import React, { Fragment, useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RouteComponentProps } from 'react-router'
import AlertBox from '../components/AlertBox'
import LoadingBox from '../components/LoadingBox'
import { State } from '../state'
import { productDetail } from '../state/actions'
import { addCartItem } from '../state/actions/cartItems'

interface IProductDetailScreenProps {
    id: string
}

const sizes: string[] = [
    'Select Size',
    'XXL',
    'XL',
    'Large',
    'Normal',
    'Small'
]

const ProductDetailScreen: React.FC<RouteComponentProps<IProductDetailScreenProps>> = (props) => {

    const dispatch = useDispatch()
    const id = props.match.params.id
    const { isLoading, error, product } = useSelector((state: State) => state.productDetail)
    const [valueQty, setValueQty] = useState<number>(1)
    const [size, setSize] = useState<string>('Select Size')
    useEffect(() => {
        dispatch(productDetail(id))
    }, [dispatch, id])

    const productImg = useRef<HTMLImageElement>(null)
    const smallImg1 = useRef<HTMLImageElement>(null)
    const smallImg2 = useRef<HTMLImageElement>(null)
    const smallImg3 = useRef<HTMLImageElement>(null)
    const smallImg4 = useRef<HTMLImageElement>(null)

    const onClickSmallImg1 = () => {
        productImg.current!.src = smallImg1.current!.src
    }

    const onClickSmallImg2 = () => {
        productImg.current!.src = smallImg2.current!.src
    }

    const onClickSmallImg3 = () => {
        productImg.current!.src = smallImg3.current!.src
    }

    const onClickSmallImg4 = () => {
        productImg.current!.src = smallImg4.current!.src
    }

    const changeQty = (value: React.ChangeEvent<HTMLInputElement>) => {
        setValueQty(+value.target.value)
    }

    const onClickAddToCart = () => {
        if(size !== sizes[0]) {
            dispatch(addCartItem(id, valueQty, size))
            props.history.push(`/cart/${id}?qty=${valueQty}`)
        } else {
            alert('Select Size ??')
        }
    }

    if (isLoading) {
        return (
            <LoadingBox />
        )
    }

    if (error) {
        return (
            <AlertBox variant="danger">{error}</AlertBox>
        )
    }

    return (
        <Fragment>
            {/* <!-- Detail Product --> */}
            <div className="small-container single-product">
                <div className="row">
                    <div className="col-2">
                        <img
                            src={product?.smallImages?.[0] ?? product?.image}
                            id="ProductImg"
                            ref={productImg}
                        />
                        {
                            product?.smallImages && product?.smallImages?.length > 0 && (
                                <div className="img-row">
                                    <div className="img-col">
                                        <img
                                            src={product?.smallImages[0]}
                                            className="small-image"
                                            ref={smallImg1}
                                            onClick={onClickSmallImg1}
                                        />
                                    </div>
                                    <div className="img-col">
                                        <img
                                            src={product?.smallImages[1]}
                                            alt="gallery-2"
                                            className="small-image"
                                            ref={smallImg2}
                                            onClick={onClickSmallImg2}
                                        />
                                    </div>
                                    <div className="img-col">
                                        <img
                                            src={product?.smallImages[2]}
                                            alt="gallery-3"
                                            className="small-image"
                                            ref={smallImg3}
                                            onClick={onClickSmallImg3}
                                        />
                                    </div>
                                    <div className="img-col">
                                        <img
                                            src={product?.smallImages[3]}
                                            alt="gallery-4"
                                            className="small-image"
                                            ref={smallImg4}
                                            onClick={onClickSmallImg4}
                                        />
                                    </div>
                                </div>
                            )
                        }
                    </div>
                    <div className="col-2">
                        <p>Home/{product?.category}</p>
                        <h1>{product?.name}</h1>
                        <h4>${product?.price.toFixed(2)}</h4>
                        <select name="size" id="size" onChange={e => setSize(e.target.value)} value={size}>
                            {
                                sizes.map(size => (
                                    <option key={size}>{size}</option>
                                ))
                            }
                        </select>
                        <input type="number" min="1" value={valueQty} onChange={changeQty} />
                        <a href="#" className="btn" onClick={onClickAddToCart}>Add To Cart</a>
                        <h3>
                            Product Details
                            <li className="fa fa-indent"></li>
                        </h3>
                        <br />
                        <p>
                            {product?.description}
                        </p>
                    </div>
                </div>
            </div>

            <div className="small-container">
                <div className="row row-2">
                    <h2>Related Products</h2>
                    <p>View More</p>
                </div>
            </div>

            {/* <!-- Relative products --> */}
            <div className="small-container">
                <div className="row">
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
        </Fragment>
    );
}

export default ProductDetailScreen