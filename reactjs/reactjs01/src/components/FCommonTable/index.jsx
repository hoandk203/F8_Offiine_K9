const FCommonTable = ({ columns, rows }) => {
    return (
        <>
            <table style={{ width: "100%" }}>
                <thead>
                    <tr>
                        {columns.map((column) => (
                            <th key={column}>{column}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, ridx) => {
                        return (
                            <tr key={`${ridx}`}>
                                {columns.map((column) => {
                                    if (column === "action") {
                                        return (
                                            <td key={`${ridx}${column}`}>
                                                <button>Edit</button>
                                                <button>Delete</button>
                                            </td>
                                        );
                                    }
                                    return (
                                        <td key={`${ridx}${column}`}>
                                            {row[column]}
                                        </td>
                                    );
                                })}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </>
    );
};

export default FCommonTable;
