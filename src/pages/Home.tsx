import { useSelector } from 'react-redux';
import { DraggableGrid } from '../components';
import { DraggableItemProps } from '../types';

export const Home = () => {
  const components: DraggableItemProps[] = useSelector((state: any) => state.components.componentList);

    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Component Library</h1>
        <DraggableGrid components={components} />
      </div>
    );
  
};
