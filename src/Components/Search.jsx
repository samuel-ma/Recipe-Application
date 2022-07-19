

import styled from "styled-components";
import {useState} from "react";
import {BiSearch} from "react-icons/bi";

function Search() {

  const [input, setInput] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
  }
  return (
    <FormStyle onSubmit={submitHandler}>
      <div className="search-icon">
        <BiSearch className="search" />
      </div>

      <div className="input-div">
        <input onChange={(e) => setInput(e.target.vlaue)}  type="text"  value={input}/>
      </div>
      
    </FormStyle>
  )
}

const FormStyle = styled.div`
  display:flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;

  input{
    height: 100%;
    outline: none;
    border: none;
    width: 300px;
    background: transparent;
  }

  .search{
    color: white;
  }

  .search-icon{
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: linear-gradient(35deg, blue, lightblue);
    border-radius: 30px;
    padding-right: 20px;
    padding-left: 20px;
    padding-top: 20px;
    padding-bottom: 20px;
    margin-right: -20px;
    z-index: 1;
  }

  .search-icon:hover{
    cursor: pointer;
    background-image: linear-gradient(to right, #f27121, #e94057);
  }

  .input-div{
    display: flex;
    align-items: center;
    justify-content: center;
    outline: none;
    border-radius: 5px;
    height: 34px;
    border-width: 0.5px;
    border-color: blue;
    border-style: dashed;
    border-radius: 20px;
    padding-left: 25px;
  }
    

`;

export default Search