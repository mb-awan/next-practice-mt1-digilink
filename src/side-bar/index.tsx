import Styles from './sideBar.module.scss';

export default function SideBar() {
    return <div className={Styles.sideBar}>
        <div className={Styles.logo}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="22" viewBox="0 0 24 22" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M22.6167 11C22.6167 12.721 22.2215 14.3497 21.5168 15.8003L23.1695 19.1056C23.8344 20.4354 22.8674 22 21.3806 22L11.6167 22C5.54157 22 0.616699 17.0751 0.616699 11C0.616699 4.92487 5.54157 0 11.6167 0C17.6918 0 22.6167 4.92487 22.6167 11ZM16.7343 11.2926C17.1971 11.9621 16.7089 12.8745 15.8952 12.8611L14.0016 12.8298C13.4001 12.8199 12.9261 13.3395 12.991 13.9376L13.4852 18.4913C13.5971 19.5226 12.2583 20.0212 11.6684 19.1678L6.41139 11.5626C5.98071 10.9395 6.37211 10.0825 7.12502 9.99991L9.27771 9.76392C9.82185 9.70426 10.2169 9.21821 10.1641 8.67337L9.75916 4.49696C9.65963 3.47048 10.9907 2.98349 11.5771 3.83184L16.7343 11.2926Z" fill="#2FC7F7" />
            </svg>
            <span>DigiLink</span>
        </div>
        <div className={Styles.menuList}>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>Profile</li>
                    <li>Links</li>
                    <li>About</li>
                </ul>
            </nav>
        </div>
    </div >
}