import { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate ,Link } from "react-router-dom";
import { doDelete } from "../actions/delete";
import { view } from "../actions/view";

function Viewproduct() {
  const dispatch = useDispatch();
  const navigate=useNavigate()
 
  const value = useSelector((state) => state?.viewReducer?.value);
    console.log(value);
  

  useEffect(() => {
    dispatch(view())
      .then((res) => console.log(res))
      //.then(res => alert('Done...'+JSON.stringify(res)))
      .catch((err) => console.log("error", err));
    console.log("product", value);
  }, []);

  function Delete(_id){
    const data= {
      id: _id,
    };

    dispatch(doDelete(data))
    .then((res) => alert(res))
    .catch((err) => console.log(err));
  }
  function Update(id) {
    navigate('/update/'+id)
  }
  return  (
    <><div className="App-header">
      <button><Link to={"/Add"}>addproduct</Link></button> &nbsp; &nbsp; &nbsp;
      
      
      <h1>Product List</h1><table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Action</th>
            <th>image</th>
          </tr>
        </thead>

        {value.map(
          ({ _id, prod_name, prod_description, prod_price, prod_quantity, image }) => (

            <tbody key={_id}>
              <tr>
                <td>{prod_name}</td>
                <td>{prod_description}</td>
                <td>{prod_price}</td>
                <td>{prod_quantity}</td>

                <td> <button onClick={() => Delete(_id)}>Delete</button>
                  <button onClick={() => Update(_id)}><Link to={"/Update/" + _id}>Update</Link></button> </td>

                <td><img src={"http://202.131.117.92:7152/uploads/" + image} width="100dp" alt="" ></img></td>
              </tr>
            </tbody>
          )
        )}
      </table>
      </div>
      </>
    
  );
}

export default Viewproduct;
