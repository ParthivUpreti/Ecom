import { useLoaderData } from "react-router-dom";
import styles from './Allpost.module.css';
import Post from "./Post";
import { Link } from "react-router-dom";
const AllPost=()=>{
    let newarr=useLoaderData();
    return(<>
    <div className={styles.container}>
        {newarr.map((ele)=>{
            return <Link to={`http://localhost:5173/${ele.id}`} key={ele.title}><Post  ele={ele}></Post></Link>
        })}
    </div>
    </>)
}
export default AllPost;