import { useAuth0 } from "@auth0/auth0-react";
import styles from './Profile.module.css';
const Profile=()=>{
    let {logout,user}=useAuth0();
    return(<>
        <h2>Hello {user.name}, Welcome to our webpage.</h2>
        <h2>{user.email}</h2>
        <button className={styles.logout} onClick={()=>{logout()}}>Log Out</button>
    </>)
}

export default Profile;