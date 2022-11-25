import { useQuery } from '@tanstack/react-query'
import { Card } from 'flowbite-react'
import { ListBulletIcon } from '@heroicons/react/24/solid'
import { getProducts } from '../services/api'
import { useState } from 'react'
import SwitchMaxItems from './SwitchMaxItems'
import Skeleton from './Skeleton'

const Products = () => {
  const [maxItems, setMaxItems] = useState(4)
  const { isLoading, error, data } = useQuery({ queryKey: ['products', maxItems], queryFn: () => getProducts(maxItems)})

  const handleMaxItems = (item) => {
    setMaxItems(item)
  }
  if (error) return 'An error has occurred: ' + error.message
  return (
    <>
        <div className="container mt-10 mb-20">
            <div className='flex justify-between items-center'>
                <h1 className='text-md mt-10 mb-10 flex items-center gap-2 text-gray-600'><ListBulletIcon className='w-5'/> <span>Products</span></h1>
                <SwitchMaxItems
                    total={data?.total}
                    maxItems={maxItems}
                    handleMaxItems={handleMaxItems}
                />
            </div>
            
            <div className='grid grid-cols-4 gap-4 max-xl:grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1'>
                {
                    !isLoading ?
                    <>
                        <Skeleton height='400px'/>
                        <Skeleton height='400px'/>
                        <Skeleton height='400px'/>
                        <Skeleton height='400px'/>
                    </>
                    :
                    data?.products.map(({images, title, brand}) => (
                        <Card key={title} className="hover:cursor-pointer">
                            <img src={images[0]} alt={title} className="w-40" />
                            <h2>{title}</h2>
                            <h4>{brand}</h4>
                        </Card>
                    ))
                }
            </div>
        </div>
    </>
  )
}

export default Products