import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import styles from '../../css/loginStyles/Home.module.css';
import Sidebar from '../../components/sidebar/Siderbar';
import defaultImage from '../../../public/img/default-image.png';
import arrowImage from '../../../public/img/arrow.png';

import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigator = useNavigate();

  return (
    <>
      <div className={styles.container}>
        <Header />
        <Sidebar />
        <div className={styles.main_container}>
          <main className={styles.main}>
            <div className={styles.main_content}>
              <div className={styles.main_content_item}>
                <div
                  className={`${styles.navigation_wrap} ${styles.cursor_pointer}`}
                  onClick={() => navigator('/addmeeting')}
                >
                  <div className={styles.default_image}>
                    <img
                      className={styles.logo_image}
                      src={defaultImage}
                      alt="프로필 이미지"
                    />
                  </div>
                  <a
                    className={styles.navigation}
                    onClick={() => navigator('/addmeeting')}
                  >
                    <p className={styles.navigation_title}>
                      회의실 등록하러 가기
                    </p>
                    <div className={styles.arrow_image}>
                      <img
                        className={styles.logo_image}
                        src={arrowImage}
                        alt="화살표"
                      />
                    </div>
                  </a>
                </div>
                <div
                  className={`${styles.navigation_wrap} ${styles.cursor_pointer}`}
                  onClick={() => navigator('/reservemeeting')}
                >
                  <div className={styles.default_image}>
                    <img
                      className={styles.logo_image}
                      src={defaultImage}
                      alt="프로필 이미지"
                    />
                  </div>

                  <a
                    className={`${styles.navigation} ${styles.cursor_pointer}`}
                  >
                    <p className={styles.navigation_title}>
                      회의실 예약하러 가기
                    </p>
                    <div className={styles.arrow_image}>
                      <img
                        className={styles.logo_image}
                        src={arrowImage}
                        alt="화살표"
                      />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default HomePage;
