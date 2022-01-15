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

function createData(sourceId, destinationId, driverId, busId, fareId, seatAvailability) {
    return { sourceId, destinationId, driverId, busId, fareId, seatAvailability };
}

const rows = [
    createData('1', '1', '1', '1', '1', 'Available'),
    createData('2', '2', '2', '2', '2', 'Available'),
    createData('3', '3', '3', '3', '3', 'Available'),
    createData('4', '4', '4', '4', '4', 'Available'),
    createData('5', '5', '5', '5', '5', 'Available'),
    createData('6', '6', '6', '6', '6', 'Available'),
    createData('7', '7', '7', '7', '7', 'Available'),
    createData('8', '8', '8', '8', '8', 'Available'),
];

const ManageRoutes = () => {
    return (
        <div className='h-full flex items-center justify-center flex-col overflow-hidden px-8 py-14'>
            <div className='flex items-center text-left w-full pb-4 text-3xl justify-between'>
                <div className='flex'>
                    <GrBus className='mr-4'/>
                    Manage Routes
                </div>

                <div>
                    <AddNewButton title="Add New Route"/>
                </div>
            </div>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 1050 }} aria-label="caption table">
                    <TableHead style={{ boxShadow: '0px 1px 9px rgba(0, 0, 0, 0.12)', borderRadius: '12px' }}>
                        <TableRow>
                            <TableCell>Source ID</TableCell>
                            <TableCell align="right">Destination ID</TableCell>
                            <TableCell align="right">Driver ID</TableCell>
                            <TableCell align="right">Bus ID</TableCell>
                            <TableCell align="right">Fare ID</TableCell>
                            <TableCell align="right">Seat Availability</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.sourceId}>
                            <TableCell component="th" scope="row">
                                {row.sourceId}
                            </TableCell>
                            <TableCell align="right">{row.destinationId}</TableCell>
                            <TableCell align="right">{row.driverId}</TableCell>
                            <TableCell align="right">{row.busId}</TableCell>
                            <TableCell align="right">{row.fareId}</TableCell>
                            <TableCell align="right">{row.seatAvailability}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer> 
        </div>
    )
}

export default ManageRoutes
