import Achievement from "app/_components/Achievement/Achievement";
import HomeTitle from "app/_components/HomeTitle";
import Award from "@/app/_components/Award/Award";
import Skill from "@/app/_components/Skill/Skill";
import styles from "@/app/page.module.scss";

const Page = () => {
  return (
    <div className={styles.page}>
      <HomeTitle />
      <div className={styles.contents}>
        <Award />
        <Achievement />
        <Skill />
      </div>
    </div>
  );
};

export default Page;
