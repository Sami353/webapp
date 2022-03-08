import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { useState } from "react";
import { Link } from "react-router-dom";
import { gymSubscriptionRows } from "../../dummyData";
import "./gym.css"

export default function SubscriptionList() {
    const [data, setData] = useState(gymSubscriptionRows);
    const handleDelete = (id) => {
        setData(data.filter(item => item.id !== id));
    };

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'name', headerName: 'Name', width: 160, renderCell: (params) => {
                return (
                    <div className="productListItem">
                        <img src={params.row.avatar} alt="" className="productListImg" />
                        {params.row.name}
                    </div>
                )
            }
        },
        {
            field: 'gymname', headerName: 'Gym Name', width: 160, renderCell: (params) => {
                return (
                    <div className="productListItem">
                        <img src={params.row.img} alt="" className="productListImg" />
                        {params.row.gymname}
                    </div>
                )
            }
        },
        { field: 'duration', headerName: 'Duration', width: 155 },
        { field: 'price', headerName: 'Price', width: 155 },
        { field: 'startingon', headerName: 'Starting On', width: 200 },
        { field: 'startingfrom', headerName: 'Starting From', width: 200 },
        {
            field: "action", headerName: "Action", width: 200, renderCell: (params) => {
                return (
                    <>
                        <Link to={"/subscriptionView/" + params.row.id}>
                            <button className="productListEdit">View</button>
                        </Link>
                        <Link to={"/subscriptionEdit/" + params.row.id}>
                            <button className="productListEdit">Edit</button>
                        </Link>
                        <DeleteOutline className="productListDelete"
                            onClick={() => handleDelete(params.row.id)} />
                    </>
                )
            }
        }
    ];
    return (
        <div className="gymList">
            <div className="gymTitleContainer">
                <h1 className="allGymTitle">Gym Subscriptions</h1>
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
