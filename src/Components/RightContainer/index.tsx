import Styles from "./RightContainer.module.scss";
import ActivityList from "./ActivityList";
import ActivityHeader from "./ActivityHeader";

export default function RightContainer() {
  return (
    <div className={Styles.rightContainer}>
      <ActivityHeader />
      <ActivityList />
    </div>
  );
}
