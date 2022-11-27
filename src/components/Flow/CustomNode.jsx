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
      <Handle
        id="b"
        type="source"
        position="bottom"
        style={{ background: '#555' }}
        isConnectable={isConnectable}
      />
        {data.type && (
          <div className='border-gray-300 border-[1px] rounded-xl overflow-hidden w-[250px]'>
              <div className={`${colors[data.type]} p-2`}>
                <input type="text" className='font-bold text-xl text-white bg-transparent border-none w-full p-0' 
                  defaultValue={data.title}
                  onChange={(ev) => data.onChangeTitle(ev, data.id)}
                  placeholder="Write here..."/>
              </div>
              <div className='p-2 bg-white'>
                <textarea name="textarea" rows="2" className='text-gray-500 text-sm bg-transparent border-none w-full p-0'
                  defaultValue={data.subTitle}
                  placeholder='Write something here...'
                  onChange={(ev) => data.onChangeSubtitle(ev, data.id)}
                  ></textarea>
              </div>
          </div>
        )}
      <Handle
        id="c"
        type="target"
        position="right"
        style={{ background: '#555' }}
        isConnectable={isConnectable}
      />  
      <Handle
        id="d"
        type="source"
        position="left"
        style={{ background: '#555' }}
        isConnectable={isConnectable}
      />
    </>
  );
});

export default CustomNode