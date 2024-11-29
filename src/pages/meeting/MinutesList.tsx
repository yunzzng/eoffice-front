// import { useEffect } from 'react';
// import Footer from '../../components/footer/Footer';
// import Header from '../../components/header/Header';
// import Sidebar from '../../components/sidebar/Siderbar';
// import styles from '../../css/meetingStyles/minutesList.module.css';

// import { useSearchParams } from 'react-router-dom';

// const MinutesList = () => {
//   const [searchParams, setSearchParams] = useSearchParams();
//   const [pagesData, setPagesData] = useState();
//   const page = searchParams.get('page') || '1';

// const pagingNation = (totalDataNum: number, page: string) => {
//   const displayNum = 10;
//   const totalPageNum = Math.ceil(totalDataNum / displayNum);

//   const StringToNumPage = Number(page);

//   const startPage =
//     StringToNumPage < 0 ? 1 : (StringToNumPage - 1) * displayNum + 1; // 1,11,91

//   const endPage =
//     StringToNumPage > totalPageNum
//       ? totalPageNum
//       : StringToNumPage * displayNum;

//   setPageData((prev) => ({ ...prev, startPage, endPage, totalPageNum }));
// };

//   const meetingListFetch = async () => {
//     const meetingListRequest = await fetch('/', {
//       method:''
//       headers: {
//         'Content-type': 'application/json',
//       },
//       body: '',
//     });
//   };

//   useEffect(() => {
//     setSearchParams({ page: page });
//   }, [page]);

//   return (
//     <>
//       <div className={styles.container}>
//         <Sidebar />

//         <div className={styles.main_container}>
//           <Header />
//           <main className={styles.main}>
//             <div className={styles.main_content}>
//               <div>
//                 <div>
//                   <div></div>

//                   <div></div>
//                 </div>
//               </div>

//               <ul>
//                 {Array.from({ length: 10 }, (_, index) => index + 1).map(
//                   (pageNum) => (
//                     <li>{pageNum}</li>
//                   )
//                 )}
//               </ul>
//             </div>
//           </main>
//           <Footer />
//         </div>
//       </div>
//     </>
//   );
// };

// export default MinutesList;
