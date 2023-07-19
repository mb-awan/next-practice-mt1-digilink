import SideBar from "@/side-bar";
import MainContainer from "@/main-container";

import Styles from './page.module.scss';

export default function Page() {
  return <div className={Styles.pageContainer}>
    <SideBar />
    <MainContainer />
  </div>
}