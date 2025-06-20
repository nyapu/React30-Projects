import React from 'react';

function Blog() {
  const posts = [
    {
      title: 'Integrating Multiple APIs in React',
      date: 'June 20, 2025',
      content: 'Learn how to fetch and combine data from various APIs and display them using reusable React components.'
    },
    {
      title: 'Mastering useEffect and useState',
      date: 'June 15, 2025',
      content: 'We dive into React hooks and show how to manage component lifecycle and data fetching effectively.'
    }
  ];

  return (
    <div className="container py-5">
      <h2 className="text-center text-success fw-bold mb-4">Our Blog</h2>
      <div className="row justify-content-center">
        {posts.map((post, index) => (
          <div key={index} className="col-md-6 mb-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title text-primary fw-bold">{post.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{post.date}</h6>
                <p className="card-text">{post.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
