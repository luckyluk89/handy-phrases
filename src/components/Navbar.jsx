import { useGlobalContext } from '../context';
import Location from './Location';
import LocationForm from './LocationForm';
import Logo from './Logo';

const Navbar = () => {
  const { country } = useGlobalContext();

  return (
    <nav className="navbar">
      <div className="nav-center">
        <Logo />
        <Location location="Canada" />
        <LocationForm />
      </div>
    </nav>
  );
};
export default Navbar;
