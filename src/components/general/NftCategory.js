import React from 'react';
import { Link } from 'react-router-dom';
import { formatCategory } from '../../helpers/utils';

function Category({ category }) {
    return (
        <p className='mb-0 d-flex align-items-center'>
            <span className='pt-1 nft-icons-mini'>
                <i className='las la-icons'></i>
            </span>
            {/* <span>category: </span> */}
            {category ? (
                <Link className='text-reset' to={`/categories/${category}`}>
                    <span className='text-white ms-1 nft-text-mini'>{formatCategory(category)}</span>
                </Link>
            ) : (
                <span className='text-white ms-1 nft-text-mini'>No Cateogry</span>
            )}
        </p>
    );
}

export default Category;
