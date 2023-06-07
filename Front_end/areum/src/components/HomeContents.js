import React from 'react';

const HomeContents = ({posts}) => {
    return (
        <div className="contents">
        {posts.map((page) => (
          <a href={`/PostDetail/${page.id}`} key={page.id} style={{ textDecoration: "none" }} className="home-contents">
          {page.pageName}
        </a>
        ))}
      </div>
    );
};

export default HomeContents;