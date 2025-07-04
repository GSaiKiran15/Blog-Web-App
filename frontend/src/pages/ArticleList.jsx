import {useLoaderData} from 'react-router-dom'
import { Link } from "react-router-dom";
export default function ArticlesList() {
    const {data} = useLoaderData()
    return (
        <>
          {console.log()
          }
          {data.map(a => (
      <Link key={a.title} to={`/articles/${a.id}`}>
        <h3>{a.title}</h3>
        <p>{a.content[0].substring(0, 150)}</p>
      </Link>
    ))}
        </>
    );
}