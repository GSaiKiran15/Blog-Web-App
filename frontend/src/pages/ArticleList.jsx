import {useLoaderData} from 'react-router-dom'
import { Link } from "react-router-dom";
export default function ArticlesList() {
    const {data} = useLoaderData()
    return (
         <>
      <nav className="articles-nav">
        <ul className="articles-nav__list">
          <li>
            <Link to="/post" className="articles-nav__link">+</Link>
          </li>
        </ul>
      </nav>

      <div className="articles-container">
        {data.map(article => (
          <Link
            key={article.id}
            to={`/articles/${article.id}`}
            className="articles-item"
          >
            <h3 className="articles-item__title">
              {article.title}
            </h3>
            {/* <p>{article.content.substring(0, 150)}…</p> */}
          </Link>
        ))}
      </div>
    </>
    );
}