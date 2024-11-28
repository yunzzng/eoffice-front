import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import styles from '../../css/loginStyles/Home.module.css';
import Sidebar from '../../components/sidebar/Siderbar';

const HomePage = () => {
  return (
    <>
      <div className={styles.container}>
        <Sidebar />
        <div className={styles.main_container}>
          <Header />
          <main className={styles.main}>
            <div className={styles.main_content}>
              <div className={styles.main_content_item}>
                <div className={styles.navigation_wrap}>
                  <div className={styles.default_image}>
                    <img
                      className={styles.logo_image}
                      src="../../../public/img/default-image.png"
                      alt="프로필 이미지"
                    />
                  </div>
                  <a className={styles.navigation}>
                    <p className={styles.navigation_title}>
                      회의실 등록하러 가기
                    </p>
                    <div className={styles.arrow_image}>
                      <img
                        className={styles.logo_image}
                        src="../../../public/img/arrow.png"
                        alt="화살표"
                      />
                    </div>
                  </a>
                </div>
                <div className={styles.navigation_wrap}>
                  <div className={styles.default_image}>
                    <img
                      className={styles.logo_image}
                      src="../../../public/img/default-image.png"
                      alt="프로필 이미지"
                    />
                  </div>

                  <a className={styles.navigation}>
                    <p className={styles.navigation_title}>
                      회의실 예약하러 가기
                    </p>
                    <div className={styles.arrow_image}>
                      <img
                        className={styles.logo_image}
                        src="../../../public/img/arrow.png"
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
