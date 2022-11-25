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
                {
                    isLoading ?
                        <Skeleton width='90px' height='40px'/>
                    :
                    <SwitchMaxItems
                        total={data?.total}
                        maxItems={maxItems}
                        handleMaxItems={handleMaxItems}
                    />
                }
            </div>
            <div className='grid grid-cols-4 gap-6 max-xl:grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1'>
                {
                    isLoading ?
                    <>
                        <Skeleton height='400px'/>
                        <Skeleton height='400px'/>
                        <Skeleton height='400px'/>
                        <Skeleton height='400px'/>
                    </>
                    :
                    data?.products.map(({images, title, brand}) => (
                        <Card key={title} className="custom-box hover:cursor-pointer h-[400px]">
                            <div className='h-1/2 flex justify-center items-center'>
                                <img src={images[0]} alt={title} className="h-1/2" />
                            </div>
                            <div className='gap-2 h-1/2 flex flex-col items-center text-center'>
                                <span className='text-xl'>{title}</span>
                                <span className='border border-gray-300 bg-slate-50 pt-1 pb-1 pr-2 pl-2 rounded-md text-xs lowercase'>{brand}</span>
                            </div>
                        </Card>
                    ))
                }
            </div>
        </div>
    </>
  )
}

export default Products