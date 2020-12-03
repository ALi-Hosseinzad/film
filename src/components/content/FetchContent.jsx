// import React, { useEffect, useState } from "react";
// import ContentLoading from "./ContentLoading";
// import ContentItems from "./ContentItems";
// import InfiniteScroll from "react-infinite-scroll-component";

// const FetchContents = () => {
//   const ListLoading = ContentLoading(ContentItems);
//   const [appState, setAppState] = useState({
//     loading:false,
//     repos:[],
//     hasMore:true,
//   });
//   const [next, setNext] = useState([]);
//   const pageURL = "/widgets/home-page?count=5";

//  function fetch(url) {
//     const apiUrl = "http://api-v2.filmnet.ir";
//     const URL = apiUrl + url;
//     setAppState({ loading: true });
//     fetch(URL)
//       .then((repos) => repos.json())
//       .then((repos) => {
//     setAppState({
//       loading: false,
//       repos: [repos],
//     });
//    // setNext((prev) => [...prev, repos.meta.next_url]);
//     //if (!repos.meta.next_url) {
//       //setAppState({ hasMore: false });
//     //}
//   })
// }
//   useEffect(() => {
//     fetch(pageURL);
//   });

//   function FetchMore(props, prevPrpos) {
//     console.log(props.repos);
//      // props.repos.map((item) => {
//         prevPrpos.map((val) => {
//          // if (item.meta.next_url === val) {
//             console.log(val);
//             //Fetch(val);
//           //}
//         });
//        //});
//   }
//   return (
//     <div id="scrollableDiv" style={{ height: "auto", overflow: "auto" }}>
//       <InfiniteScroll
//         dataLength={window.length}
//         hasMore={false}
//         inverse={true}
//         scrollableTarget="scrollableDiv"
//         //key={console.log(appState.repos.meta)}
//         next={FetchMore(appState, next)}
//       >
//         {/* {appState.repos.map((item, index) => ( */}
//           <ListLoading  isLoading={false} repos={appState.repos} />
//         {/* ))} */}
//       </InfiniteScroll>
//     </div>
//   );
// };
// export default FetchContents;
