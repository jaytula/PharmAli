import { useEffect, useState } from "react";
import axios from "../../axiosInstance";
import BlogPostListItem from "../BlogPostListItem";
import ArticleList from "../ArticleList";
import SelectSmall from "../Category";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import PostAddIcon from "@mui/icons-material/PostAdd";
import 'react-toastify/dist/ReactToastify.css';
import "../../styles/BlogPosts.css";
import "../../styles/MyBlogs.css";

const BlogPostList = ({ allBlogs, myBlogs, user }) => {
  // Set the blogs and categories to show
  const navigate = useNavigate();
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

  // Update blogs whenever all blogs has a new/editted blog
  useEffect(() => {
    setBlogs(allBlogs);
    setCategory("None");
  }, [allBlogs]);

  // Filter through blogs everytime a category is chosen
  useEffect(() => {
    const filteredByCategory = (category === "None") ? allBlogs : allBlogs.filter((blog) => blog.category === category);
    setBlogs(filteredByCategory);
  }, [category, allBlogs]);

  const deletePost = (id, title) => {
    axios.post("/blogs/delete", id)
      .then(() => {
        addNotification(title)
      });
  };

  // Toaster notifications for blog creator when blog has been deleted
  const addNotification = (title) => toast(`Blog ${title} has been deleted`);

  return (
    <>
      <section className="section">
        {!myBlogs && (
          <div className="articles-blog">
            <ArticleList isBlog={true} />
          </div>
        )}
        <div className="myBlogPosts">
          <span className="blogPostsTitle">
            <div className="bloggg">
              <h1>{myBlogs ? "My Blogs" : "Blogs"}</h1>
            </div>
            <div className="category-dropdown">
              <SelectSmall
                color="primary"
                categories={categories}
                category={category}
                setCategory={setCategory}
                blogFiltering={true}
              />
              {user && (
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
                user={user}
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
