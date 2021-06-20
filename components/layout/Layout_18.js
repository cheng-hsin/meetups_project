import classes from './Layout_18.module.css';
import MainNavigation_18 from './MainNavigation_18';

const Layout_18 = (props) => {
  return (
    <div>
      <MainNavigation_18 />
      <main className={classes.main}>{props.children}</main>
    </div>
  );
};

export default Layout_18;
