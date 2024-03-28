import { NavLink, Outlet } from 'react-router-dom';

function Help() {
  return (
    <div className="help-layout">
      <h2>Website help</h2>
      <nav>
        <NavLink to="faq">FAQ</NavLink>
        <NavLink to="contact">Contact Us</NavLink>
      </nav>

      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Help;
