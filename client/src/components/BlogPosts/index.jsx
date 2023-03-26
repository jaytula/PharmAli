import { useEffect, useState } from "react";
import BlogPostItem from "../BlogPostItem/index.jsx";
import "../../styles/BlogPosts.css";
import Articles from "../Articles/index.jsx";
import axios from "axios";
import SelectSmall from "../Category/index.jsx";
import { useNavigate } from "react-router-dom";
import PostAddIcon from "@mui/icons-material/PostAdd";
import "../../styles/MyBlogs.css";

const BlogPosts = (props) => {
  // Set the blogs and categories to show
  const navigate = useNavigate();
  const [category, setCategory] = useState("");
  const [blogs, setBlogs] = useState([]);
  const [categories, setCategories] = useState([]);
  const allBlogs = props.allBlogs;

  // Get all blogs and categories when page is first visited
  useEffect(() => {
    Promise.all([axios.get("/blogs"), axios.get("/categories")]).then(
      (data) => {
        setBlogs(data[0].data);
        props.setAllBlogs(data[0].data);
        setCategories(data[1].data);
      }
    );
  }, [props.user]);

  useEffect(() => {
    const filteredByCategory =
      category === "None"
        ? allBlogs
        : allBlogs.filter((blog) => blog.category === category);
    setBlogs(filteredByCategory);
  }, [category]);

  const deletePost = (id) => {
    axios.post("/blogs/delete", id).then(() => {
      const newBlogPost = blogs.filter((blog) => blog.id !== id);
      setBlogs(newBlogPost);
    });
  };

  // Render all articles and available categories
  return (
    <>
      <section className="section">
        {!props.myBlogs && (
          <div className="articles-blog">
            <Articles isBlog={true} />
          </div>
        )}
        <div className="myBlogPosts">
          <span className="blogPostsTitle">
            <div className="bloggg">
              <h1>{props.myBlogs ? "My Blogs" : "Blogs"}</h1>
            </div>
            <div className="category-dropdown">
              <SelectSmall
                color="primary"
                categories={categories}
                category={category}
                setCategory={setCategory}
                blogFiltering={true}
              />
              {props.user && (
                <div className="addBlogButton">
                  <button
                    className="blog-button"
                    onClick={() => navigate("/blogs/add")}
                    ><h1 className="addtext"> 

                    Add a blog
                    </h1>
                  <PostAddIcon
                    fontSize="large"
                    color="white"
                  />
                  </button>
                </div>
              )}
            </div>
          </span>
          <div className="blogdiv">

          {blogs.map((blog) => (
            <BlogPostItem
              key={blog.id}
              blog={blog}
              setBlog={() => navigate(`/blogs/${blog.id}`)}
              user={props.user}
              editPost={() => navigate(`/blogs/edit/${blog.id}`)}
              deletePost={() => deletePost(blog.id)}
            />
          ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPosts;
