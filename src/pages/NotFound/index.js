import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="not-found">
      <h2>Page not found!</h2>

      <Link to="/">Homepage</Link>
    </div>
  );
}
