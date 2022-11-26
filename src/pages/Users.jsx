import 'react-base-table/styles.css'
import { ListBulletIcon } from '@heroicons/react/24/solid'
import { useQuery } from '@tanstack/react-query'
import { Pagination } from 'flowbite-react'
import { useMemo } from 'react'
import BaseTable, { Column, AutoResizer } from 'react-base-table'
import Skeleton from '../components/Skeleton'
import { usePagination } from '../hooks/usePagination'
import { getUsers } from '../services/api'
import ErrorPage from './ErrorPage'

const Users = () => {
  /*--- Hooks, helpers, variables, etc ---*/
  const { maxItems, currentPage, onPageChange } = usePagination({initialPage: 1, initialMaxPage: 10})
  const skip = useMemo(() => maxItems * (currentPage - 1), [currentPage, maxItems])
  const { isLoading, error, data } = useQuery({ queryKey: ['products', maxItems, skip], queryFn: () => getUsers(maxItems, skip)})
  const columns = useMemo(() => [
    {key: 'firstName', label: 'First Name'},
    {key: 'lastName', label: 'Last Name'},
    {key: 'age', label: 'Age'},
    {key: 'username', label: 'Username'},
    {key: 'ip', label: 'Ip'},
  ], [])

  if (error) return <ErrorPage error={error}/>
  return (
    <div className="container mt-10 mb-20">
        <div className='flex justify-between items-center mb-6 mt-6'>
            <h1 className='text-md flex items-center gap-2 text-gray-600'><ListBulletIcon className='w-5'/> <span>Users</span></h1>
        </div>
        <div className='flex justify-center'>
            <div className='w-[780px] max-lg:w-full h-[400px]'>
            {isLoading ? <Skeleton height='400px'/> :
                <AutoResizer>
                    {({ width, height }) => (
                        <BaseTable data={data?.users} width={width} maxHeight={height} fixed>
                            {columns.map(({key, label}) => <Column key={key} dataKey={key} title={label} width={150} />)}
                        </BaseTable>
                    )}
                </AutoResizer>
            }
            </div>
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
  )
}

export default Users