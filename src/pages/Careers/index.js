import axios from 'axios';
import { Link, useLoaderData } from 'react-router-dom';

export default function Careers() {
  const careers = useLoaderData();

  return (
    <div className="careers">
      {careers.map((career) => (
        <Link to={career.id} key={career.id}>
          <p>{career.title}</p>
          <p>Based in {career.location}</p>
        </Link>
      ))}
    </div>
  );
}

// loader function
export const careersLoader = async () => {
  const res = await axios.get('http://localhost:3001/careers');

  if (res.status >= 400) {
    throw new Error('fetch data failed');
  }

  return res.data;
};
