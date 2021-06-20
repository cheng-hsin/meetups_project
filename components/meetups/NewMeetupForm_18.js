import classes from './NewMeetupForm_18.module.css';

const NewMeetupForm_18 = () => {
  return (
    <div className={classes.card}>
      <form className={classes.form}>
        <div className={classes.control}>
          <label for='title'>Meetup Title</label>
          <input type='text' required='' id='title' />
        </div>
        <div className={classes.control}>
          <label for='image'>Meetup Image</label>
          <input type='url' required='' id='image' />
        </div>
        <div className={classes.control}>
          <label for='address'>Address</label>
          <input type='text' required='' id='address' />
        </div>
        <div className={classes.control}>
          <label for='description'>Description</label>
          <textarea id='description' required='' rows='5'></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </div>
  );
};

export default NewMeetupForm_18;
