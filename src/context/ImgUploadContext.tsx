import React, { ChangeEvent, useState } from "react";
import styles from "../components/ImgUpload/ImgUpload.module.css";
import Rectangle from "../../public/images/Rectangle 27.png";

interface ImageUploadProps{
    setUploadImg: (file:File | undefined) => void;
}

export const ImageUpload: React.FC<ImageUploadProps> = ({setUploadImg}) => {
    const [uploadedSrc, setUploadedSrc] = useState<string>(Rectangle);

    const handleChangeImg = (e:ChangeEvent<HTMLInputElement>) => {
        if(e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            setUploadImg(file);
            const previewUrl = URL.createObjectURL(file); //이미지 경로로 바꿔서 보여줘야함
            setUploadedSrc(previewUrl);
        }
    };

    return(
        <div className={styles.img_box}>
        <label htmlFor="Image">
            <img className={styles.default_img}
                src={uploadedSrc}
                alt="프로필 이미지" />
        </label>
            <input className={styles.input_file}
                type="file"
                name="profileImage"
                id="Image" 
                accept="image/*" //모든 타입의 이미지 파일 허용
                onChange={handleChangeImg}
                />
        </div>
    )
}