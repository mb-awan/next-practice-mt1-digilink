import Styles from "./page.module.scss";
import SideBar from "@/SideBar";
import RightContainer from "@/RightContainer";
import Header from "./Header";

export default function Page() {
  return (
    <>
      <Header />
      <main className={Styles.mainContainer}>
        <SideBar />
        <RightContainer />
      </main>
    </>
  );
}
