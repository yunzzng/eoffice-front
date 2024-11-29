import Sidebar from "../../components/sidebar/Siderbar";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import { NavigateButtons } from "../../context/ButtonContext";
import { useNavigate } from "react-router-dom";

const ReserveMeeting = () => {
    const navigate = useNavigate();

    const reserve = () => {
        navigate('/')
    }
    return (
        <>
        <Header />
        <Sidebar />
        <Footer />
        <NavigateButtons label="회의실 예약하기" onClick={} />
        </>
    )
}

export default ReserveMeeting;