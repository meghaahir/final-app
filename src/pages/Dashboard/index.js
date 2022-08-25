import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { viewproduct } from "../../actions/view";


function Home() {
    const value = useSelector((state) => state?.viewReducer?.value);
  const [product, setProduct] = useState([]);
  const dispatch= useDispatch()
  const navigate = useNavigate()



  useEffect(() => {
    dispatch(viewproduct())
      .then((res) => console.log("RES", product))
      //.then(res => alert('Done...'+JSON.stringify(res)))
      .catch((err) => console.log("error", err));
    console.log("product", product);
  }, []);

  function delete(id) {
    const data = {
      id: id,
    };
    dispatch(delete(data))
      .then((res) => alert(res))
      .catch((err) => console.log(err));
  }
  function Updateproduct(id) {
    navigate('/updateproduct/'+id)
  }

  return (
    <><div className="App-header">
      <button><Link to={"/Add"}>addproduct</Link></button>
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

        {product.map(
          ({ _id, prod_name, prod_description, prod_price, prod_quantity, image }) => (

            <tbody key={_id}>
              <tr>
                <td>{prod_name}</td>
                <td>{prod_description}</td>
                <td>{prod_price}</td>
                <td>{prod_quantity}</td>

                <td> <button onClick={() => Delete(_id)}>Delete</button>
                  <button onClick={() => update(_id)}><Link to={"/Update/" + _id}>Update</Link></button> </td>

                <td><img src={"http://202.131.117.92:7152/uploads/" + image} width="100dp" alt="" ></img></td>
              </tr>
            </tbody>
          )
        )}
      </table>
      <button onClick={remove}> Logout</button></div>
      </>
    
  );

}
export default Home;
