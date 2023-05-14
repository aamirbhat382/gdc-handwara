import Head from "next/head";
import Vedio from "../../components/Vedio";
import Cta from "../../components/Cta";

const about = () => {
  const thumbnailImg =
    "https://scontent.fsxr1-2.fna.fbcdn.net/v/t39.30808-6/308423219_499080168894356_3434206610460592354_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=e3f864&_nc_ohc=bPpNY9MMmDEAX92Ic7W&_nc_ht=scontent.fsxr1-2.fna&oh=00_AfCXpX9TjOrH0TD-dv6JdxxDmdq3PubVdxHkjWMZdAjLTA&oe=646654C9";
  const videoUrl =
    "https://res.cloudinary.com/floatui/video/upload/v1669411003/Binary_Search_Algorithm_in_100_Seconds_hyg6n5.mp4";
    const ctaImg = "https://gmu.ac.ae/wp-content/uploads/2018/11/core-values.jpg"
  return (
    <>
      <Head>
        <title>About Us</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Vedio
        title="About College"
        thumbnailImg={thumbnailImg}
        videoUrl={videoUrl}
      />
      <hr />
      <Cta titleCta="Core Values" ctaImg={ctaImg}/>
    </>
  );
};
export default about;
