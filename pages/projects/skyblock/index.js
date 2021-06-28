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
                    <th>Item</th>
                    <th>Buy Price</th>
                    <th>NPC Buy Price</th>
                    <th>Sell Price</th>
                    <th>Sell Price (with tax)</th>
                    <th>NPC Sell Price</th>
                    <th>Potential Profit</th>
                </tr>
            </table>
        </div>
    )
}