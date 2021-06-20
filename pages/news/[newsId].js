import { useRouter } from 'next/router';
const DetailPage_18 = () => {
  const router = useRouter();
  const pathname = router.pathname;
  const newsId = router.query.newsId;
  return (
    <div>
      <h1>DetailPage_18</h1>
      <h3>CHENG-HSIN 208410018</h3>
      <h3>pathname: {pathname}</h3>
      <h3>newsId: {newsId}</h3>
    </div>
  );
};

export default DetailPage_18;
