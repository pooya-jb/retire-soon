import classes from './Navbar.module.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className={classes.navbar}>
      <div>
        <Link className={classes.logo} to={'/'}>
          Retire Soon
        </Link>
      </div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <Link className={classes.link} to={'/monthly-overview'}>
              Monthly Overview
            </Link>
          </li>
          <li>
            <Link className={classes.link} to={'/add-new-expense'}>
              Add New Expense
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
