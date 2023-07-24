import Styles from "./Header.module.scss";

export default function Header() {
  return (
    <div className={Styles.header}>
      <div className={Styles.logo}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="22"
          viewBox="0 0 24 22"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M22.6167 11C22.6167 12.721 22.2215 14.3497 21.5168 15.8003L23.1695 19.1056C23.8344 20.4354 22.8674 22 21.3806 22L11.6167 22C5.54157 22 0.616699 17.0751 0.616699 11C0.616699 4.92487 5.54157 0 11.6167 0C17.6918 0 22.6167 4.92487 22.6167 11ZM16.7343 11.2926C17.1971 11.9621 16.7089 12.8745 15.8952 12.8611L14.0016 12.8298C13.4001 12.8199 12.9261 13.3395 12.991 13.9376L13.4852 18.4913C13.5971 19.5226 12.2583 20.0212 11.6684 19.1678L6.41139 11.5626C5.98071 10.9395 6.37211 10.0825 7.12502 9.99991L9.27771 9.76392C9.82185 9.70426 10.2169 9.21821 10.1641 8.67337L9.75916 4.49696C9.65963 3.47048 10.9907 2.98349 11.5771 3.83184L16.7343 11.2926Z"
            fill="#2FC7F7"
          />
        </svg>
        <span>DigiLink</span>
      </div>

      <nav className={Styles.searchBarAndIcons}>
        <div className={Styles.searchFrame}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M16.75 9.75C16.75 13.616 13.616 16.75 9.75 16.75C5.88401 16.75 2.75 13.616 2.75 9.75C2.75 5.88401 5.88401 2.75 9.75 2.75C13.616 2.75 16.75 5.88401 16.75 9.75ZM15.3677 16.7819C13.828 18.0135 11.875 18.75 9.75 18.75C4.77944 18.75 0.75 14.7206 0.75 9.75C0.75 4.77944 4.77944 0.75 9.75 0.75C14.7206 0.75 18.75 4.77944 18.75 9.75C18.75 11.875 18.0135 13.828 16.7819 15.3677L22.9571 21.5429C23.3476 21.9334 23.3476 22.5666 22.9571 22.9571C22.5666 23.3476 21.9334 23.3476 21.5429 22.9571L15.3677 16.7819Z"
              fill="#627D98"
            />
          </svg>
          <input type="text" placeholder="search" />
        </div>
        <div className={Styles.notificationsAndUser}>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="24"
              viewBox="0 0 20 24"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12.5087 1.35427C11.9725 0.538547 11.0491 0 9.99996 0C8.95081 0 8.02744 0.538559 7.49124 1.3543C3.74145 2.4405 1 5.9001 1 10V13.6713C0.3746 14.4442 0 15.4284 0 16.5C0 18.9853 2.01472 21 4.5 21L7 21C7 21.7957 7.31607 22.5587 7.87868 23.1213C8.44129 23.6839 9.20435 24 10 24C10.7956 24 11.5587 23.6839 12.1213 23.1213C12.6839 22.5587 13 21.7957 13 21L15.5 21C17.9853 21 20 18.9853 20 16.5C20 15.4284 19.6254 14.4442 19 13.6713V10C19 5.90007 16.2585 2.44044 12.5087 1.35427ZM3 13.6713C3 14.1293 2.84282 14.5734 2.55474 14.9294C2.20692 15.3593 2 15.9028 2 16.5C2 17.8807 3.11929 19 4.5 19H15.5C16.8807 19 18 17.8807 18 16.5C18 15.9028 17.7931 15.3593 17.4453 14.9294C17.1572 14.5734 17 14.1293 17 13.6713V10C17 6.13401 13.866 3 10 3C6.13401 3 3 6.13401 3 10V13.6713ZM9.29289 21.7071C9.10536 21.5196 9 21.2652 9 21H11C11 21.2652 10.8946 21.5196 10.7071 21.7071C10.5196 21.8946 10.2652 22 10 22C9.73478 22 9.48043 21.8946 9.29289 21.7071Z"
                fill="#627D98"
              />
            </svg>
          </span>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M16.643 20.8591C15.2555 21.5877 13.6759 22 12 22C10.3241 22 8.74449 21.5877 7.35705 20.8591C7.12672 20.2844 7 19.657 7 19C7 16.2386 9.23858 14 12 14C14.7614 14 17 16.2386 17 19C17 19.657 16.8733 20.2844 16.643 20.8591ZM18.9986 19.1428C18.9995 19.0953 19 19.0477 19 19C19 16.3075 17.4798 13.97 15.2509 12.799C16.3215 11.882 17 10.5202 17 9C17 6.23857 14.7614 3.99999 12 3.99999C9.23858 3.99999 7 6.23857 7 9C7 10.5202 7.67847 11.882 8.74914 12.799C6.52021 13.97 5 16.3075 5 19C5 19.0477 5.00048 19.0953 5.00143 19.1428C3.14923 17.3278 2 14.7981 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 14.7981 20.8508 17.3278 18.9986 19.1428ZM17.7199 22.5517C21.4606 20.5196 24 16.5564 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 16.3663 2.33197 20.1879 5.81839 22.2874C7.61351 23.3684 9.71468 23.9928 11.9612 23.9999M12.0082 24C14.0762 23.9986 16.0218 23.4741 17.7199 22.5517L12.0082 24ZM12 12C13.6569 12 15 10.6569 15 9C15 7.34314 13.6569 5.99999 12 5.99999C10.3431 5.99999 9 7.34314 9 9C9 10.6569 10.3431 12 12 12Z"
                fill="#627D98"
              />
            </svg>
          </span>
        </div>
      </nav>
    </div>
  );
}