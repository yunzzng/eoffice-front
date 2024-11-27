import styles from './Header.module.css';

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.header_log}>
          <img
            className={styles.logo_image}
            src={'../../../public/img/profile-img.png'}
            alt="헤더 프로필 이미지"
          />
        </div>
      </header>
    </>
  );
};

export default Header;
