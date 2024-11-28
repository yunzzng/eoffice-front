import { useState, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../../css/loginStyles/Login.module.css';

function Login() {
    const [readUser, setReadUser] = useState({ email: '', password: '' });
    const [userData, setUserData] = useState({ id: '', email: '', name: '' });
    const navigate = useNavigate();
  
    const handleReadDB = (e: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setReadUser((prev) => ({ ...prev, [name]: value }));
    };
  
    const handleClickRead = async () => {
        const { email, password } = readUser;
    
        if (!email || !password) {
          alert('이메일과 비밀번호를 입력하세요.');
          return;
        }
        try {
          const response = await fetch('/api/user/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
          });
    
          if (response.ok) {
            const data = await response.json();
            console.log('데이터 조회 성공:', data);
    
            if (!data.isError && data.user) {
              alert('로그인 성공!');
              navigate('/home');
              setUserData({
                id: data.user._id,
                email: data.user.email,
                name: data.user.name,
              });
            } else {
              alert('사용자 정보를 찾을 수 없습니다.');
            }
          } else {
            alert('조회 실패');
          }
        } catch (err) {
          console.log('조회 중 오류 발생:', err);
        }
      };
  
    const handleClickGoogle = () => {
        window.location.href = "/api/oauth/google";
    };
  
    const handleClickKaKao = () => {
        window.location.href = "/api/oauth/kakao";
    };
  
    const navigateToSignup = () => {
        navigate("/signup");
    };

    return (
        <div className={styles.loginContainer}>
        <header className={styles.header}>
            <h1 className={styles.logoText}>E-Office</h1>
            <img src="../../../public/img/guestuserImage.png" className={styles.userIcon}></img>
        </header>
  
        <div className={styles.mainContent}>
            <div className={styles.leftSection}>
                <img src="../../../public/img/computerImage.png" className={styles.image} ></img>
                <button onClick={navigateToSignup} className={styles.signupButton}>회원가입</button>
            </div>
  
            <div className={styles.rightSection}>
                <div className={styles.inputField}>
                    <div className={styles.inputRow}>
                        <label className={styles.inputLabel}>이메일</label>
                            <input type="email" name="email" value={readUser.email} onChange={handleReadDB} className={styles.input} placeholder="이메일 입력" />
                        </div>
                    <div className={styles.inputRow}>
                        <label className={styles.inputLabel}>비밀번호</label>
                        <input type="password" name="password" value={readUser.password} onChange={handleReadDB} className={styles.input} placeholder="비밀번호 입력" />
                    </div>
                </div>
                <div className={styles.oauthButtons}>
                    <button className={`${styles.oauthButton} ${styles.email}`} onClick={handleClickRead}>이메일로그인</button>
                    <button className={`${styles.oauthButton} ${styles.google}`} onClick={handleClickGoogle}>구글로그인</button>
                    <button className={`${styles.oauthButton} ${styles.kakao}`} onClick={handleClickKaKao}>카카오로그인</button>
                </div>
            </div>
        </div>
        <footer className={styles.footer}> © 2024 E-Office. All Rights Reserved. </footer>
        </div>
    );
}

export default Login;