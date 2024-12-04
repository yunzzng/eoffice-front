import Sidebar from '../../components/sidebar/Siderbar';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import { ImageUpload } from '../../context/ImgUploadContext';
import { addPostType } from '../../types/addmeeting';

import { ChangeEvent, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditMeeting = () => {
  const [uploadFile, setUploadFile] = useState<File>();
  const [inputValue, setInputValue] = useState<addPostType>({
    name: '',
    location: '',
    person: 0,
  });
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);
  const token = localStorage.getItem('token');

  const userData = async () => {
    try {
      const response = await fetch(`/api/meeting/meetingrooms/${id}`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.ok) {
        const { data } = await response.json();
        console.log(data);
        setInputValue(data);
        setUploadFile(data.file);
      } else '회의실 정보 요청 실패';
    } catch (err) {
      console.log('회의실 정보 가져오기 실패', err);
    }
  };

  useEffect(() => {
    userData();
  }, []);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const handlePostEdit = async () => {
    const token = localStorage.getItem('token');

    if (!inputValue.name || !inputValue.location || inputValue.person <= 0) {
      alert('모든 입력 칸을 작성해주세요');
      return;
    }

    if (!uploadFile) {
      alert('이미지를 업로드 해주세요');
      return;
    }

    const formData = new FormData();

    formData.append('name', inputValue.name);
    formData.append('location', inputValue.location);
    formData.append('person', inputValue.person.toString());
    if (uploadFile) {
      formData.append('file', uploadFile);
    }

    try {
      const response = await fetch(`/api/meeting/meetingrooms/${id}`, {
        method: 'PUT',
        body: formData,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.ok) {
        console.log('회의실 정보 수정 성공');
        alert('회의실 수정이 완료되었습니다.');
        navigate('/meetinglist');
      } else {
        console.log('회의실 정보 수정 실패');
      }
    } catch (err) {
      console.log('회의실 정보 수정 실패', err);
    }
  };

  const handlePostDelete = async () => {
    const token = localStorage.getItem('token');

    try {
      const response = await fetch(`/api/meeting/meetingrooms/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.ok) {
        console.log('회의실 삭제 성공');
        alert('회의실이 삭제 되었습니다.');
        navigate('/meetinglist');
      } else {
        console.log('회의실 정보 삭제 요청 실패');
      }
    } catch (err) {
      console.log('회의실 정보 삭제 실패', err);
    }
  };

  return (
    <>
      <Header />
      <Sidebar />
      <Footer />
      <div>
        <ImageUpload setUploadImg={setUploadFile} />
      </div>
      <div>
        <div>
          <label>이름</label>
          <input onChange={handleInputChange} value={inputValue.name} />
        </div>
        <div>
          <label>위치</label>
          <input onChange={handleInputChange} value={inputValue.location} />
        </div>
        <div>
          <label>인원</label>
          <input
            type="number"
            onChange={handleInputChange}
            value={inputValue.person}
          />
        </div>
        <button onClick={handlePostEdit}>수정하기</button>
        <button onClick={handlePostDelete}>삭제하기</button>
      </div>
    </>
  );
};

export default EditMeeting;
