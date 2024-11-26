import styles from './Splash.module.css';
import computerImage from '../../../public/img/computerImage.png';

const Header = () => {
    return (
        <div className={styles.header}>
          <div className={styles.logo}>E-Office</div>
          <div className={styles.content}>
            <h1>업무의 모든 것을 <br />하나의 플랫폼에서</h1>
            <div className={styles.buttons}>
              <button className={styles.loginButton}>로그인</button>
              <button className={styles.signupButton}>회원가입</button>
            </div>
          </div>
          <img src={computerImage} alt="컴퓨터" className={styles.image} />
        </div>
      );
};

export default Header;