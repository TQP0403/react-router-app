import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

// layouts
import Root from './layouts/Root';
import Help from './layouts/Help';

// pages
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Careers, { careersLoader } from './pages/Careers';
import CareerDetails, { careerDetailsLoader } from './pages/Careers/CareerDetails';
import CareerError from './pages/Careers/CareerError';
import Contact, { contactAction } from './pages/Help/Contact';
import Faq from './pages/Help/Faq';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="help" element={<Help />}>
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<Contact />} action={contactAction} />
      </Route>
      <Route path="careers" errorElement={<CareerError />}>
        <Route index element={<Careers />} loader={careersLoader} />
        <Route path=":id" element={<CareerDetails />} loader={careerDetailsLoader} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
