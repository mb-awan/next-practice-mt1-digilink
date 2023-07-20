import MenuList from "./MenuList";
import Styles from "./SideBar.module.scss";

export default function SideBar() {
  return (
    <div className={Styles.sideBar}>
      <MenuList />
      <div className={Styles.settings}>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M18 2.99994C18 3.55223 17.5523 3.99994 17 3.99994C16.4477 3.99994 16 3.55223 16 2.99994C16 2.44765 16.4477 1.99994 17 1.99994C17.5523 1.99994 18 2.44765 18 2.99994ZM20 2.99994C20 4.65679 18.6569 5.99994 17 5.99994C15.6938 5.99994 14.5825 5.16513 14.1707 3.99994H1C0.447715 3.99994 0 3.55222 0 2.99994C0 2.44765 0.447715 1.99994 1 1.99994H14.1707C14.5825 0.834744 15.6938 -6.10352e-05 17 -6.10352e-05C18.6569 -6.10352e-05 20 1.34309 20 2.99994ZM2 9.99995C2 10.5522 2.44772 11 3 11C3.55228 11 4 10.5522 4 9.99995C4 9.44766 3.55228 8.99995 3 8.99995C2.44772 8.99995 2 9.44766 2 9.99995ZM0 9.99995C0 11.6568 1.34315 13 3 13C4.30622 13 5.41746 12.1651 5.82929 10.9999H19C19.5523 10.9999 20 10.5522 20 9.99995C20 9.44766 19.5523 8.99995 19 8.99995H5.82929C5.41746 7.83475 4.30622 6.99995 3 6.99995C1.34315 6.99995 0 8.34309 0 9.99995ZM17 18C17.5523 18 18 17.5522 18 17C18 16.4477 17.5523 16 17 16C16.4477 16 16 16.4477 16 17C16 17.5522 16.4477 18 17 18ZM17 20C18.6569 20 20 18.6568 20 17C20 15.3431 18.6569 14 17 14C15.6938 14 14.5825 14.8348 14.1707 16H1C0.447715 16 0 16.4477 0 17C0 17.5522 0.447715 18 1 18H14.1707C14.5825 19.1651 15.6938 20 17 20Z"
              fill="#627D98"
            />
          </svg>
        </div>
        <div>Settings</div>
      </div>
    </div>
  );
}