import styles from './SearchItem.module.css';
import { Link } from 'react-router-dom';
const SearchItem=({arr})=>{
    return(<>
    <div className={styles.container}>
        {
            arr.map((ele)=>{
                return <Link to={`http://localhost:5173/${ele.id}`} key={ele.id}>{ele.title}</Link>
            })
        }
    </div>
    </>)
}

export default SearchItem;