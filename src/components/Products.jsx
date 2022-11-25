import { useQuery } from '@tanstack/react-query'
import { Card, Dropdown } from 'flowbite-react'
import { ListBulletIcon } from '@heroicons/react/24/solid'
import { getProducts } from '../services/api'

const Products = () => {
  const { isLoading, error, data } = useQuery({ queryKey: ['products'], queryFn: getProducts})

  if (isLoading) return 'Loading...'
  if (error) return 'An error has occurred: ' + error.message
  return (
    <>
        <div className="container mt-10 mb-20">
            <div className='flex justify-between items-center'>
                <h1 className='text-md mt-10 mb-10 flex items-center gap-2 text-gray-600'><ListBulletIcon className='w-5'/> <span>Products</span></h1>
                <Dropdown
                    label="Show: 4"
                    inline={true}
                >
                    <Dropdown.Item>
                        4
                    </Dropdown.Item>
                </Dropdown>
            </div>
            
            <div className='grid grid-cols-4 gap-4'>
                {
                    data.products?.map(({images, title, brand}) => (
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