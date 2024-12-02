import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import Sidebar from '../../components/sidebar/Siderbar';
import styles from '../../css/meetingStyles/minutesList.module.css';
import Page from '../../components/paginator/Page';

const DEFAULT_PAGE_INDEX = 0;

type minutesProps = {
  title: string;
  date: string;
  attendee: number;
  content: string;
};

const MinutesList = () => {
  const [minutes, setMinutes] = useState<minutesProps[]>([]);
  const [searchParam, setSearchParams] = useSearchParams({
    page: (DEFAULT_PAGE_INDEX + 1).toString(),
  });

  const currentPage = searchParam.get('page') || '1';

  const handleChangePage = (pageIndex: number) => {
    setSearchParams({ page: pageIndex.toString() });
  };

  const initfetch = async () => {
    try {
      const getMinutesRequest = await fetch('/api/meeting/minuteslist');

      if (getMinutesRequest.status === 200) {
        const { isError, data } = await getMinutesRequest.json();

        if (!isError) {
          setMinutes(data);
        }
      }
    } catch (err) {
      alert('시스템 에러가 발생했습니다.');
    }
  };

  useEffect(() => {
    setSearchParams({ page: currentPage });
    initfetch();
  }, []);

  return (
    <>
      <div className={styles.container}>
        <Sidebar />

        <div className={styles.main_container}>
          <Header />
          <main className={styles.main}>
            <div className={styles.main_content}>
              <div className={styles.minutes_list_container}>
                <Page
                  defaultPageIndex={DEFAULT_PAGE_INDEX}
                  onChangePage={handleChangePage}
                  minutes={minutes}
                  pageSize={4}
                />
              </div>
            </div>
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default MinutesList;
