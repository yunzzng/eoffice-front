import { useNavigate } from "react-router-dom";
import React from "react";

const sidebar = () => {
    const navigate = useNavigate();
    return(
        <div>
            <div>
                <h1 onClick={() => navigate('/home')}>E-office</h1>
            </div>
            <ul>
                <li onClick={() => navigate('/regist')}>회의실 등록</li> 
                <li onClick={() => navigate('/modify-delete')}>회의실 수정/삭제</li>
                <li onClick={() => navigate('/reserve')}>회의실 예약</li>
                <li onClick={() => navigate('/write')}>회의록 작성</li>
            </ul>
            <div>
                <li>프로필 수정</li>
            </div>
            <div>
                <img src=''/>
            </div>
        </div>
    );
}

export default sidebar;