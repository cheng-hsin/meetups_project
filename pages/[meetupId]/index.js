import { useRouter } from 'next/router';
import MeetupDetail_18 from '../../components/meetups/MeetupDetail_18';
import meetups from '../../data/meetups';
const FormPage_18 = () => {
  const router = useRouter();
  const objDetail = meetups.find((obj) => obj.id === router.query.meetupId);
  return <MeetupDetail_18 {...objDetail} />;
};

export default FormPage_18;
