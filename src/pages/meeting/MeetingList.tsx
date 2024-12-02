import Sidebar from "../../components/sidebar/Siderbar";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import { EditButton } from "../../components/button/EditButton";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

interface addPostType {
    id:string;
    name: string;
    location: string;
    person: number | string;
    file: string;
}

const MeetingList = () => {
    const navigate = useNavigate();
    const [post,setPost] = useState<addPostType[]>([]);

    const handleEditClick = (id:string) => {
        navigate(`/editmeeting/${id}`);
    }

    const getPost = async() => {
        try{
            const response = await fetch("/api", {
                method: "GET"
            });
            if(response.ok) {
                const data = await response.json();
                console.log(data);
                setPost(data);
            }else{
                console.log('회의실 정보 요청 실패');
            }
        }catch(err) {
            console.log('회의실 정보 가져오기 실패', err)
        }
    }

    useEffect(() => {
        getPost();
    },[])

    return (
        <>
        <Header />
        <Sidebar />
        <Footer />
        <div>
            <ul>
                {post.map((post) => (
                    <li key={post.id}>
                        <img src={post.file} />
                        <label>이름</label>
                        <input name="name" value={post.name} />
                        <EditButton onClick={() => handleEditClick(post.id)}/>
                    </li>
                ))}
            </ul>
        </div>
        </>
    )
}

export default MeetingList;