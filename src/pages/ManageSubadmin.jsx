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
import AddNewButton from '../components/AddNewButton';
import View from '../components/View';
import Edit from '../components/Edit';
import Delete from '../components/Delete';

function createData(subadminId, name, email, phoneNo, view, edit, del) {
    return { subadminId, name, email, phoneNo, view, edit, del };
}

const rows = [
    createData('1', 'Mridul srivastav', 'mridul123@gmail.com', '1521541654', 'View', 'Edit', 'Delete'),
    createData('2', 'Ankit Sharma', 'ankit123@gmail.com', '1521541654', 'View', 'Edit', 'Delete'),
];

const ManageSubadmin = () => {
    return (
        <div className='h-full flex items-center flex-col overflow-y-scroll px-8 py-14'>
            <div className='flex items-center text-left w-full pb-4 text-3xl justify-between'>
                <div className='flex'>
                    <GrBus className='mr-4'/>
                    Manage Subadmin
                </div>

                <div>
                    <AddNewButton title="Add New Subadmin"/>
                </div>
            </div>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 1050 }} aria-label="caption table">
                    <TableHead style={{ boxShadow: '0px 1px 9px rgba(0, 0, 0, 0.12)', borderRadius: '12px' }}>
                        <TableRow>
                            <TableCell>Subadmin ID</TableCell>
                            <TableCell align="center">Name</TableCell>
                            <TableCell align="center">Email</TableCell>
                            <TableCell align="center">Phone No.</TableCell>
                            <TableCell align="center">View</TableCell>
                            <TableCell align="center">Edit</TableCell>
                            <TableCell align="center">Delete</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.subadminId}>
                            <TableCell component="th" scope="row">
                                {row.subadminId}
                            </TableCell>
                            <TableCell align="center">{row.name}</TableCell>
                            <TableCell align="center">{row.email}</TableCell>
                            <TableCell align="center">{row.phoneNo}</TableCell>
                            <TableCell align="center"><View title={row.view}/></TableCell>
                            <TableCell align="center"><Edit title={row.edit}/></TableCell>
                            <TableCell align="center"><Delete title={row.del}/></TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default ManageSubadmin
