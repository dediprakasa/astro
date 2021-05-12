import { useRouter } from "next/router";

const ApodDetail = () => {
  const router = useRouter();
  const { date } = router.query;
  return <h1>{date}</h1>;
};

export default ApodDetail;
