import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import "../../index.css";
import style from "./style.module.css";
const FCommonTable = ({ columns, rows, onUpdate, onDelete, maxWidth }) => {
    return (
        <>
            <TableContainer
                sx={{ maxWidth: maxWidth, margin: "0 auto" }}
                component={Paper}
            >
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.name}
                                    width={column?.width}
                                    className={style["text--red"]}
                                >
                                    {column.text}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row, ridx) => {
                            return (
                                <TableRow key={`${row.id}`}>
                                    {columns.map((column) => {
                                        if (column.name === "action") {
                                            return (
                                                <TableCell
                                                    key={`${row.id}${column.name}`}
                                                >
                                                    <EditIcon
                                                        sx={{
                                                            color: "green",
                                                        }}
                                                        onClick={(e) => {
                                                            onUpdate(row);
                                                        }}
                                                        className="pointer"
                                                    />
                                                    <DeleteIcon
                                                        sx={{
                                                            color: "red",
                                                        }}
                                                        onClick={(e) => {
                                                            onDelete(row.id);
                                                        }}
                                                        className="pointer"
                                                    />
                                                </TableCell>
                                            );
                                        }
                                        return (
                                            <TableCell
                                                key={`${row.id}${column.name}`}
                                            >
                                                {row[column.name]}
                                            </TableCell>
                                        );
                                    })}
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
};

export default FCommonTable;
