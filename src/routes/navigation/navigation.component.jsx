import { Link, Outlet } from "react-router-dom";
import { Fragment } from "react";
import "./navigation.styles.scss";

import { ReactComponent as CrwmLogo } from "../../assets/crown.svg";

const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="log-container" to="/">
          <CrwmLogo />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
