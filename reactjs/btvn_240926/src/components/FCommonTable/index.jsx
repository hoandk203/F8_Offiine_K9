const FCommonTable = ({ columns, rows, onUpdate, onDelete }) => {
    return (
        <>
            <div className="user-table">
                <table
                    style={{ width: "100%" }}
                    border={1}
                    cellPadding={0}
                    cellSpacing={0}
                >
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
                                                    <button
                                                        onClick={(e) => {
                                                            onUpdate(e, row);
                                                        }}
                                                    >
                                                        Edit
                                                    </button>
                                                    <button
                                                        onClick={(e) => {
                                                            onDelete(e, row.id);
                                                        }}
                                                    >
                                                        Delete
                                                    </button>
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
            </div>
        </>
    );
};

export default FCommonTable;
