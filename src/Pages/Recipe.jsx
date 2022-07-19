

import {useEffect, useState} from "react";
import styled from "styled-components";
import {useParams} from "react-router-dom";


function Recipe() {

  let params = useParams();
  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState("instructions");

  const fetchDetails = async () => {
    const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`);
    const detailData = await data.json();
    setDetails(detailData);
  };

  useEffect(() => {
    fetchDetails();
  }, [params.name]);

  return (
    <DetailWrapper>
      <div>
        <h2>{details.title}</h2>
        <img src={details.image} alt={details.title}/>
      </div>

      <Info>
        <Button className={activeTab === 'instructions' ? 'active' : ''} onClick={() => setActiveTab('instructions')}>Instructions</Button>
        <Button className={activeTab === 'ingredients' ? 'active' : ''} onClick={() => setActiveTab('ingredients')}>Ingredients</Button>
        <div>
          <p dangerouslySetInnerHTML={{__html: details.summary}}></p>
        </div>
      </Info>
    </DetailWrapper>
  );
}

const DetailWrapper = styled.div`
  margin-top: 10rem;
  margin-bottom: 5rem;
  display: flex;

  .active{
    background: linear-gradient(to right, #f6d365, #fda085);
    color: white;
  }

  p{
    font-family: "Poppins";
    color: #272727;
    margin-top: 10px;
    font-size: smaller;
  }

  h2{
    margin-bottom: 2rem;
  }

  li{
    font-size: 1.5rem;
    line-height: 2rem;
  }

  ul{
    margin-top: 2rem;
  }
`;

const Button = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  background: white;
  border: 2px solid #313131;
  margin-right: 2rem;
  font-weight: bold;
`;

const Info = styled.div`
  margin-left: 10rem;
`;

export default Recipe