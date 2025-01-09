import { useState } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { DraggableItemProps } from '../types';

export const DraggableItem = ({ id, name }: DraggableItemProps) => {
  const [, dragRef] = useDrag(() => ({
    type: 'COMPONENT',
    item: { id, name },
  }));

  return (
    <div ref={dragRef} className="p-4 border rounded bg-gray-200">
      {name}
    </div>
  );
};

export const Component = ({ type }: { type: string }) => {
  const [{ isDragging }, dragRef] = useDrag(() => ({
    type: 'COMPONENT',
    item: { type },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={dragRef}
      className={`p-2 border rounded cursor-pointer ${
        isDragging ? 'opacity-50' : ''
      }`}
    >
      {type}
    </div>
  );
};

export const DraggableGrid = ({ components }: { components: DraggableItemProps[] }) => {
  return (
    <div className="grid grid-cols-3 gap-4 min-h-screen p-4">
      <div>
        <h2 className="text-xl font-bold mb-2">Available Components</h2>
        <div className="grid gap-4">
          {components.map((comp) => (
            <DraggableItem key={comp.id} id={comp.id} name={comp.name} />
          ))}
        </div>
      </div>
      <div className="col-span-2" style={{ flexGrow: 1, height: 100 }}>
        <Workspace />
      </div>
    </div>
  );
};

export const Workspace = () => {
  const [droppedComponents, setDroppedComponents] = useState<
    { id: string; name: string }[]
  >([]);

  const [{ isOver }, dropRef] = useDrop(() => ({
    accept: 'COMPONENT',
    drop: (item: { id: string; name: string }) => {
      setDroppedComponents((prev) => [...prev, item]);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  return (
    <div
      ref={dropRef}
      className={`min-h-[300px] bg-white border-2 border-dashed p-4 flex flex-wrap gap-4 justify-start items-start ${
        isOver ? 'bg-green-100' : ''
      }`}
      style={{ width: '100%', flexGrow: 1, height: '100%' }}
    >
      {droppedComponents.map((component, index) => {
        switch (component.name) {
          case 'Button':
            return (
              <button
                key={index}
                className="px-4 py-2 bg-blue-500 text-white rounded"
              >
                Click Me
              </button>
            );
          case 'Card':
            return (
              <div
                key={index}
                className="w-48 h-32 bg-gray-200 border rounded p-4 shadow"
              >
                Sample Card
              </div>
            );
          case 'Input':
            return (
              <input
                key={index}
                type="text"
                className="border p-2 rounded"
                placeholder="Type here"
              />
            );
          default:
            return null;
        }
      })}
    </div>
  );
};
