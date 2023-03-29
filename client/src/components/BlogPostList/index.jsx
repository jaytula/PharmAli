import { useEffect, useState } from "react";
import BlogPostListItem from "../BlogPostListItem";
import "../../styles/BlogPosts.css";
import ArticleList from "../ArticleList";
import axios from "axios";
import SelectSmall from "../Category";
import { useNavigate } from "react-router-dom";
import PostAddIcon from "@mui/icons-material/PostAdd";
import "../../styles/MyBlogs.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BlogPostList = (props) => {
  // Set the blogs and categories to show
  const navigate = useNavigate();
  const allBlogs = props.allBlogs;
  const [category, setCategory] = useState("");
  const [blogs, setBlogs] = useState(allBlogs);
  const [categories, setCategories] = useState([]);

  // Get all blogs and categories when page is first visited
  useEffect(() => {
    Promise.all([
      axios.get("/categories")
    ])
    .then((data) => setCategories(data[0].data));
  }, []);

  useEffect(() => {
    setBlogs(allBlogs);
    setCategory("None");
  }, [allBlogs]);

  useEffect(() => {
    const filteredByCategory = (category === "None") ? allBlogs : allBlogs.filter((blog) => blog.category === category);
    setBlogs(filteredByCategory);
  }, [category]);

  const deletePost = (id, title) => {
    axios.post("/blogs/delete", id)
    .then(() => {
      addNotification(title)
    });
  };

  const addNotification = (title) => toast(`Blog ${title} has been deleted`);

  // Render all articles and available categories
  return (
    <>
      <section className="section">
        {!props.myBlogs && (
          <div className="articles-blog">
            <ArticleList isBlog={true} />
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
              <BlogPostListItem
                key={blog.id}
                blog={blog}
                setBlog={() => navigate(`/blogs/${blog.id}`)}
                user={props.user}
                editPost={() => navigate(`/blogs/edit/${blog.id}`)}
                deletePost={() => deletePost(blog.id, blog.title)}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPostList
