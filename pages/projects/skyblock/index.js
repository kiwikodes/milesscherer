import styles from './styles.module.css';

export default function Skyblock() {
    return (
        <div className={styles.container}>
            <table className={styles.table}>
                <tr>
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>Age</th>
                </tr>
            </table>
        </div>
    )
}