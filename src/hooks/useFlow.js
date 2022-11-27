import { useCallback, useEffect, useRef, useState } from "react";
import {
    useNodesState,
    useEdgesState,
    addEdge,
} from 'reactflow';

let id = 0;
const getId = () => `dndnode_${id++}`;

export const useFlow = ({initialData}) => {
  const reactFlowWrapper = useRef(null);
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);
  const [nodeTitle, setNodeTitle] = useState('')
  const [nodeSubTitle, setNodeSubTitle] = useState('')

  const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), [setEdges]);

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);

  const onChangeTitle = useCallback((event, id) => {
    setNodes((nds) =>
      nds.map((node) => {
        if (node.id !== id) {
          return node;
        }
        const title = event.target.value;
        setNodeTitle(title);
        return {
          ...node,
          data: {
            ...node.data,
            title,
          },
        };
      })
    );
  }, [setNodes]);

  const onChangeSubtitle = useCallback((event, id) => {
    setNodes((nds) =>
      nds.map((node) => {
        if (node.id !== id) {
          return node;
        }
        const subTitle = event.target.value;
        setNodeSubTitle(subTitle);
        return {
          ...node,
          data: {
            ...node.data,
            subTitle,
          },
        };
      })
    );
  }, [setNodes]);

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();
      const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
      const type = event.dataTransfer.getData('application/reactflow');
      // check if the dropped element is valid
      if (typeof type === 'undefined' || !type) {
        return;
      }
      const id = getId();
      const position = reactFlowInstance.project({
        x: event.clientX - reactFlowBounds.left,
        y: event.clientY - reactFlowBounds.top,
      });
      const newNode = {
        id: id,
        type,
        position,
        data: {
          id: id,
          title: "",
          subTitle: "",
          type: type,
          onChangeTitle: onChangeTitle,
          onChangeSubtitle: onChangeSubtitle 
        },
      };
      setNodes((nds) => nds.concat(newNode));
    },
    [reactFlowInstance, setNodes, onChangeTitle, onChangeSubtitle]
  );

  const onResetConnections = useCallback(() => {
    setEdges([])
  }, [setEdges])

  const onResetNodes = useCallback(() => {
    setNodes([])
  }, [setNodes])

  useEffect(() => {
    const data = initialData.map((data, index) => ({
      id: data.id,
      type: data.type,
      data: {
        ...data, 
        onChangeTitle: onChangeTitle,
        onChangeSubtitle: onChangeSubtitle
      },
      position: { x: 100 * index, y: 50 * index }
    }))
    setNodes(data)
  }, [setNodes, onChangeTitle, onChangeSubtitle, initialData])

  return {
    nodes,
    edges,
    onNodesChange,
    onEdgesChange,
    setReactFlowInstance,
    onConnect,
    onDragOver,
    onDrop,
    reactFlowWrapper,
    nodeTitle,
    nodeSubTitle,
    onResetConnections,
    onResetNodes
  }
}