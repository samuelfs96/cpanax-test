import { Sidebar } from "flowbite-react";
import { DocumentTextIcon, CodeBracketIcon, CodeBracketSquareIcon, ArrowTrendingDownIcon, ArchiveBoxIcon } from '@heroicons/react/24/solid'
import { colors } from "../../utils/nodeColors";

const SidebarFlow = ({
  onResetConnections,
  onResetNodes
}) => {
    const onDragStart = (event, type) => {
      event.dataTransfer.setData('application/reactflow', type);
      event.dataTransfer.effectAllowed = 'move';
    };
    return (
      <div className="w-fit">
        <Sidebar aria-label="Default sidebar" className="max-md:w-[80px]">
          <Sidebar.Items>
            <Sidebar.ItemGroup>
              <Sidebar.Item
                className={`prevent-select cursor-move ${colors['page']} hover:bg-slate-500 transition-all max-md:w-full`}
                onDragStart={(event) => onDragStart(event, 'page')}
                draggable
              >
                <div className="flex gap-2 text-white">
                  <DocumentTextIcon className="w-7"/>
                  <span className="font-bold text-lg max-md:hidden">Page</span>
                </div>
              </Sidebar.Item>
              <Sidebar.Item
                className={`prevent-select cursor-move ${colors['element']} hover:bg-slate-500 transition-all max-md:w-full`}
                onDragStart={(event) => onDragStart(event, 'element')}
                draggable
              >
                <div className="flex gap-2 text-white">
                  <CodeBracketSquareIcon className="w-7"/>
                  <span className="font-bold text-lg max-md:hidden">Element</span>
                </div>
              </Sidebar.Item>
              <Sidebar.Item
                className={`prevent-select cursor-move ${colors['element-item']} hover:bg-slate-500 transition-all max-md:w-full`}
                onDragStart={(event) => onDragStart(event, 'element-item')}
                draggable
              >
                <div className="flex gap-2 text-white">
                  <CodeBracketIcon className="w-7"/>
                  <span className="font-bold text-lg max-md:hidden">Element Item</span>
                </div>
              </Sidebar.Item>
              <Sidebar.Item
                className={`prevent-select cursor-pointer bg-slate-400 hover:bg-slate-500 transition-all max-md:w-full`}
                onClick={() => onResetConnections()}
              >
                <div className="flex gap-2 text-white">
                  <ArrowTrendingDownIcon className="w-7"/>
                  <span className="font-bold text-lg max-md:hidden">Reset Connections</span>
                </div>
              </Sidebar.Item>
              <Sidebar.Item
                className={`prevent-select cursor-pointer bg-slate-400 hover:bg-slate-500 transition-all max-md:w-full`}
                onClick={() => onResetNodes()}
              >
                <div className="flex gap-2 text-white">
                  <ArchiveBoxIcon className="w-7"/>
                  <span className="font-bold text-lg max-md:hidden">Reset Nodes</span>
                </div>
              </Sidebar.Item>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>
      </div>
    );
};

export default SidebarFlow