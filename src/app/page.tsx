import Header from "@/Components/Header";
import Styles from "./page.module.scss";
import SideBar from "@/Components/SideBar";
import RightContainer from "@/Components/RightContainer";

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
