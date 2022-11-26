import BaseTable, { Column } from 'react-base-table'
import 'react-base-table/styles.css'

const Users = () => {
    const data = [
        {col0: 'adfadfad', col1: 'adfadfadf'},
        {col0: 'adfadfad', col1: 'adfadfadf'},
        {col0: 'adfadfad', col1: 'adfadfadf'},
        {col0: 'adfadfad', col1: 'adfadfadf'},
    ]
  return (
    <>
    <BaseTable data={data} width={600} height={400}>
        <Column key="col0" dataKey="col0" title='fsgsfg' width={100} />
        <Column key="col1" dataKey="col1" title='fsgsfgf' width={100} />
    </BaseTable>
    </>
  )
}

export default Users