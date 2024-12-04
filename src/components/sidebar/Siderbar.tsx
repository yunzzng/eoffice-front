import { useNavigate } from 'react-router-dom';
import styles from './Sidebar.module.css';
import computerImg from '../../../public/images/computerImage.png';
import { SidebarContext } from '../../context/SidebarContext';
import { useContext } from 'react';

const Sidebar = () => {
  const { selectedMenu, setSelectedMenu } = useContext(SidebarContext);
  const navigate = useNavigate();

  const handleClickMenu = (menu: string, path: string) => {
    setSelectedMenu(menu);
    navigate(path, { replace: true });
  };

  const Menu = [
    { label: '회의실 등록', path: '/addmeeting' },
    { label: '회의실 수정/삭제', path: '/editmeeting' },
    { label: '회의실 예약', path: '/reservemeeting' },
    { label: '회의록 작성', path: '/createminutes' },
    { label: '회의록 보기', path: '/minuteslist' },
  ];

  return (
    <div className={styles.sidebar_box}>
      <div className={styles.sidebar_h1_box}>
        <h1
          className={`${
            selectedMenu === 'E-office' ? styles.sidebar_h1 : styles.sidebar_h1
          }`}
        >
          <a
            onClick={() => handleClickMenu('E-office', '/home')}
            className={styles.sidebar_logo_a}
          >
            E-office
          </a>
        </h1>
      </div>
      <div className={styles.sidebar_ul_box}>
        <ul className={styles.sidebar_ul}>
          {Menu.map((item, index) => (
            <li className={styles.sidebar_li} key={index}>
              <a
                className={`${
                  selectedMenu === item.label
                    ? styles.selected
                    : styles.sidebar_a
                }`}
                onClick={() => handleClickMenu(item.label, item.path)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.sidebar_bottom_box}>
        <li className={styles.sidebar_li}>
          <a
            className={`${
              selectedMenu === '프로필 수정'
                ? styles.selected
                : styles.sidebar_a
            }`}
            onClick={() => handleClickMenu('프로필 수정', '/profile')}
          >
            프로필 수정
          </a>
        </li>
        <img src={computerImg} className={styles.sidebar_img} />
      </div>
      {/* 메뉴 늘어나면 map으로 */}
    </div>
  );
};

export default Sidebar;
