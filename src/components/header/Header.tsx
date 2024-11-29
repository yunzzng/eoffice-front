import { useEffect, useState } from 'react';

import styles from './Header.module.css';
import { useNavigate } from 'react-router-dom';
import profileimg from '../../../public/images/profile-img.png';

interface User {
  _id: string;
}

const Header = () => {
  const [user, setUser] = useState<User>({ _id: '' });
  const navigate = useNavigate();

  const fetchUser = async () => {
    try {
      const response = await fetch('/api/user/profile', {
        method: 'POST',
        body: JSON.stringify({ user }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        console.log(response);
        const data = await response.json();
        setUser(data.user);
      }
    } catch (err) {
      console.log('사용자 정보 에러', err);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div className={styles.header}>
      {user ? (
        <div className={styles.header_box1}>
          <h1 className={styles.logo}>eoffice </h1>
          <a
            onClick={() => {
              navigate('/profile');
            }}
          >
            <img
              src={profileimg}
              alt="사용자 프로필 이미지"
              className={styles.header_profile_img}
            />
          </a>
        </div>
      ) : (
        <div>
          <h1 className={styles.logo}> E-Office </h1>
        </div>
      )}
    </div>
  );
};

export default Header;
