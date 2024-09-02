import React, { useState } from 'react';

const Header = () => {
   let [forMobile, setMobile] = useState("menubar")
   const toMoble = () =>{
       if(forMobile === "menubar"){
           setMobile("menubar mobilenav-activate")
       }else {
           setMobile("menubar")
       }
   }
   return (
       <header className="">
       <div
         className="container"
         style={{
           padding: '25px 25px'
         }}
       >
         <div className="header">
           <div className="logo">
             <h1>
               <a
                 aria-current="page"
                 className=""
                 href="/"
               >
                 <svg
                   viewBox="0 0 185 208.4"
                   xmlns="http://www.w3.org/2000/svg"
                 >
                   <path
                     d="M176.6 46L100.9 2.2c-5.2-3-11.6-3-16.7 0L8.4 46C3.2 49 0 54.5 0 60.5V148c0 6 3.2 11.5 8.4 14.5l75.8 43.7c5.2 3 11.6 3 16.7 0l75.8-43.7c5.2-3 8.4-8.5 8.4-14.5V60.5c-.1-6-3.3-11.5-8.5-14.5zm-51.2 19.1c-.3.9-.6 1.7-1.1 2.4l-46.4 65.3h41.3c3.1 0 5.7 2.5 5.7 5.7s-2.5 5.7-5.7 5.7H65c-3 0-5.5-2.5-5.5-5.5 0-.8.1-1.5.4-2.1.2-.7.6-1.3 1-1.9l46.6-65.5H67.7c-3.1 0-5.7-2.5-5.7-5.7s2.5-5.7 5.7-5.7h52.7c2.9 0 5.2 2.3 5.2 5.2.1.7 0 1.4-.2 2.1z"
                     data-darkreader-inline-fill=""
                     fill="#00cf5d"
                     style={{
                       '--darkreader-inline-fill': '#00a64a'
                     }}
                   />
                 </svg>
               </a>
             </h1>
           </div>
           <div onClick={toMoble} className="mobile-nav">
             <svg
               data-darkreader-inline-fill=""
               data-darkreader-inline-stroke=""
               fill="currentColor"
               height="1em"
               stroke="currentColor"
               strokeWidth="0"
               style={{
                 '--darkreader-inline-fill': 'currentColor',
                 '--darkreader-inline-stroke': 'currentColor'
               }}
               viewBox="0 0 448 512"
               width="1em"
               xmlns="http://www.w3.org/2000/svg"
             >
               <path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z" />
             </svg>
           </div>
           <ul className={forMobile}>
             <li>
               <a href="#about">
                 About
               </a>
             </li>
             <li>
               <a href="#skill">
                 Skill
               </a>
             </li>
             <li>
               <a href="#portfolio">
                 Portfolio
               </a>
             </li>
             <li>
               <a href="#contact">
                 Contact
               </a>
             </li>
             <li>
               <a
                 href="https://with.zonayed.me"
                 rel="noopener noreferrer"
                 target="__blank"
               >
                 Blog
               </a>
             </li>
             <li>
               <a
                 className="btn-download"
                 href="https://github.com/zonayedpca/zonayed.me/raw/master/src/data/file/MyResume.pdf"
                 rel="noopener noreferrer"
                 target="_blank"
               >
                 Resume
               </a>
             </li>
           </ul>
         </div>
       </div>
     </header>
   );
};

export default Header;