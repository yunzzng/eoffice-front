import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import Sidebar from '../../components/sidebar/Siderbar';
import styles from '../../css/meetingStyles/minutesList.module.css';

const MinutesList = () => {
  return (
    <>
      <div className={styles.container}>
        <Sidebar />

        <div className={styles.main_container}>
          <Header />
          <main className={styles.main}>
            <div className={styles.main_content}></div>
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default MinutesList;
