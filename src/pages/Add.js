
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Add = () => {

  const navigate = useNavigate();
  const [selectedFile,setSelectFile]=useState();
  const [product, setProduct] = useState({

    prod_name: "",
    prod_description: "",
    prod_price: "",
    prod_quantity: "",
    image:""
  })
 

  const onFileChange = (e) => { 
    setSelectFile( e.target.files[0]);
 
  };

  function add() {

    const formData = new FormData();

    formData.append("prod_name", product.prod_name);
    formData.append("prod_description", product.prod_description);
    formData.append("prod_price", product.prod_price);
    formData.append("prod_quantity", product.prod_quantity);
    console.log(selectedFile);
    if (selectedFile){
      //console.log("fileselected");
    formData.append("image", selectedFile,selectedFile.image);
  }

    if (!product.prod_name) {
      alert("Enter Product Name");
      return;
    } else if (!product.prod_description) {
      alert("Enter Product Description");
      return;
    } else if (!product.prod_price) {
      alert("Enter Product Price");
      return;
    } else if (!product.prod_quantity) {
      alert("Enter Product Quantity");
      return;
    } 
     

    axios({
      method: "post",
      url: "http://202.131.117.92:7152/api/product",
      data: formData,
    })
      .then((response) => {
        console.log("data", response);
        console.log("values", product);
        navigate('/Home');
      })
      .catch((error) => {
        console.warn("not!!!", error.message);
      });
  }

  return (

    <div><h1>Add product</h1>

      Product Name:
      <input type="text" name="prod_name" id="prod_name" 
        value={product.prod_name}
        onChange={(e) =>
          setProduct({ ...product, prod_name: e.target.value, })
        } /><br />

      Product Description
      <input type="text" name="prod_description" id="prod_description" 
        value={product.prod_description}
        onChange={(e) =>
          setProduct({ ...product, prod_description: e.target.value, })
        } /> <br />

      Product Price
      <input type="number" name="prod_price" id="prod_price" 
        value={product.prod_price}
        onChange={(e) =>
          setProduct({ ...product, prod_price: e.target.value, })
        } /><br />

      Product Quantity
      <input type="number" name="prod_quantity" id="prod_quantity" 
        value={product.prod_quantity}
        onChange={(e) =>
          setProduct({ ...product, prod_quantity: e.target.value, })
        } /><br />

      Product image
      <input type="file" name="image" 
        onChange={onFileChange}/>

      <button type="button" onClick={add}>
        Add
      </button>
    </div>
  )
}

export default Add;