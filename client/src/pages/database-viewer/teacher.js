import { DataGrid } from '@mui/x-data-grid';
import { useGetTeachersQuery } from "../../features/users/usersApiSlice"

const Teacher = () => {
    const {
        data: users,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetTeachersQuery()

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
            { field: 'phone', headerName: 'Phone', width: 130 }
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