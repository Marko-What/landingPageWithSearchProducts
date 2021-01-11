import React, { useState, useRef, useCallback } from 'react';
import { Thumbnail } from './Thumbnail';

import productsApi from './productsApi';

import './Thumbnail.css'


export const WrapperDummyProducts = () => {

	const [query, setQuery] = useState('')
  const [pageNumber, setPageNumber] = useState(0)

	const {
    products,
    hasMore,
    loading,
    error
  } = productsApi(query, pageNumber)



	 const observer = useRef()
	const lastProductElementRef = useCallback(node => {

    if (loading) return
    if (observer.current) observer.current.disconnect()

    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        setPageNumber(prevPageNumber => prevPageNumber + 1)
      }
    })
    if (node) observer.current.observe(node)
  }, [loading, hasMore])

	
		function handleSearch(e) {
		 setPageNumber(1) 
    setQuery(e.target.value)
   
  }



    return (

        <div className="parmezan"> iskani produkti stevilo: {products.length}
        			<input type="text" value={query} onChange={handleSearch}></input>
								<div className="WrapperDummyProducts">
										{products.map((product, index) => {
								
										if (products.length === index + 1) {
											return <>
												<Thumbnail productName={product.productName} /> 
												<div ref={lastProductElementRef} className="scrollDoown"></div>
														</>	
										} else {
											return <Thumbnail productName={product.productName} />
										}
									})}
								 </div>
								<div>{loading && 'Loading...'}</div>
								<div>{error && 'Error'}</div>



        </div>
    )


}
