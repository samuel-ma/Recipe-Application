
import {FaPizzaSlice, FaHamburger} from 'react-icons/fa';
import {GiNoodles, GiChopsticks} from 'react-icons/gi';
import styled from "styled-components";
import {NavLink} from "react-router-dom";


function Category() {
  return (
    <List>
      <SLink to={'/cuisine/Italian'}>
        <FaPizzaSlice />
        <h3>Italian</h3>
      </SLink>

      <SLink to={'/cuisine/American'}>
        <FaHamburger />
        <h3>American</h3>
      </SLink>

      <SLink to={'/cuisine/Asian'}>
        <GiNoodles />
        <h3>Asian</h3>
      </SLink>

      <SLink to={'/cuisine/Japanese'}>
        <GiChopsticks />
        <h3>Japanese</h3>
      </SLink>
    </List>
  )
}


const List = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0rem;
`;

const SLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 50%;
  margin-right: 2rem;
  text-dcoration: none;
  background: linear-gradient(35deg, blue, lightblue);
  width: 6rem;
  height: 6rem;
  cursor: pointer;
  transform: scale(0.8);

  
h3{
  color: white;
  font-size: 0.8rem;
}

svg{
  color: white;
  font-size: 2rem;
}

  &.active{
    background: linear-gradient(to right, #f27121, #e94057);
    
    svg{
      color: white;
    }

    h3{
      color: white;
    }
  }

`;


export default Category;