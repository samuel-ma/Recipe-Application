import { Splide, SplideSlide } from "@splidejs/react-splide";
import { useState, useEffect } from "react";
import styled from "styled-components";



function Veg() {

  const [Veg, setVeg] = useState([]);

  useEffect(() => {
    getVeg();
  }, []);

  const getVeg = async () => {

  const check = localStorage.getItem("veg");

  if(check){
    setVeg(JSON.parse(check));
  } else {
    const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=20&tags=vegetarian`);
    const data = await api.json();

    localStorage.setItem("veg", JSON.stringify(data.recipes));
    setVeg(data.recipes);
    console.log(data.recipes)
  }
}

  return (
    <div>
    <Wrapper>
      <h3>Vegetarian Picks</h3>
      <Splide options={{
        perPage: 4,
        drag: "free",
        gap: "5rem",
        pagination: false,
      }}>
      {Veg.map((recipe) => {
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
  min-height:20rem;
  border-radius: 2rem;
  position: relative;
  overflow: hidden;

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


export default Veg