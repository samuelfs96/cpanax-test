import { memo } from 'react';
import { Handle } from 'reactflow';
import { colors } from '../../utils/nodeColors';

const CustomNode = memo(({ data, isConnectable }) => {
  return (
    <>
      <Handle
        id="a"
        type="target"
        position="top"
        style={{ background: '#555' }}
        isConnectable={isConnectable}
      />
        {data.type && (
          <div className='border-gray-300 border-[1px] rounded-xl overflow-hidden w-[250px]'>
              <div className={`${colors[data.type]} p-2`}>
                <h1 className='font-bold text-center text-xl text-white'>{data.title}</h1>
              </div>
              <div className='p-2 bg-white'>
                <p className='text-gray-500 text-sm  text-center'>{data.subTitle}</p>
              </div>
          </div>
        )}
      <Handle
        id="b"
        type="source"
        position="bottom"
        style={{ background: '#555' }}
        isConnectable={isConnectable}
      />
    </>
  );
});

export default CustomNode