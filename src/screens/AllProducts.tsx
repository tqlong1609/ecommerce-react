import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Products from '../components/Products'
import { IProductListState, State } from '../state'
import { listProducts } from '../state/actions'

export const AllProducts: React.FC = () => {
    const state = useSelector((state: State) => state.productList)
    const dispatch = useDispatch()
    const { products = [], isLoading, error } = state as IProductListState
    useEffect(() => {
        dispatch(listProducts)

    }, [dispatch])
    return (
        <Fragment>
            <div className="small-container">
                <div className="row row-2">
                    <h2>All Products</h2>
                    <select>
                        <option>Default sorting</option>
                        <option>Sort by price</option>
                        <option>Sort by popularity</option>
                        <option>Sort by rating</option>
                        <option>Sort by sale</option>
                    </select>
                </div>
                <div className="row">
                    {
                        products.map(product => (
                            <Products product={product} key={product._id} />
                        ))
                    }
                </div>
                <div className="page-btn">
                    <span>1</span><span>2</span><span>3</span><span>4</span
                    ><span>&#8594;</span>
                </div>
            </div>
        </Fragment>
    );
}