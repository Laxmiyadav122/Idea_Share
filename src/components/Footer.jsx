import React from 'react';
// export default function Footer(){
//   return (
//     <footer style={{background:'#0f172a',color:'white',padding:'28px 0',marginTop:40}}>
//       <div className="container" style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
//         <div>
//           <strong>IdeaHub</strong>
//           <div style={{color:'var(--muted)',marginTop:8}}>Share, learn and build together</div>
//         </div>
//         <div style={{color:'var(--muted)'}}>© {new Date().getFullYear()} IdeaHub</div>
//       </div>
//     </footer>
//   );
// }


export default function Footer() {
    return (
      <footer className="footer">
        <div className="footer-left">
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>
  
        <div className="footer-right">
          <i className="fab fa-facebook"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-github"></i>
        </div>
      </footer>
    );
  }
  