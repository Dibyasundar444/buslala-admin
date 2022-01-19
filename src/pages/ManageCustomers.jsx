import React from 'react'
import { GrBus } from 'react-icons/gr';
import { Link } from 'react-router-dom';
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

    // const dataTransfer = (row) => {
    //     console.log(row);
    //     console.log("dataTransfer")
    // }
    return (
        <div className='h-full flex items-center justify-center flex-col overflow-hidden px-8 py-14'>
            <div className='flex items-center text-left w-full pb-4 text-3xl justify-between'>
                <div className='flex'>
                    <GrBus className='mr-4'/>
                    Manage Customers
                </div>

                <Link to="/new-customer-form">
                    <AddNewButton title="Add New Customer"/>
                </Link>
            </div>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 1150 }} aria-label="caption table">
                    <TableHead style={{ boxShadow: '0px 1px 9px rgba(0, 0, 0, 0.12)', borderRadius: '12px' }}>
                        <TableRow>
                            <TableCell>Customer ID</TableCell>
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
                        <TableRow key={row.customerId}>
                            <TableCell component="th" scope="row">
                                {row.customerId}
                            </TableCell>
                            <TableCell align="center">{row.name}</TableCell>
                            <TableCell align="center">{row.email}</TableCell>
                            <TableCell align="center">{row.phoneNo}</TableCell>
                            <TableCell align="center"><View title={row.view}/></TableCell>
                            <TableCell align="center">
                                <Link to="/new-customer-form">
                                    <Edit title={row.edit} />
                                </Link>
                            </TableCell>
                            <TableCell align="center"><Delete title={row.del}/></TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default ManageCustomers
