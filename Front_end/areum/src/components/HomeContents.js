import React from 'react';


const HomeContents = ({posts}) => {
    return (
    <div className="contents">
        {posts.map((page) => {
            return(
                <ul key={page.id}>
                <li><a href="/lab/content-1" style={{ textDecoration: "none" }}>{page.pageName}</a></li>
                <hr className="content-divider" />
                </ul>
            );
        })}
    </div>
    );
};

export default HomeContents;