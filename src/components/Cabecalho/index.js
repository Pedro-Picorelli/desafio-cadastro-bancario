import { Link } from 'react-router-dom';
import styles from './Cabecalho.modules.css';

function Cabecalho() {
    return (
        <header className={styles.cabecalho} style={ {backgroundColor: "#FFFFFF", paddingTop: '10px'} }>
            <Link to="./" >
                <img src='https://www.groupsoftware.com.br/wp-content/themes/site-2020/images/marca-group.svg' width="142" height="50" alt="logo group" />
            </Link>
        </header>
    )
}

export default Cabecalho;