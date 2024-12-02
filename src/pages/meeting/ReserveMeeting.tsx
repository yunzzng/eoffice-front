import Sidebar from "../../components/sidebar/Siderbar";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import { useNavigate } from "react-router-dom";
import { NavigateButtons } from "../../components/button/Button";
import { ImageUpload } from "../../context/ImgUploadContext";
import { ChangeEvent, useState } from "react";

interface ReserveMeetingType {
    date: string;
    time: string;
    location: string;
    Participants: string;
    title:string;
}


const ReserveMeeting = () => {
    const navigate = useNavigate();
    const [inputFile, setInputFile] = useState<File>();
    const [inputValue, setInputValue] = useState<ReserveMeetingType>({
        date: '',
        time: '',
        location: '',
        Participants: '',
        title: '',
    }); 

    const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setInputValue({...inputValue, [name] : value});
        console.log(inputValue);
    };

    const handleReserve = async() => {
        const formData = new FormData(); 

        formData.append("date", inputValue.date);
        formData.append("time", inputValue.time);
        formData.append("location", inputValue.location);
        formData.append("Participants", inputValue.Participants);
        formData.append("title", inputValue.title);

        try{
            const response = await fetch("/api", {
                method:"POST",
                body:formData,
            });
            if(response.ok) {
                console.log('회의실예약 성공');
                navigate('/home');
            }else{
                console.log('데이터 저장 실패');
            }
        }catch(err) {
            console.log('회의실 예약 실패', err)
        }
    }

    return (
        <>
            <Header />
            <Sidebar />
            <Footer />
            <ImageUpload setUploadImg={setInputFile} />
            <div>
                <div>
                    <label>날짜</label>
                    <input 
                        name="date" 
                        type="date"
                        onChange={handleChange}
                        />
                </div>
                <div>
                    <label>시간</label>
                    <input 
                        name="time" 
                        type="time"
                        onChange={handleChange}
                        />
                </div>
                <div>
                    <label>장소</label>
                    <input 
                        name="location"
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>참여자</label>
                    <input 
                        name="Participants"
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>회의 제목</label>
                    <input 
                        name="title" 
                        onChange={handleChange}
                    />
                </div>
                <NavigateButtons label="회의실 예약하기" onClick={handleReserve} />
            </div>
        </>
    )
}

export default ReserveMeeting;