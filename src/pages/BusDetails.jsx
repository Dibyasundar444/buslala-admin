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
            <h2 className='flex items-center text-left w-full pb-4 text-3xl'><GrBus className='mr-4'/>Bus Details</h2>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 1050 }} aria-label="caption table">
                    <TableHead style={{ boxShadow: '0px 1px 9px rgba(0, 0, 0, 0.12)', borderRadius: '12px' }}>
                        <TableRow>
                            <TableCell>Status</TableCell>
                            <TableCell align="right">Bus No</TableCell>
                            <TableCell align="right">Driver No</TableCell>
                            <TableCell align="right">Source Location</TableCell>
                            <TableCell align="right">Destinaton</TableCell>
                            <TableCell align="right">Date</TableCell>
                            <TableCell align="right">Time</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.busNo}>
                            <TableCell component="th" scope="row">
                                <input type="chechbox"/>
                            </TableCell>
                            <TableCell align="right">{row.busNo}</TableCell>
                            <TableCell align="right">{row.driverNo}</TableCell>
                            <TableCell align="right">{row.sourceLocation}</TableCell>
                            <TableCell align="right">{row.destination}</TableCell>
                            <TableCell align="right">{row.date}</TableCell>
                            <TableCell align="right">{row.time}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default BusDetails
