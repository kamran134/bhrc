import React, { FunctionComponent, ReactNode } from 'react';
import { ImArrowLeft2, ImArrowRight2 } from 'react-icons/im';

interface PaginationProps {
    page: number;
    count: number;
    url: string;
}

const Pagination: FunctionComponent<PaginationProps> = (props) => {
    const pageCount = props.count % 6 === 0 ? props.count / 6 
        : props.count / 6 - (props.count / 6) % 1 + 1;

    let badges: ReactNode[];

    const renderMinimum = (page: number, url: string): ReactNode => {
        badges = [];        

        if (page > 1) badges.push(
            <a href={`${url}?page=${page - 1}`} className={'bhrc-pagination__badge arrow'} key={0}>
                {<ImArrowLeft2 />}
            </a>
        );

        for (let i = 1; i <= pageCount; i++) {
            badges.push(
                <a
                    href={`${url}?page=${i}`}
                    className={i === page ? 'bhrc-pagination__badge active' : 'bhrc-pagination__badge'}
                    key={i}>
                    {i}
                </a>
            );
        }

        if (page < pageCount) {
            badges.push(
                <a href={`${url}?page=${page+1}`} className={'bhrc-pagination__badge arrow'} key={pageCount + 1}>
                    {<ImArrowRight2 />}
                </a>
            );
        }

        return badges;
    }

    const renderMaximum = (page: number, url: string): ReactNode => {
        badges = [];

        badges.push(
            <a href={`${url}?page=${page - 1}`} className={'bhrc-pagination__badge arrow'} key={0}>
                {<ImArrowLeft2 />}
            </a>
        );

        badges.push(
            <a
                href={`${url}?page=1`}
                className={'bhrc-pagination__badge'}
                key={1}>
                {1}
            </a>
        );

        badges.push(
            <div className='bhrc-pagination__badge' key={2}>
                ...
            </div>
        );

        badges.push(
            <a
                href={`${url}?page=${page}`}
                className={'bhrc-pagination__badge active'}
                key={3}>
                {page}
            </a>
        );

        badges.push(
            <a
                href={`${url}?page=${page+1}`}
                className={'bhrc-pagination__badge'}
                key={4}>
                {page+1}
            </a>
        );

        badges.push(
            <div className='bhrc-pagination__badge' key={5}>
                ...
            </div>
        );

        badges.push(
            <a
                href={`${url}?page=${pageCount}`}
                className={'bhrc-pagination__badge'}
                key={6}>
                {pageCount}
            </a>
        );

        badges.push(
            <a href={`${url}?page=${page - 1}`} className={'bhrc-pagination__badge arrow'} key={7}>
                {<ImArrowRight2 />}
            </a>
        );

        return badges;
    }

    const renderLarge = (page: number, url: string): ReactNode => {
        badges = [];

        badges.push(
            <a href={`${url}?page=${page - 1}`} className={'bhrc-pagination__badge arrow'} key={0}>
                {<ImArrowLeft2 />}
            </a>
        );

        badges.push(
            <a
                href={`${url}?page=1`}
                className={'bhrc-pagination__badge'}
                key={1}>
                {1}
            </a>
        );

        badges.push(
            <div className='bhrc-pagination__badge' key={2}>
                ...
            </div>
        );

        for (let i = pageCount - 3; i <= pageCount; i++) {
            badges.push(
                <a
                    href={`${url}?page=${i}`}
                    className={i === page ? 'bhrc-pagination__badge active' : 'bhrc-pagination__badge'}
                    key={i}>
                    {i}
                </a>
            );
        }

        page !== pageCount && badges.push(
            <a href={`${url}?page=${page - 1}`} className={'bhrc-pagination__badge arrow'} key={7}>
                {<ImArrowRight2 />}
            </a>
        );

        return badges;
    }

    const renderSmall = (page: number, url: string): ReactNode => {
        badges = [];
        badges.push(
            <a href={`${url}?page=${page - 1}`} className={'bhrc-pagination__badge arrow'} key={0}>
                {<ImArrowLeft2 />}
            </a>
        );

        for (let i = 1; i <= 3; i++) {
            badges.push(
                <a
                    href={`${url}?page=${i}`}
                    className={i === page ? 'bhrc-pagination__badge active' : 'bhrc-pagination__badge'}
                    key={i}>
                    {i}
                </a>
            );
        }

        badges.push(
            <div className='bhrc-pagination__badge' key={4}>
                ...
            </div>
        );

        badges.push(
            <a
                href={`${url}?page=${pageCount}`}
                className={'bhrc-pagination__badge'}
                key={6}>
                {pageCount}
            </a>
        );

        badges.push(
            <a href={`${url}?page=${page - 1}`} className={'bhrc-pagination__badge arrow'} key={7}>
                {<ImArrowRight2 />}
            </a>
        );

        return badges;
    }

    const renderPagination = (page: number, count: number, url: string): ReactNode => {
        if (count < 7) return (<></>);
        else {
            if (pageCount <= 5) {
                return renderMinimum(page, url)
            } else {
                if (page >= 3) {
                    if (pageCount > 6) {
                        if ((pageCount - page) >= 4) {
                            return renderMaximum(page, url);
                        } else {
                            return renderLarge(page, url);
                        }
                    } else {
                        return renderMinimum(page, url);
                    }
                } else {
                    return renderSmall(page, url);
                }
            }
        }
    }

    return (
        <div className='bhrc-pagination'>
            {renderPagination(props.page, props.count, props.url)}
        </div>
    );
}

export default Pagination;