
import {FaPizzaSlice, FaHamburger} from 'react-icons/fa';
import {GiNoodles, GiChopsticks} from 'react-icons/gi';
import styled from "styled-components";
import {NavLink} from "react-router-dom";


function Category() {
  return (
    <List>
      <NavLink to={'/cuisine/Italian'}>
        <FaPizzaSlice />
        <h3>Italian</h3>
      </NavLink>

      <NavLink to={'/cuisine/American'}>
        <FaHamburger />
        <h3>American</h3>
      </NavLink>

      <NavLink to={'/cuisine/Asian'}>
        <GiNoodles />
        <h3>Asian</h3>
      </NavLink>

      <NavLink to={'/cuisine/Japanese'}>
        <GiChopsticks />
        <h3>Japanese</h3>
      </NavLink>
    </List>
  )
}


const List = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0rem;
`;

export default Category;