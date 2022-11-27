import { ListBulletIcon } from '@heroicons/react/24/solid'
import ReactFlow, {
  Controls,
  Background
} from 'reactflow';
import 'reactflow/dist/style.css';
import Sidebar from '../components/Flow/Sidebar';
import CustomNode from '../components/Flow/CustomNode';
import { useFlow } from '../hooks/useFlow'
import dataFlow from '../dataFlow.json'

const nodeTypes = {
  'page': CustomNode,
  'element': CustomNode,
  'element-item': CustomNode
};

const Flow = () => {
  const {
    edges,
    nodes,
    onConnect,
    onDragOver,
    onDrop,
    onEdgesChange,
    onNodesChange,
    setReactFlowInstance,
    reactFlowWrapper
  } = useFlow({initialData: dataFlow})

  return (
    <div className="container mt-10 mb-20">
        <div className='flex justify-between items-center mb-6 mt-6'>
            <h1 className='text-md flex items-center gap-2 text-gray-600'><ListBulletIcon className='w-5'/> <span>Flow</span></h1>
        </div>
        <div className='flex justify-center w-full h-[500px]' ref={reactFlowWrapper}>
          <ReactFlow
            nodeTypes={nodeTypes}
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            onInit={setReactFlowInstance}
            onDrop={onDrop}
            onDragOver={onDragOver}
            fitView
          >
            <Controls />
            <Background/>
          </ReactFlow>
          <Sidebar/>
        </div>
    </div>
  )
}

export default Flow