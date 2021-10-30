import axios from 'axios'
import React, { ChangeEvent, Fragment, useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Products, { IProduct } from '../components/Products'
import { IProductListState, State } from '../state'
import { listProducts } from '../state/actions'

const MIN_SIZE_PRODUCT = 1
const MAX_SIZE_PRODUCT = 8

export const AllProducts: React.FC = () => {
    const state = useSelector((state: State) => state.productList)
    const dispatch = useDispatch()
    const { products = [], isLoading, error } = state as IProductListState
    const [arrProduct, setArrProduct] = useState<IProduct[]>(products)
    const [numPage, setNumPage] = useState<number>(0)
    const [page, setPage] = useState(0)
    const valueRef = useRef(0)

    useEffect(() => {
        dispatch(listProducts(MIN_SIZE_PRODUCT, MAX_SIZE_PRODUCT))
    }, [dispatch])

    useEffect(() => {
        const getLengthProduct = async () => {
            const { data } = await axios.get('/api/products/length')
            setNumPage(Math.ceil(data / MAX_SIZE_PRODUCT))
        }
        getLengthProduct()
    }, [])

    useEffect(() => {
        setArrProduct(products)
    }, [products])

    const onChangePage = (i: number) => {
        if (page !== i) {
            setPage(i)
            dispatch(listProducts(i+1, MAX_SIZE_PRODUCT))
        }
    }

    const sortProduct = (valueSelect: number) => {
        const productTemp = [...products]
        switch (valueSelect) {
            case 0:
                return productTemp
            case 1:
                return productTemp.sort((a, b) => b.price - a.price);
            case 2:
                return productTemp.sort((a, b) => b.numReviewer - a.numReviewer);
            case 3:
                return productTemp.sort((a, b) => b.rating - a.rating);
        }
    }

    const onChangeSelect = (e: ChangeEvent<HTMLSelectElement>) => {
        if (valueRef.current !== +e.target.value) {
            const productUpdated = sortProduct(+e.target.value)
            if (productUpdated) {
                setArrProduct(productUpdated)
            } else {
                alert('Error onChangeSelect')
            }
            valueRef.current = +e.target.value
        }
    }

    return (
        <Fragment>
            <div className="small-container">
                <div className="row row-2">
                    <h2>All Products</h2>
                    <select onChange={onChangeSelect}>
                        <option value="0">Default sorting</option>
                        <option value="1">Sort by price</option>
                        <option value="2">Sort by popularity</option>
                        <option value="3">Sort by rating</option>
                    </select>
                </div>
                <div className="row">
                    {
                        arrProduct.map(product => (
                            <Products product={product} key={product._id} />
                        ))
                    }
                </div>
                <div className="page-btn">
                    {
                        [...Array(numPage).keys()].map(i => (
                            <span className={page === i ? 'active' : ''} key={i} onClick={() => onChangePage(i)}>{i + 1}</span>
                        ))
                    }
                    {/* <span>1</span><span>2</span><span>3</span><span>4</span
                    ><span>&#8594;</span> */}
                </div>
            </div>
        </Fragment>
    );
}