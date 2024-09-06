import "./pagination.css";

export default function Pagination({ totalPosts, postPerPage, currentPage, setCurrentPage }) {
   const totalPages = Math.ceil(totalPosts / postPerPage);

   const handlePageClick = (page) => {
       setCurrentPage(page);
   };

   return (
       <div className="pagination">
           {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
               <button
                   key={page}
                   onClick={() => handlePageClick(page)}
                   className={page === currentPage ? 'active' : ''}
               >
                   {page}
               </button>
           ))}
       </div>
   );
}
