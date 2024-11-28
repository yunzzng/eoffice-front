import { ChangeEvent } from 'react';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import Sidebar from '../../components/sidebar/Siderbar';
import styles from '../../css/meetingStyles/CreateMinutes.module.css';

import { useState } from 'react';

const CreateMinutes = () => {
  const [meetingInput, setMeetingInput] = useState({
    meetingTitle: '',
    meetingDate: '',
    meetingContent: '',
  });

  const handleOnChangeInput = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setMeetingInput((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmitMeetingData = async () => {
    if (meetingInput.meetingTitle === '') {
      alert('회의제목을 입력해주세요.');
      return;
    } else if (meetingInput.meetingDate === '') {
      alert('일시를 입력해주세요.');
      return;
    } else if (meetingInput.meetingContent === '') {
      alert('회의내용을 입력해주세요.');
      return;
    } else {
      try {
        const meetingDataRequest = await fetch('/api/meeting/minutes', {
          method: 'POST',
          headers: {
            'Content-type': 'application/json',
          },
          body: JSON.stringify({
            title: meetingInput.meetingTitle,
            date: meetingInput.meetingDate,
            attendees: '',
            content: meetingInput.meetingContent,
          }),
        });

        if (meetingDataRequest) {
          const meetingData = await meetingDataRequest.json();

          if (meetingData) {
            console.log(meetingData);
          }
        } else {
          alert('등록 요청에 실패했습니다. 다시 시도해주세요.');
          return;
        }
      } catch (err) {
        alert('시스템 에러가 발생했습니다. 다시 시도해주세요.');
        return;
      }
    }
  };

  return (
    <>
      <div className={styles.container}>
        <Sidebar />

        <div className={styles.main_container}>
          <Header />
          <main className={styles.main}>
            <div className={styles.main_content}>
              <div>
                <label htmlFor="meetingTitle">회의제목</label>
                <input
                  type="text"
                  id="meetingTitle"
                  name="meetingTitle"
                  value={meetingInput.meetingTitle}
                  onChange={handleOnChangeInput}
                />
              </div>
              <div>
                <label htmlFor="meetingDate">일시</label>
                <input
                  type="date"
                  id="meetingDate"
                  name="meetingDate"
                  value={meetingInput.meetingDate}
                  onChange={handleOnChangeInput}
                />
              </div>
              <div>
                <label htmlFor="meetingAttendee">참여자</label>
                <input
                  type="text"
                  id="meetingAttendee"
                  name="meetingAttendee"
                  value={''}
                  onChange={() => {}}
                />

                <button onClick={() => {}}>추가</button>

                <ul>{}</ul>
              </div>
              <div>
                <label htmlFor="meetingContent">회의 내용</label>
                <textarea
                  name="meetingContent"
                  id="meetingContent"
                  value={meetingInput.meetingContent}
                  onChange={handleOnChangeInput}
                ></textarea>
              </div>

              <button onClick={handleSubmitMeetingData}>작성완료</button>
            </div>
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default CreateMinutes;
