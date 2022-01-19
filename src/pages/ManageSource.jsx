import React from 'react'
import { GrBus } from 'react-icons/gr';
//Material-UI
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Edit from '../components/Edit';

function createData(sourceId, name, pickupTime, edit) {
    return { sourceId, name, pickupTime, edit };
}

const rows = [
    createData('1', 'Delhi', '07:05pm', 'Edit'),
    createData('2', 'Delhi', '07:05pm', 'Edit'),
    createData('3', 'Delhi', '07:05pm', 'Edit'),
    createData('4', 'Delhi', '07:05pm', 'Edit'),
    createData('5', 'Delhi', '07:05pm', 'Edit'),
    createData('6', 'Delhi', '07:05pm', 'Edit'),
    createData('7', 'Delhi', '07:05pm', 'Edit'),
    createData('8', 'Delhi', '07:05pm', 'Edit'),
    createData('9', 'Delhi', '07:05pm', 'Edit'),
];

const ManageSource = () => {
    return (
        <div className='h-full flex items-center justify-center flex-col overflow-y-scroll px-8'>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 1050 }} aria-label="caption table">
                    <TableHead style={{ boxShadow: '0px 1px 9px rgba(0, 0, 0, 0.12)', borderRadius: '12px' }}>
                        <TableRow>
                            <TableCell>Source ID</TableCell>
                            <TableCell align="center">Name</TableCell>
                            <TableCell align="center">Pickup Time</TableCell>
                            <TableCell align="center">Edit</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.sourceId}>
                            <TableCell component="th" scope="row">
                                {row.sourceId}
                            </TableCell>
                            <TableCell align="center">{row.name}</TableCell>
                            <TableCell align="center">{row.pickupTime}</TableCell>
                            <TableCell align="center"><Edit title={row.edit}/></TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default ManageSource
