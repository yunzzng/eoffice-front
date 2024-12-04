import { FC, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const OauthLoading: FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleOAuth = async () => {
      const queryParams = new URLSearchParams(location.search);
    //   const code = queryParams.get('code'); // OAuth 인증 코드
      const provider = queryParams.get('provider') || 'google'; // 인증 제공자
    //   console.log('code:', code); // 디버깅용
      console.log('provider:', provider);

      if ( !provider) {
        alert('유효하지 않은 요청입니다.');
        navigate('/login');
        return;
      }

      try {
        // GET 요청으로 code 전달
        const response = await fetch(`/api/oauth/${provider}-redirect`);

        if (!response.ok) {
            alert('서버 응답 오류가 발생했습니다.');
            navigate('/login');
            return;
        }

        const data = await response.json();
        console.log(data);

        if (data.isError) {
            alert(data.message || '로그인 실패');
            navigate('/login');
            return;
        }

        // JWT 토큰 저장
        localStorage.setItem('jwtToken', data.token); 
        alert(data.message || '로그인 성공!');
        navigate('/home'); // 홈으로 이동
      } catch (err) {
        console.error('OAuth 처리 오류:', err);
        alert('서버와 통신에 실패했습니다. 다시 시도해주세요.');
        navigate('/login');
      }
    };

    handleOAuth();
  }, [location, navigate]);

  return (
    <div style={{ textAlign: 'center', marginTop: '20%', color: '#6700e6', fontWeight: 'bold' }}>
      <h1>OAuth 로그인 중입니다...</h1>
      <p>잠시만 기다려 주세요.</p>
    </div>
  );
};

export default OauthLoading;