import axios from 'axios';
import { useLoaderData } from 'react-router-dom';

export default function CareerDetails() {
  const career = useLoaderData();

  return (
    <div className="career-details">
      <h2>Career Details for {career.title}</h2>
      <p>Starting salary: {career.salary}</p>
      <p>Location: {career.location}</p>
      <div className="details">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta sed sunt ipsam quam assumenda quasi ipsa
          facilis laborum rerum voluptatem!
        </p>
      </div>
    </div>
  );
}

// loader function
export const careerDetailsLoader = async ({ params }) => {
  const { id } = params;

  const res = await axios.get(`http://localhost:3001/careers/${id}`);

  if (res.status >= 400) {
    throw new Error('fetch data failed');
  }

  return res.data;
};
