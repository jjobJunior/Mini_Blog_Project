import styles from "./Search.module.css";
import PostsDetail from "../../components/postsDetail/PostsDetail";
import { Link } from "react-router-dom";
import { useQuery } from "../../hooks/useQuery";
import { useFetchDocuments } from "../../hooks/useFetchDocuments";

const Search = () => {
  const query = useQuery();
  const search = query.get("q");

  const { documents: posts } = useFetchDocuments("posts", search);

  return (
    <div className={styles.container}>
      <h2>search</h2>
      <div>
        {posts && posts.length === 0 && (
          <div className={styles.no_posts}>
            <p>Não foram encontrados resultados da sua busca </p>
            <Link to="/" className="btn btn-dark">
              Voltar
            </Link>
          </div>
        )}
        {posts &&
          posts.map((post) => <PostsDetail key={post.id} post={post} />)}
      </div>
    </div>
  );
};

export default Search;
