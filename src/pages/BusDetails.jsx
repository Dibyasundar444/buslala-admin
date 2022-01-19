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

function createData(status, busNo, driverNo, sourceLocation, destination, date, time) {
    return { status, busNo, driverNo, sourceLocation, destination, date, time };
}

const rows = [
    createData('MH 06 TF 2564', '0562', 'Delhi', 'Mumbai', '21 Oct 2020', '07:05pm'),
    createData('MH 06 TF 2564', '0562', 'Delhi', 'Mumbai', '21 Oct 2020', '07:05pm'),
    createData('MH 06 TF 2564', '0562', 'Delhi', 'Mumbai', '21 Oct 2020', '07:05pm'),
    createData('MH 06 TF 2564', '0562', 'Delhi', 'Mumbai', '21 Oct 2020', '07:05pm'),
    createData('MH 06 TF 2564', '0562', 'Delhi', 'Mumbai', '21 Oct 2020', '07:05pm'),
    createData('MH 06 TF 2564', '0562', 'Delhi', 'Mumbai', '21 Oct 2020', '07:05pm'),
    createData('MH 06 TF 2564', '0562', 'Delhi', 'Mumbai', '21 Oct 2020', '07:05pm'),
    createData('MH 06 TF 2564', '0562', 'Delhi', 'Mumbai', '21 Oct 2020', '07:05pm'),
    createData('MH 06 TF 2564', '0562', 'Delhi', 'Mumbai', '21 Oct 2020', '07:05pm'),
    createData('MH 06 TF 2564', '0562', 'Delhi', 'Mumbai', '21 Oct 2020', '07:05pm'),
];

const BusDetails = () => {
    return (
        <div className='h-full flex items-center justify-center flex-col overflow-y-scroll px-8'>
            <div className='flex items-center text-left w-full pb-4 text-3xl justify-between'>
                <div className='flex'>
                    <GrBus className='mr-4'/>
                    Bus Details
                </div>

                <div>
                    <AddNewButton title="Add New Bus"/>
                </div>
            </div>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 1050 }} aria-label="caption table">
                    <TableHead style={{ boxShadow: '0px 1px 9px rgba(0, 0, 0, 0.12)', borderRadius: '12px' }}>
                        <TableRow>
                            <TableCell>Status</TableCell>
                            <TableCell align="center">Bus No</TableCell>
                            <TableCell align="center">Driver No</TableCell>
                            <TableCell align="center">Source Location</TableCell>
                            <TableCell align="center">Destinaton</TableCell>
                            <TableCell align="center">Date</TableCell>
                            <TableCell align="center">Time</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.busNo}>
                            <TableCell component="th" scope="row">
                                <input type="chechbox"/>
                            </TableCell>
                            <TableCell align="center">{row.busNo}</TableCell>
                            <TableCell align="center">{row.driverNo}</TableCell>
                            <TableCell align="center">{row.sourceLocation}</TableCell>
                            <TableCell align="center">{row.destination}</TableCell>
                            <TableCell align="center">{row.date}</TableCell>
                            <TableCell align="center">{row.time}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default BusDetails
