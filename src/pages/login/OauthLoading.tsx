import { FC, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const OauthLoading: FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleOAuth = async () => {
      const queryParams = new URLSearchParams(location.search);
      const code = queryParams.get('code');
      const provider = queryParams.get('provider') || 'google'; // google, kakao
      const err = queryParams.get('err');

      if (err) {
        alert(`OAuth 오류: ${err}`);
        navigate('/login');
        return;
      }

      if (!code || !provider) {
        alert('유효하지 않은 요청입니다.');
        navigate('/login');
        return;
      }

      try {
        const response = await fetch(`/api/oauth/${provider}-redirect`, {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ code }),
        });

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

        localStorage.setItem('jwtToken', data.token);
        alert(data.message || '로그인 성공!');
        navigate('/home');
      } catch (err) {
        console.error('OAuth 처리 오류:', err);
        alert('서버와 통신에 실패했습니다. 다시 시도해주세요.');
        navigate('/login');
      }
    };

    handleOAuth();
  }, [location, navigate]);

  return (
    <div style={{ textAlign: 'center', marginTop: '20%', color: '#6700e6', fontWeight:'bold' }}>
      <h1>OAuth 로그인 중입니다...</h1>
      <p>잠시만 기다려 주세요.</p>
    </div>
  );
};

export default OauthLoading;