import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useGetTeachersQuery } from "../../features/users/usersApiSlice"

const Teacher = () => {
    const {
        data: users,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetTeachersQuery()

    const deleteUser = () => {
        console.log('Deleted')
    }

    const updateUser = () => {
        console.log('Edited')
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
                getActions: () => [
                    // Format to follow
                    // getActions: (params: GridRowParams) => [
                    // <GridActionsCellItem icon={...} onClick={...} label="Delete" />,
                    <GridActionsCellItem icon={<EditIcon />} onClick={updateUser} label="Edit" />,
                    <GridActionsCellItem icon={<DeleteIcon />} onClick={deleteUser} label="Delete" />,
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
                />
            </div>
        )

    } else if (isError) {
        content = <p>{JSON.stringify(error)}</p>;
    }
    return content
}

export default Teacher