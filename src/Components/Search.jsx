

import styled from "styled-components";
import {useState} from "react";
import {FaSearch} from "react-icons/fa";

function Search() {
  return (
    <FormStyle>
        <input type="text" />
    </FormStyle>
  )
}

const FormStyle = styled.div`
  display:flex;
  align-items: center;
  justify-content: center;

  input{
    outline: none;
    width: 40%;
    height: 2rem;
  }

`;

export default Search