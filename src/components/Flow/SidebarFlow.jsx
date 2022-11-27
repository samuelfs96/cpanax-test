import { Sidebar } from "flowbite-react";
import { DocumentTextIcon, CodeBracketIcon, CodeBracketSquareIcon } from '@heroicons/react/24/solid'
import { colors } from "../../utils/nodeColors";

const SidebarFlow = () => {
    const onDragStart = (event, type) => {
      event.dataTransfer.setData('application/reactflow', type);
      event.dataTransfer.effectAllowed = 'move';
    };
    return (
      <div className="w-fit">
        <Sidebar aria-label="Default sidebar">
          <Sidebar.Items>
            <Sidebar.ItemGroup className="p-2">
              <Sidebar.Item
                className={`prevent-select cursor-move ${colors['page']} hover:bg-slate-500 transition-all`}
                onDragStart={(event) => onDragStart(event, 'page')}
                draggable
              >
                <div className="flex gap-2 text-white">
                  <DocumentTextIcon className="w-7"/>
                  <span className="font-bold text-lg">Page</span>
                </div>
              </Sidebar.Item>
              <Sidebar.Item
                className={`prevent-select cursor-move ${colors['element']} hover:bg-slate-500 transition-all`}
                onDragStart={(event) => onDragStart(event, 'element')}
                draggable
              >
                <div className="flex gap-2 text-white">
                  <CodeBracketSquareIcon className="w-7"/>
                  <span className="font-bold text-lg">Element</span>
                </div>
              </Sidebar.Item>
              <Sidebar.Item
                className={`prevent-select cursor-move ${colors['element-item']} hover:bg-slate-500 transition-all`}
                onDragStart={(event) => onDragStart(event, 'element-item')}
                draggable
              >
                <div className="flex gap-2 text-white">
                  <CodeBracketIcon className="w-7"/>
                  <span className="font-bold text-lg">Element Item</span>
                </div>
              </Sidebar.Item>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>
      </div>
    );
};

export default SidebarFlow