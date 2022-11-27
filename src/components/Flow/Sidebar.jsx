const Sidebar = () => {
    const onDragStart = (event, type) => {
      event.dataTransfer.setData('application/reactflow', type);
      event.dataTransfer.effectAllowed = 'move';
    };
    return (
      <aside>
        <div onDragStart={(event) => onDragStart(event, 'page')} draggable>
          Page
        </div>
        <div onDragStart={(event) => onDragStart(event, 'element')} draggable>
          Element
        </div>
        <div onDragStart={(event) => onDragStart(event, 'element-item')} draggable>
          Element Item
        </div>
      </aside>
    );
};

export default Sidebar