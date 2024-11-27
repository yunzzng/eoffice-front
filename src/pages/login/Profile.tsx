import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import styles from '../../css/loginStyles/Profile.module.css';
import Sidebar from '../../components/sidebar/Siderbar';
import { useState, useEffect, ChangeEvent } from 'react';

/** api call
 * 로드 시 이미지 가져오는 패치 하나 /api/editprofile/loadimage
 * 디비로 날리는 거 하나 /api/editprofile/updateimage
 */

const EditProfile = () => {
  const [passwords, setPassword] = useState({
    password: '',
    passwordComfirmed: '',
  });

  const [inputFile, setInputFile] = useState<File>();

  const handleInputFile = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) {
      return;
    }

    setInputFile(file);
  };

  const handlePasswordOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPassword((prev) => ({ ...prev, [name]: value }));
  };

  const handleOnSubmit = () => {
    const formData = new FormData();

    if (passwords.password === passwords.passwordComfirmed && inputFile) {
      formData.append('password', passwords.password);
      formData.append('image', inputFile);
    } else {
      alert('비밀번호 또는 사진을 넣어주세요');
      return;
    }
  };

  // 로컬 스토리지
  // const getProfileFetch = async () => {};

  useEffect(() => {
    // getProfileFetch();
  }, []);

  return (
    <>
      <div className={styles.container}>
        <Sidebar />

        <div className={styles.main_container}>
          <Header />
          <main className={styles.main}>
            <div className={styles.main_content}>
              <div className={styles.default_image}>
                <label htmlFor="profileImage">
                  <img
                    className={styles.logo_image}
                    src="../../../public/img/default-image.png"
                    alt="프로필 이미지"
                  />
                </label>
                <input
                  className={styles.input_file}
                  type="file"
                  name="profileImage"
                  id="profileImage"
                  onChange={handleInputFile}
                />
              </div>

              <div className={styles.inputs_wrap}>
                <div className={styles.input_wrap}>
                  <label className={styles.label} htmlFor="password">
                    비밀번호
                  </label>
                  <input
                    className={styles.input}
                    type="text"
                    id="password"
                    name="password"
                    onChange={handlePasswordOnChange}
                  />
                </div>

                <div className={styles.input_wrap}>
                  <label className={styles.label} htmlFor="passwordComfirmed">
                    비밀번호 확인
                  </label>
                  <input
                    className={styles.input}
                    type="text"
                    id="passwordComfirmed"
                    name="passwordComfirmed"
                    onChange={handlePasswordOnChange}
                  />
                </div>

                {JSON.stringify(passwords)}
              </div>

              <button className={styles.button} onClick={handleOnSubmit}>
                프로필 수정
              </button>
            </div>
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default EditProfile;
