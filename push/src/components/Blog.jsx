const Blog = ({ blogs }) => {
  //  http://localhost:8000/blogs

  return (
    <div>
      {blogs.map((blog) => {
        return (
          <div id={blog.id}>
            <h2>{blog.title}</h2>
            <p>{blog.body}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Blog;
