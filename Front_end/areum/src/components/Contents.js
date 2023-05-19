
import React from 'react';


const Contents = ({posts}) => {
    return (
    <div className="contents">
        {posts.map((page) => {
            return(
            <div className="lab-content" key={page.id}>
                <h4>{page.pageName}</h4>
                <p>{page.pageBody}</p>
                <hr className="content-divider" />
            </div>
            );
        })}
    </div>
    );
};

export default Contents;