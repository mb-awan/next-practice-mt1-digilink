import Image from "next/image";
import Styles from "./ActivityListItemHeader.module.scss";

export default function ActivityListItemHeader() {
  return (
    <header className={Styles.headContainer}>
      <div className={Styles.info}>
        <div className={Styles.picture}>
          <Image src="/mask.png" alt="profile pic" width={40} height={40} />
        </div>
        <div className={Styles.nameAndDate}>
          <span className={Styles.name}>Ammar Yasin</span> <br />
          <span className={Styles.date}>Today, 10:58</span>
        </div>
      </div>
      <div className={Styles.favouriteBtn}>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="16"
            viewBox="0 0 17 16"
            fill="none"
          >
            <path
              d="M3.93588 14.6401C3.86874 14.6401 3.83516 14.6074 3.76802 14.5746C3.70087 14.5091 3.63372 14.4109 3.6673 14.3127L4.50663 9.59787L0.98144 6.25821C0.914294 6.19273 0.880721 6.0945 0.914294 5.99628C0.947867 5.89805 1.01501 5.83257 1.11573 5.83257L5.98385 5.14499L8.16611 0.855821C8.19968 0.757595 8.3004 0.724854 8.40112 0.724854C8.50184 0.724854 8.60256 0.790337 8.63613 0.855821L10.8184 5.14499L15.6865 5.79983C15.7872 5.79983 15.8879 5.89805 15.8879 5.96354C15.9215 6.06176 15.8879 6.15999 15.8208 6.22547L12.3292 9.59787L13.1685 14.3127C13.2021 14.4109 13.1349 14.5091 13.0678 14.5746C13.0006 14.6401 12.8664 14.6401 12.7992 14.6074L8.46827 12.3809L4.07018 14.6074C4.0366 14.6074 4.00303 14.6401 3.93588 14.6401ZM1.75362 6.25821L4.97665 9.33594C5.0438 9.40142 5.07737 9.4669 5.0438 9.56513L4.27161 13.887L8.3004 11.8243C8.36755 11.7916 8.46827 11.7916 8.53541 11.8243L12.5306 13.8543L11.7584 9.53239C11.7584 9.43416 11.7584 9.36868 11.8256 9.3032L15.0486 6.22547L10.5834 5.60338C10.4827 5.60338 10.4155 5.53789 10.3819 5.47241L8.40112 1.5434L6.4203 5.47241C6.38673 5.53789 6.31958 5.60338 6.21886 5.60338L1.75362 6.25821Z"
              fill="#2FC4F3"
              stroke="#2FC4F3"
              stroke-width="0.962959"
            />
          </svg>
          In Favourite
        </button>
      </div>
    </header>
  );
}
