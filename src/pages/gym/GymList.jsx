import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { useState } from "react";
import { Link } from "react-router-dom";
import { gymRows } from "../../dummyData";
import "./gym.css"

export default function GymList() {
    const [data, setData] = useState(gymRows);
    const handleDelete = (id) => {
        setData(data.filter(item => item.id !== id));
    };

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'name', headerName: 'Name', width: 230, renderCell: (params) => {
                return (
                    <div className="productListItem">
                        <img src={params.row.img} alt="" className="productListImg" />
                        {params.row.name}
                    </div>
                )
            }
        },
        { field: 'openingTime', headerName: 'Opening Time', width: 200 },
        { field: 'location', headerName: 'Location', width: 200 },
        { field: 'duration', headerName: 'Duration', width: 155 },
        { field: 'price', headerName: 'Price', width: 155 },
        {
            field: "action", headerName: "Action", width: 200, renderCell: (params) => {
                return (
                    <>
                        <Link to={"/gymView/" + params.row.id}>
                            <button className="gymListEdit">VIEW</button>
                        </Link>
                        <Link to={"/gymEdit/" + params.row.id}>
                            <button className="gymListEdit">EDIT</button>
                        </Link>
                        <DeleteOutline className="gymListDelete"
                            onClick={() => handleDelete(params.row.id)} />
                    </>
                )
            }
        }
    ];
    return (
        <div className="gymList">
            <div className="gymTitleContainer">
                <h1 className="allGymTitle">All Gyms</h1>
            </div>
            <div className="gymBottom">
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
