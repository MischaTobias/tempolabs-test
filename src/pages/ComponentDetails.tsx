import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const ComponentDetails = () => {
  const { id } = useParams();
  const component = useSelector((state: any) =>
    state.components.componentList.find((comp: any) => comp.id === Number(id))
  );

  if (!component) {
    return <p>Component not found!</p>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">{component.name}</h1>
      <p>{component.description}</p>
    </div>
  );
};
