import classes from './MeetupItem_18.module.css';
import {  useRouter } from 'next/router';

const MeetupItem_18 = (props) => {
  const router = useRouter();
  const { title, address, image } = props;

  const showDetailsHandler = () => {
    router.push('/' + props.id);
  };

  return (
    <li className={classes.item}>
      <div className={classes.card}>
        <div className={classes.image}>
          <img src={image} alt={title} />
        </div>
        <div className={classes.content}>
          <h3>{title}</h3>
          <address>{address}</address>
        </div>
        <div className={classes.actions}>
          <button onClick={showDetailsHandler}>Show Details</button>
        </div>
      </div>
    </li>
  );
};

export default MeetupItem_18;
