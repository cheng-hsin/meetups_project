import classes from './MeetupDetail_18.module.css';
const MeetupDetail_18 = (props) => {
  const { title, address, image, description } = props;
  return (
    <section className={classes.detail}>
      <img src={image} alt={title} />
      <h1>{title}</h1>
      <address>{address}</address>
      <p>{description}</p>
    </section>
  );
};

export default MeetupDetail_18;
