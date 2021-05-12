import { GetStaticProps, InferGetStaticPropsType } from "next";
import Image from "next/image";
import Link from "next/link";
import ApodThumbnail from "../components/ApodThumbnail";
import styles from "../styles/Home.module.css";

type Apod = {
  date: string;
  title: string;
  url: string;
  media_type: string;
};

const Home = ({
  weeklyApod,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <h1>Home</h1>
      <Link href="pop">hhh</Link>
      <div className={styles.container}>
        {weeklyApod.map((apod: Apod) => {
          if (apod.media_type == "image") {
            return (
              <Link href={`/apod/${apod.date}`}>
                <a>
                  <ApodThumbnail
                    title={apod.title}
                    url={apod.url}
                    date={apod.date}
                  />
                </a>
              </Link>
            );
          }
        })}
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetch(
    "https://apodapi.herokuapp.com/api/?start_date=2018-10-05&end_date=2018-10-13"
  );
  const weeklyApod: Apod[] = await res.json();

  return {
    props: {
      weeklyApod,
    },
  };
};

export default Home;
