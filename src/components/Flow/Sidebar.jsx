import { useState } from "react";
import dataFlow from '../../dataFlow.json'

const Sidebar = () => {
    const [node, setNode] = useState(dataFlow)
    const handleCreateNode = () => {
        const newNode = {
            "id": "about",
            "title": "Acerca de",
            "subTitle": "Info de la Pagina",
            "type": "page"
        }
        setNode([...node,newNode])
    }
    const onDragStart = (event, data) => {
      event.dataTransfer.setData('application/reactflow', JSON.stringify(data));
      event.dataTransfer.effectAllowed = 'move';
    };
  
    return (
      <aside>
        {node.map((data, key) => (
            <div key={key} onDragStart={(event) => onDragStart(event, data)} draggable>
                {data.title}
            </div>
        ))}
        <button onClick={() => handleCreateNode()}>
            + New Flow
        </button>
      </aside>
    );
};

export default Sidebar