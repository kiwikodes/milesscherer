import styles from './styles.module.css';

export default function Skyblock() {
    return (
        <div className={styles.container}>
            <style jsx global>{`
                body {
                    margin: 0px;
                    padding: 0px;
                }
            `}</style>
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