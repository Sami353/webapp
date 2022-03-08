import "./userList.css";
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from "@material-ui/icons";
import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function UserList() {
    const [data, setData] = useState(userRows);

    const handleDelete = (id) => {
        setData(data.filter(item => item.id !== id));
    };

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'user', headerName: 'User', width: 230, renderCell: (params) => {
                return (
                    <div className="userlistUser">
                        <img src={params.row.avatar} alt="" className="userListImg" />
                        {params.row.username}
                    </div>
                )
            }
        },
        { field: 'email', headerName: 'Email', width: 230 },
        { field: 'status', headerName: 'Status', width: 115 },
        { field: 'transaction', headerName: 'Transactions', width: 155 },
        {
            field: "action", headerName: "Action", width: 200, renderCell: (params) => {
                return (
                    <>
                    <Link to={"/userView/" + params.row.id}>
                            <button className="userListEdit">View</button>
                        </Link>
                        <Link to={"/usersEdit/" + params.row.id}>
                            <button className="userListEdit">Edit</button>
                        </Link>
                        <DeleteOutline className="userListDelete"
                            onClick={() => handleDelete(params.row.id)} />
                    </>
                )
            }
        }
    ];

    return (
        <div className="userList">
            <div className="userTitleContainer">
                <h1 className="userTitle">Costumers</h1>
            </div>
            <div className="userBottom">
                <DataGrid
                    rows={data}
                    disableSelectionOnClick
                    columns={columns}
                    pageSize={8}
                    checkboxSelection
                />
            </div>
        </div>
    )
}
