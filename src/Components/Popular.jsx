import { useEffect, useState } from "react";
import styled from "styled-components";
import {Splide, SplideSlide} from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';

function Popular() {

  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = async () => {

  const check = localStorage.getItem("popular");

  if(check){
    setPopular(JSON.parse(check));
  } else {
    const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=10`);
    const data = await api.json();

    localStorage.setItem("popular", JSON.stringify(data.recipes));
    setPopular(data.recipes);
    console.log(data.recipe)
  }
}

  return (
    <div>
          <Wrapper>
            <h3>Popular Picks</h3>
            <Splide options={{
              perPage: 2,
              drag: "free",
              gap: "5rem",
              pagination: false,
            }}>
            {popular.map((recipe) => {
              return(
                <SplideSlide key={recipe.id}>
                  <Card>
                    {/* <p>{recipe.title}</p> */}
                    <img src={recipe.image} alt={recipe.title} />
                  </Card>
                </SplideSlide>
              );
            })}
            </Splide>
          </Wrapper>
    </div>
  )
}

const Wrapper = styled.div`
  margin: 4rem 0rem;
`;

const Card = styled.div`
  min-height:25rem;
  border-radius: 2rem;
  position: relative;

  img{
    border-radius: 2rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

//   p{
//     position: absolute;
//     bottom: 0;
//     left: 50%;
//     z-index: 1;
//     width: 100%;
//     transform: trnslateX(-50%, 0%);
//     color: white;
//     text-align: center;
//     font-size: 1.5rem;
//     font-weight: bold;
//     height: 40%;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//   }
//  `;

export default Popular;