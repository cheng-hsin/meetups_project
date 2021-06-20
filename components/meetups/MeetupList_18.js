import MeetupItem_18 from './MeetupItem_18';
import classes from './MeetupList_18.module.css';

const MeetupList_18 = (props) => {
  const { meetups } = props;
  console.log('meetups', meetups);
  return (
    <div>
      <ul className={classes.list}>
        {meetups.map((meetup) => (
          <MeetupItem_18
            id={meetup.id}
            title={meetup.title}
            image={meetup.image}
            address={meetup.address}
          />
        ))}
      </ul>
    </div>
  );
};

export default MeetupList_18;
