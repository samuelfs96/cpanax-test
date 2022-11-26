import { useQuery } from '@tanstack/react-query'
import { Card, Pagination } from 'flowbite-react'
import { ListBulletIcon } from '@heroicons/react/24/solid'
import { getProducts } from '../services/api'
import { useMemo } from 'react'
import { useModal } from '../hooks/useModal'
import { usePagination } from '../hooks/usePagination'
import SwitchMaxItems from '../components/SwitchMaxItems'
import Skeleton from '../components/Skeleton'
import ProductDetail from '../components/ProductDetail'
import ErrorPage from './ErrorPage'

const Products = () => {
  /*--- Hooks, helpers, variables, etc ---*/
  const { maxItems, currentPage, onChangeMaxItems, onPageChange } = usePagination({initialPage: 1, initialMaxPage: 4})
  const skip = useMemo(() => maxItems * (currentPage - 1), [currentPage, maxItems])
  const { isLoading, error, data } = useQuery({ queryKey: ['products', maxItems, skip], queryFn: () => getProducts(maxItems, skip)})
  const { openModal, handleOpenModal, handleCloseModal, dataModal } = useModal(data?.products)
  
  if (error) return <ErrorPage error={error}/>
  return (
    <>
        <ProductDetail show={openModal} product={dataModal} onClose={handleCloseModal}/>
        <div className="container mt-10 mb-20">
            <div className='flex justify-between items-center mb-6 mt-6'>
                <h1 className='text-md flex items-center gap-2 text-gray-600'><ListBulletIcon className='w-5'/> <span>Products</span></h1>
                {isLoading ? <Skeleton width='90px' height='40px'/> : <SwitchMaxItems total={data?.total} maxItems={maxItems} handleMaxItems={onChangeMaxItems}/>}
            </div>
            <div className='grid grid-cols-4 gap-6 max-xl:grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1'>
                {isLoading ?
                    <> 
                        <Skeleton height='400px'/><Skeleton height='400px'/><Skeleton height='400px'/><Skeleton height='400px'/> 
                    </>
                    : data?.products?.map(({id, images, title, brand}) => (
                        <Card key={title} className="custom-box hover:cursor-pointer h-[400px]" onClick={() => handleOpenModal(id)}>
                            <div className='h-1/2 flex justify-center items-center'>
                                <img src={images[0]} alt={title} className="h-1/2" />
                            </div>
                            <div className='gap-2 h-1/2 flex flex-col items-center text-center'>
                                <span className='text-xl'>{title}</span>
                                <span className='border border-gray-300 bg-slate-50 pt-1 pb-1 pr-2 pl-2 rounded-md text-xs lowercase'>{brand}</span>
                            </div>
                        </Card>))
                }
            </div>
            <div className='custom-pagination'>
                <hr className='mt-8 mb-8'/>
                <div className='flex justify-center'>
                    {isLoading ? <div className='w-[400px] max-lg:w-full'><Skeleton height='38px'/></div> : 
                        <Pagination
                            className='text-center'
                            currentPage={currentPage}
                            onPageChange={onPageChange}
                            showIcons={true}
                            totalPages={Math.ceil(data?.total / maxItems)}
                        />
                    }
                </div>
            </div>
        </div>
    </>
  )
}

export default Products