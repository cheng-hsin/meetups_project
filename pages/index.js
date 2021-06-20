import DUMMY_MEETUPS from '../data/meetups';
import MeetupList_18 from '../components/meetups/MeetupList_18';

const HomePage_18 = (props) => {
  return <MeetupList_18 meetups={DUMMY_MEETUPS} />;
};

export async function getStaticProps() {
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
  };
}

export default HomePage_18;
