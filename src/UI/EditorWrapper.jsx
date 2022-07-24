import React from "react";
import styled from "styled-components";

function EditorWrapper({ data }) {
  return (
    <Wrapper>
      <div dangerouslySetInnerHTML={{ __html: data }}></div>
    </Wrapper>
  );
}

export default EditorWrapper;
const Wrapper = styled.article`
  font-size: 12px;
  ul {
    list-style: disc;
    margin-left: 1rem;
    li {
      margin-top: 0.5rem;
    }
  }
  * {
    position: unset;
  }
  height,
  h2,
  h3,
  h4,
  h5 {
    margin-bottom: 0.67em;
    margin-top: 0.67em;
  }
  p {
    margin: 12px 0;
    font-weight: 400;
    font-size: 24px;
    line-height: 180%;
    @media (max-width: 1599px) {
      font-size: 18px;
    }
    @media (max-width: 767px) {
      font-size: 14px;
    }
  }
  table {
    border-collapse: collapse;
  }
  table:not([cellpadding]) td,
  table:not([cellpadding]) th {
    padding: 0.4rem;
  }
  table[border]:not([border="0"]):not([style*="border-width"]) td,
  table[border]:not([border="0"]):not([style*="border-width"]) th {
    border-width: 1px;
  }
  table[border]:not([border="0"]):not([style*="border-style"]) td,
  table[border]:not([border="0"]):not([style*="border-style"]) th {
    border-style: solid;
  }
  table[border]:not([border="0"]):not([style*="border-color"]) td,
  table[border]:not([border="0"]):not([style*="border-color"]) th {
    border-color: #ccc;
  }
  figure {
    display: table;
    margin: 1rem auto;
  }
  figure figcaption {
    color: #999;
    display: block;
    margin-top: 0.25rem;
    text-align: center;
  }
  hr {
    border-color: #ccc;
    border-style: solid;
    border-width: 1px 0 0 0;
  }
  code {
    background-color: #e8e8e8;
    border-radius: 3px;
    padding: 0.1rem 0.2rem;
  }
  blockquote {
    border-left: 2px solid #ccc;
    margin-left: 1.5rem;
    padding-left: 1rem;
    @media (max-width: 767px) {
      margin-left: 0.5rem;
    }
  }

  img {
    width: 100%;
    max-width: 100% !important;
    aspect-ratio: 16/9 !important;
    object-fit: cover !important;
    height: 100% !important;
  }
`;
