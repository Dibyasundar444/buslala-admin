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

function createData(driverId, name, email, phoneNo, view, edit, del) {
    return { driverId, name, email, phoneNo, view, edit, del };
}

const rows = [
    createData('1', 'Mukund Rajpal', 'mukund123@gmail.com', '1521541654', 'View', 'Edit', 'Delete'),
    createData('2', 'Mukund Rajpal', 'mukund123@gmail.com', '1521541654', 'View', 'Edit', 'Delete'),
    createData('3', 'Mukund Rajpal', 'mukund123@gmail.com', '1521541654', 'View', 'Edit', 'Delete'),
    createData('4', 'Mukund Rajpal', 'mukund123@gmail.com', '1521541654', 'View', 'Edit', 'Delete'),
    createData('5', 'Mukund Rajpal', 'mukund123@gmail.com', '1521541654', 'View', 'Edit', 'Delete'),
    createData('6', 'Mukund Rajpal', 'mukund123@gmail.com', '1521541654', 'View', 'Edit', 'Delete'),
    createData('7', 'Mukund Rajpal', 'mukund123@gmail.com', '1521541654', 'View', 'Edit', 'Delete'),
    createData('8', 'Mukund Rajpal', 'mukund123@gmail.com', '1521541654', 'View', 'Edit', 'Delete'),
];

const ManageDrivers = () => {
    return (
        <div className='h-full flex items-center justify-center flex-col overflow-y-scroll px-8'>
            <div className='flex items-center text-left w-full pb-4 text-3xl justify-between'>
                <div className='flex'>
                    <GrBus className='mr-4'/>
                    Manage Drivers
                </div>

                <Link to="/new-driver-form">
                    <AddNewButton title="Add New Driver"/>
                </Link>
            </div>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 1050 }} aria-label="caption table">
                    <TableHead style={{ boxShadow: '0px 1px 9px rgba(0, 0, 0, 0.12)', borderRadius: '12px' }}>
                        <TableRow>
                            <TableCell>Driver ID</TableCell>
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
                        <TableRow key={row.driverId}>
                            <TableCell component="th" scope="row">
                                {row.driverId}
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

export default ManageDrivers
