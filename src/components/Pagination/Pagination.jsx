import React from 'react'
import ReactPaginate from 'react-paginate'

import './Pagination.css'

const Pagination = ({ handlePageClick, pageCount }) => {
    return (
        <div>
            <ReactPaginate
            previousLabel={'Prev'}
            nextLabel={'Next'}
            breakLabel={'...'}
            pageCount={pageCount}
            marginPagesDisplayed={3}
            pageRangeDisplayed={4}
            onPageChange={handlePageClick}
            containerClassName={'pagination justify-content-center page-container'}
            pageClassName={'page-item'}
            pageLinkClassName={'page-link'}
            previousClassName={'page-item'}
            previousLinkClassName={'page-link'}
            nextClassName={'page-item'}
            nextLinkClassName={'page-link'}
            breakClassName={'page-item'}
            breakLinkClassName={'page-link'}
            activeClassName={'active'}
            />
        </div>
    )
}

export default Pagination;