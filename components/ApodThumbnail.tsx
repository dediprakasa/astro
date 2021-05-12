import Image from "next/image";
import styles from "./ApodThumbnail.module.css";

type Apod = {
  date: string;
  title: string;
  url: string;
};

const ApodThumbnail = ({ date, title, url }: Apod) => {
  return (
    <div className={styles.imageContainer} key={date}>
      <Image
        src={url}
        alt={title}
        width={200}
        height={150}
        layout="responsive"
      />
    </div>
  );
};

export default ApodThumbnail;
