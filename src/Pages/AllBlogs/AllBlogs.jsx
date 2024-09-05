import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Loader } from "../../Components";
import styles from "./AllBlogs.module.scss"; // Import the module

const AllBlogs = () => {
  const proxy = import.meta.env.VITE_PROXY;

  const [blogs, setBlogs] = useState();

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const blog = await axios.get(`${proxy}/post/all-post`).then((result) => {
        setBlogs(result?.data?.posts);
      });
    } catch (err) {
      console.log(err);
    }
  };

  if (!blogs) return <Loader />;

  return (
    <div className={styles.blogContainer}>
      <h1 className={styles.blogListHeading}>Articles</h1>

      <div className={styles.blogsList}>
        {Object.keys(blogs).length === 0 ? (
          <div className={styles.unavailable}>
            <div className={styles.unHead}>Articles Unavailable</div>
          </div>
        ) : (
          blogs.map((item) => (
            <div key={item?._id} className={styles.blogCard}>
              <Link key={item?._id} to={`/articles/${item?._id}`}>
                <di>
                  <img
                    className={styles.cover}
                    src={item?.cover}
                    alt="unavailable"
                  />
                </di>
                <h2 className={styles.title}>
                  {item?.title.length < 100
                    ? item?.title
                    : item?.title.slice(0, 100) + "..."}
                </h2>

                <div className={styles.author}>{item?.author}</div>
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default AllBlogs;
