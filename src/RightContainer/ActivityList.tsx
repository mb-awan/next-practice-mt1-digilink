import Styles from "./ActivityList.module.scss";
import ActivitiesListItem from "./ActivitiesListItem";

export default function ActivityList() {
  return (
    <ul className={Styles.activityList}>
      <ActivitiesListItem />
      <ActivitiesListItem />
      <ActivitiesListItem />
      <ActivitiesListItem />
      <ActivitiesListItem />
    </ul>
  );
}
