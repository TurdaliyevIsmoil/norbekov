import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

function OtherNews({ data }) {
  return (
    <Wrapper>
      <img src={"https://" + data.post_img_path} alt={data.post_title} />
      <NavLink to={`/news/${data.id}`}>
        <h4>{data.post_title.slice(0, 74) + "..."}</h4>
      </NavLink>
    </Wrapper>
  );
}

export default OtherNews;
const Wrapper = styled.div`
  img {
    width: 100%;
    aspect-ratio: 16/9;
    object-fit: cover;
    margin-bottom: 20px;
  }
  h4 {
    font-size: 18px;
    color: #333;
    transition: all 0.3s;
    &:hover {
      color: #000;
    }
  }
`;
