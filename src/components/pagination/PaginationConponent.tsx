'use client';

import React, { FC } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import styles from './Pagination.module.css';
type PaginationProps = {
    totalPages: number;
};

const PaginationComponent: FC<PaginationProps> = ({ totalPages }) => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const currentPage = searchParams.get('page') ? parseInt(searchParams.get('page')!) : 1;

    const updatePage = (newPage: number) => {
        const params = new URLSearchParams(searchParams.toString());
        params.set('page', newPage.toString());
        router.push(`?${params.toString()}`);
    };

    const onClickPrevHandler = () => {
        if (currentPage > 1) {
            updatePage(currentPage - 1);
        }
    };
    const onClickNextHandler = () => {
        if (currentPage < totalPages) {
            updatePage(currentPage + 1);
        }
    };

    return (
        <div className={styles.pagination}>
            <button onClick={onClickPrevHandler} disabled={currentPage <= 1}>Prev</button>
            <button onClick={onClickNextHandler} disabled={currentPage >= totalPages || currentPage >= 500}>Next</button>
        </div>
    );
};

export default PaginationComponent;
