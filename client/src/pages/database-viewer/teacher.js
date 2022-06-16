import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Alert from '@mui/material/Alert';
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useGetUserByRoleQuery, useDeleteUserMutation, useGetUserByIdQuery } from "../../features/users/usersApiSlice"
import DeleteModal from '../../components/modal/deleteModal';
import { setSidebarInfo, setUserId, selectedUserId } from '../../features/secondary-sidebar/sidebarSlice'

const Teacher = () => {
    const {
        data: users,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetUserByRoleQuery(1)

    console.log(users)
    const [deleteUser] = useDeleteUserMutation()
    const [getUserById] = useGetUserByIdQuery()
    const [selectedRows, setSelectedRows] = useState([]);
    const dispatch = useDispatch();
    const result = useSelector(selectedUserId)
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
        getUserById({ id })
        dispatch(setUserId({ id }))
    }

    let content;
    if (isLoading) {
        content = <p>"Loading..."</p>;
    } else if (isSuccess) {

        // Data for the table
        let tb_data_mui =
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
        const rows = tb_data_mui;

        content = (
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                    // Gets the selection of datagrid
                    onSelectionModelChange={(ids) => {
                        // sets the selected id
                        const selectedIDs = new Set(ids);
                        console.log(selectedIDs)
                        // iterates over the selected row id and checks if a row is selected
                        const selectedRows = rows.filter((row) =>
                            selectedIDs.has(row.id),
                        );
                        // sets the result to selected rows
                        setSelectedRows(selectedRows);
                        console.log(selectedRows)
                        // Loops over the objects in selected rows
                        for (let key in selectedRows) {
                            // selects all the user ids of the selected row objects
                            const rowByUser = selectedRows[key].id
                        }
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