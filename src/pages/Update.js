import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import{doget, doupdate} from "../actions/update"

function Update() {

    const { id } = useParams();
    console.log(id);
    const navigate = useNavigate();
    const [selectedFile, setSelectFile]= useState([]);
    const dispatch= useDispatch()
    const product = useSelector((state) => state?.getReducer);
    const [data, setData] = useState({
        prod_name: "",
        prod_description: "",
        prod_price: "",
        prod_quantity: "",
        image:""
    })
    console.log("data",product.product);
    
    useEffect(() => {

        dispatch(doget(id))
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
        
     
    }, []);

    const onFileChange = (e) => { 
        setSelectFile( e.target.files[0] );  
 
      };


    function edit() {


        const formData = new FormData();

        formData.append("prod_name", data.prod_name);
        formData.append("prod_description", data.prod_description);
        formData.append("prod_price", data.prod_price);
        formData.append("prod_quantity", data.prod_quantity);
        formData.append("image",selectedFile.image);
        

        // console.log(selectedFile.image);

        if (!data.prod_name) {
            alert("Enter Product Name");
            return;
        } else if (!data.prod_description) {
            alert("Enter Product Description");
            return;
        } else if (!data.prod_price) {
            alert("Enter Product Price");
            return;
        } else if (!data.prod_quantity) {
            alert("Enter Product Quantity");
            return;
        } 


        dispatch(doupdate(id, data))
            .then((response) => {
                console.log("data", response);
                console.log("velue", data);
                setData(response.data)
              
                navigate('/Home');

            })
            .catch((error) => {
                console.warn("not!!!", error.message);
            });
    }
   
    return (

        <div>
            <h3>Update Product Data</h3>
       
            Product Name:
            <input type="text" name="prod_name" id="prod_name" required="required"
                    value={data.prod_name}
                            onChange={(e) =>
                setData({...data, prod_name:data.prod_name})
                    } /><br/>
            Product Description
            <input type="text" name="prod_description" id="prod_description" required="required"
                    value={data.prod_description}
                            onChange={(e) =>
                setData({...data, prod_description: e.target.value,})
                    } /> <br/>   
            Product Price
            <input type="number" name="prod_price" id="prod_price" required="required"
                    value={data.prod_price}
                            onChange={(e) =>
                setData({...data, prod_price: e.target.value,})
                    } /><br/>
            Product Quantity
            <input type="number" name="prod_quantity" id="prod_quantity" required="required"
                    value={data.prod_quantity}
                            onChange={(e) =>
                setData({...data, prod_quantity: e.target.value,})
                    } /><br/>
            
            Image 
            <input type="file" name="image" 
                onChange={onFileChange}/>
            
            <button type="button" onClick={edit}>
            Update Data
            </button>
         </div>
    )
}

export default Update