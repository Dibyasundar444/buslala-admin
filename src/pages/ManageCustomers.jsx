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

function createData(customerId, name, email, phoneNo, view, edit, del) {
    return { customerId, name, email, phoneNo, view, edit, del };
}

const rows = [
    createData('1', 'Rituraj Sinha', 'rituraj123@gmail.com', '1521541654', 'View', 'Edit', 'Delete'),
    createData('2', 'Rituraj Sinha', 'rituraj123@gmail.com', '1521541654', 'View', 'Edit', 'Delete'),
    createData('3', 'Rituraj Sinha', 'rituraj123@gmail.com', '1521541654', 'View', 'Edit', 'Delete'),
    createData('4', 'Rituraj Sinha', 'rituraj123@gmail.com', '1521541654', 'View', 'Edit', 'Delete'),
    createData('5', 'Rituraj Sinha', 'rituraj123@gmail.com', '1521541654', 'View', 'Edit', 'Delete'),
    createData('6', 'Rituraj Sinha', 'rituraj123@gmail.com', '1521541654', 'View', 'Edit', 'Delete'),
    createData('7', 'Rituraj Sinha', 'rituraj123@gmail.com', '1521541654', 'View', 'Edit', 'Delete'),
    createData('8', 'Rituraj Sinha', 'rituraj123@gmail.com', '1521541654', 'View', 'Edit', 'Delete'),
];

const ManageCustomers = () => {
    return (
        <div className='h-full flex items-center justify-center flex-col overflow-hidden px-8 py-14'>
            <div className='flex items-center text-left w-full pb-4 text-3xl justify-between'>
                <div className='flex'>
                    <GrBus className='mr-4'/>
                    Manage Customers
                </div>

                <div>
                    <AddNewButton title="Add New Customer"/>
                </div>
            </div>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 1050 }} aria-label="caption table">
                    <TableHead style={{ boxShadow: '0px 1px 9px rgba(0, 0, 0, 0.12)', borderRadius: '12px' }}>
                        <TableRow>
                            <TableCell>Customer ID</TableCell>
                            <TableCell align="right">Name</TableCell>
                            <TableCell align="right">Email</TableCell>
                            <TableCell align="right">Phone No.</TableCell>
                            <TableCell align="right">View</TableCell>
                            <TableCell align="right">Edit</TableCell>
                            <TableCell align="right">Delete</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.customerId}>
                            <TableCell component="th" scope="row">
                                {row.customerId}
                            </TableCell>
                            <TableCell align="right">{row.name}</TableCell>
                            <TableCell align="right">{row.email}</TableCell>
                            <TableCell align="right">{row.phoneNo}</TableCell>
                            <TableCell align="right">{row.view}</TableCell>
                            <TableCell align="right">{row.edit}</TableCell>
                            <TableCell align="right">{row.del}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default ManageCustomers