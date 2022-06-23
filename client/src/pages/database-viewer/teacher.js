import { DataGrid, GridActionsCellItem, GridToolbarContainer, GridToolbarExport } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Alert from '@mui/material/Alert';
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useGetUserByRoleQuery, useDeleteUserMutation } from "../../features/users/usersApiSlice"
import { setUserInfo } from '../../features/secondary-sidebar/sidebarSlice'
import LinearProgress from '@mui/material/LinearProgress';

const Teacher = () => {
    const {
        data: users,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetUserByRoleQuery(1)

    const [deleteUser] = useDeleteUserMutation()
    const [selectedRows, setSelectedRows] = useState([]);
    const dispatch = useDispatch();

    const deleteUserByID = (id) => {
        const confirm = window.confirm(`Are you sure you want to delete user: ${id}?`)
        if (confirm) {
            deleteUser({ id })
            return (
                <Alert variant="outlined" severity="success">
                    This is a success alert — check it out!
                </Alert>
            )
        }
    }

    const handleUpdateUser = (id) => {
        console.log(`Updated user: ${id}`)
    }

    const ViewUser = (id) => {
        // Iterates through array and finds the object matching the id passed as an argument
        let result = users.filter(obj => {
            return obj.user_id === id
        })
        // Selected index 0 of the result array
        let user = result[0]
        // store the JS object using the setUserInfo reducer
        dispatch(setUserInfo({ user }))
    }

    function CustomToolbar() {
        return (
            <GridToolbarContainer>
                <GridToolbarExport />
            </GridToolbarContainer>
        );
    }

    let content;
    if (isLoading) {
        content = <p><LinearProgress /></p>;
    } else if (isSuccess) {

        // Data for the table
        let rows =
            users.map((val) => {
                return ({
                    // important to add id even if user id
                    // you need an object within an array - ONCE!!!
                    id: val.user_id,
                    first_name: val.first_name,
                    last_name: val.last_name,
                    email: val.email,
                    phone: val.phone,
                })
            })

        // Columns of table
        const columns = [
            { field: 'id', headerName: 'ID', width: 70 },
            { field: 'first_name', headerName: 'First name', width: 130 },
            { field: 'last_name', headerName: 'Last name', width: 130 },
            { field: 'email', headerName: 'Email', width: 240 },
            { field: 'phone', headerName: 'Phone', width: 130 },
            {
                field: 'actions',
                type: 'actions',
                headerName: 'Actions',
                width: 130,
                getActions: ({ id }) => [
                    // Format to follow
                    // getActions: (params: GridRowParams) => [
                    // <GridActionsCellItem icon={...} onClick={...} label="Delete" />,
                    <GridActionsCellItem icon={<EditIcon />} onClick={() => { }} label="Edit" />,
                    <GridActionsCellItem icon={<DeleteIcon />} onClick={() => { deleteUserByID(id) }} label="Delete" />,
                    <GridActionsCellItem icon={<VisibilityIcon />} onClick={() => { ViewUser(id) }} label="Delete" />,
                ],

            }
        ];
        // Rows of table

        content = (
            <div style={{ height: 500, width: '100%' }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={10}
                    rowsPerPageOptions={[10]}
                    checkboxSelection
                    components={{
                        Toolbar: CustomToolbar,
                    }}
                    sx={{
                        '.MuiDataGrid-toolbarContainer': {
                            justifyContent: 'right',
                            padding: 0
                        },
                        // Export button
                        '.MuiButton-textPrimary': {
                            // color: 'red'
                        },
                        // Column seperator
                        '.MuiDataGrid-columnSeparator': {
                            // display: 'none',
                        },

                    }}
                    // Gets the selection of datagrid
                    onSelectionModelChange={(ids) => {
                        // sets the selected id
                        const selectedIDs = new Set(ids);
                        // iterates over the selected row id and checks if a row is selected
                        const selectedRows = rows.filter((row) =>
                            selectedIDs.has(row.id),
                        );
                        // sets the result to selected rows
                        setSelectedRows(selectedRows);
                        console.log('Selected row: ', selectedRows)
                    }}
                />
            </div>
        )

    } else if (isError) {
        content = <p>{JSON.stringify(error)}</p>;
    }
    return content
}

export default Teacher