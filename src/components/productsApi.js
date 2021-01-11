import { useEffect, useState } from 'react'
//import axios from 'axios'

export default function useProductSearch(query, pageNumber) {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [products, setProducts] = useState([])
  const [hasMore, setHasMore] = useState(false)


const productsMocks = [
	{productName:"dudliq"},{productName:"dudlsdiq"},{productName:"dudlsfiq"},{productName:"dudlsiq"}	
	];
		

const productsMocksa = [
	{productName:"dudliqa"},{productName:"dudlsdiqa"},{productName:"dudlsfiqaaa"},{productName:"dudlsiqa"},
	{productName:"dudliqa"},{productName:"dudlsdiqa"},{productName:"dudlsfiqa"},{productName:"dudlsiqa"}	
	];
		

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/* ecevute if query dependency is change and page is still equal */
  useEffect(() => {
		if (pageNumber == 0) return

		
    setProducts([])
		
	sleep(600).then(() => { 
		//setProducts([])
			
		setLoading(true)
   		setError(false)

		setProducts([...productsMocks])

				setHasMore(true)
				setLoading(false)
		});	


  }, [query])


	
	




  useEffect(() => {
    setLoading(true)
    setError(false)


	sleep((pageNumber == 0) ? 0 : 600).then(() => { 
	

		if((pageNumber == 0) ) { 
					setProducts([...productsMocksa])
		} else {
				if (pageNumber == 1 && (query)) return
			setProducts(prevProducts => { 
						  	return [...prevProducts, ...productsMocks]
			})
		}

		setHasMore(true)
		setLoading(false)
	});
	

		
  }, [pageNumber])









  return { products, hasMore, loading, error }
}
