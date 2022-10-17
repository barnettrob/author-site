import * as React from 'react';
import { Link } from 'gatsby';

// Create URL path for numeric pagination
const getPageNumberPath = (currentIndex) => {
  if (currentIndex === 0) {
    return '/blogs'
  }
  return '/blogs/' + (currentIndex + 1)
}

export const Pagination = ({ pageInfo }) => {
  
  if (!pageInfo) return null
  const { currentPage, pageCount } = pageInfo

  // Create URL path for previous and next buttons
  const prevPagePath = currentPage - 1 === 1 ? '/blogs' : '/blogs' + (currentPage - 1).toString()
  const nextPagePath = '/blogs/' + (currentPage + 1).toString()

  // Check if page is first or last to disable previous and next buttons
  const prevClass = currentPage === 1 ? 'disabled' : 'enabled'
  const nextClass = currentPage === pageCount ? 'disabled' : 'enabled'

  return (
    <ul className="pagination justify-content-center">
      <li className='page-item'>
        <Link className={`${prevClass} page-link`} to={prevPagePath} rel="prev">
          {'Previous'}
        </Link>
      </li>
      {/*  Render numeric pagination  */}
      {Array.from({ length: pageCount }, (_, i) => {
        let numClass = 'pageNumber'
        if (currentPage === i + 1) {
          numClass = 'currentPage active'
        }
        return (
          <li className='page=item' key={i + 1}>
            <Link to={getPageNumberPath(i)} className={`${numClass} page-link`}>
              {i + 1}
            </Link>
          </li>
        )
      })}
      <li className='page-item'>
        <Link className={`${nextClass} page-link`} to={nextPagePath} rel="next">
          {'Next'}
        </Link>
      </li>
    </ul>
  )
}