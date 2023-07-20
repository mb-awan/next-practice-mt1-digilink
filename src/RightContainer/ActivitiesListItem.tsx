import Styles from "./ActivitiesListItem.module.scss";
import ActivityListItemHeader from "./ActivityListItemHeader";

export default function ActivitiesListItem() {
  return (
    <li className={Styles.activitiesItem}>
      <ActivityListItemHeader />
      <main className={Styles.activityItemListBody}>
        <div className={Styles.activityType}>Personal</div>
        <div className={Styles.activityDescription}>
          Ali completed his graduation
        </div>
        <div className={Styles.socialMediaIcons}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="#2FC4F3"
          >
            <path d="M24 11.7c0 6.45-5.27 11.68-11.78 11.68-2.07 0-4-.53-5.7-1.45L0 24l2.13-6.27a11.57 11.57 0 0 1-1.7-6.04C.44 5.23 5.72 0 12.23 0 18.72 0 24 5.23 24 11.7M12.22 1.85c-5.46 0-9.9 4.41-9.9 9.83 0 2.15.7 4.14 1.88 5.76L2.96 21.1l3.8-1.2a9.9 9.9 0 0 0 5.46 1.62c5.46 0 9.9-4.4 9.9-9.83a9.88 9.88 0 0 0-9.9-9.83m5.95 12.52c-.08-.12-.27-.19-.56-.33-.28-.14-1.7-.84-1.97-.93-.26-.1-.46-.15-.65.14-.2.29-.75.93-.91 1.12-.17.2-.34.22-.63.08-.29-.15-1.22-.45-2.32-1.43a8.64 8.64 0 0 1-1.6-1.98c-.18-.29-.03-.44.12-.58.13-.13.29-.34.43-.5.15-.17.2-.3.29-.48.1-.2.05-.36-.02-.5-.08-.15-.65-1.56-.9-2.13-.24-.58-.48-.48-.64-.48-.17 0-.37-.03-.56-.03-.2 0-.5.08-.77.36-.26.29-1 .98-1 2.4 0 1.4 1.03 2.76 1.17 2.96.14.19 2 3.17 4.93 4.32 2.94 1.15 2.94.77 3.47.72.53-.05 1.7-.7 1.95-1.36.24-.67.24-1.25.17-1.37" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="#2FC4F3"
          >
            <path d="M20 0a4 4 0 0 1 4 4v16a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4h16zm-4.42 5.8a3.28 3.28 0 0 0-3.2 4.03A9.32 9.32 0 0 1 5.61 6.4a3.26 3.26 0 0 0 1.02 4.38 3.27 3.27 0 0 1-1.49-.4v.03a3.28 3.28 0 0 0 2.64 3.22 3.3 3.3 0 0 1-1.49.06 3.29 3.29 0 0 0 3.07 2.28 6.59 6.59 0 0 1-4.86 1.36 9.29 9.29 0 0 0 5.03 1.47c6.04 0 9.34-5 9.34-9.34v-.42a6.65 6.65 0 0 0 1.63-1.7c-.59.26-1.22.44-1.89.52.68-.41 1.2-1.05 1.45-1.82-.64.38-1.34.65-2.09.8a3.28 3.28 0 0 0-2.4-1.04z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="#2FC4F3"
          >
            <path d="M20 0a4 4 0 0 1 4 4v16a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4h16zm-4 7.28V4.5h-2.29c-2.1 0-3.42 1.6-3.42 3.89v1.67H8v2.77h2.29v6.67h2.85v-6.67h2.29l.57-2.77h-2.86V8.94c0-1.1.58-1.66 1.72-1.66H16z" />
          </svg>
        </div>
      </main>
    </li>
  );
}
