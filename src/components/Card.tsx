import { Link } from 'react-router-dom';

interface CardProps {
  id: number;
  name: string;
  description: string;
}

export const Card = ({ id, name, description }: CardProps) => {
    return (
        <div className="p-4 border rounded shadow">
          <h3 className="font-bold">{name}</h3>
          <p>{description}</p>
          <Link to={`/component/${id}`} className="text-blue-500">
            View Details
          </Link>
        </div>
      );
}