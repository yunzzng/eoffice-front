import styles from '../../css/meetingStyles/minutesList.module.css';
import { useContext, useEffect } from 'react';
import { PageContext } from './Page';

const PageList = () => {
  const { minutes, currentPage, pageSize, sliceMinutes, setSliceMinutes } =
    useContext(PageContext);

  const start = (currentPage - 1) * pageSize;
  const end = start + pageSize;

  useEffect(() => {
    setSliceMinutes(minutes.slice(start, end));
  }, [minutes, currentPage, pageSize]);

  return (
    <>
      {sliceMinutes.map((minute, index) => (
        <div className={styles.minutes_list_wrap} key={`minutes-key-${index}`}>
          <div className={styles.minutes_unit}>
            <ul className={styles.minutes_info}>
              <li className={styles.minutes_title}>{minute.title}</li>
              <li className={styles.minutes_date}>{minute.date}</li>
              <li className={styles.minutes_attendee}>{minute.attendee}</li>
              <li className={styles.minutes_createAt}>{minute.createAt}</li>
            </ul>

            <div className={styles.minutes_content}>{minute.content}</div>
          </div>
        </div>
      ))}
    </>
  );
};

export default PageList;
