import styled from 'styled-components';

export const MoviesBox = styled.div`
    display: flex;
    flex-wrap: wrap; 
    justify-content: center; 
    align-items: center;
`;

export const Heading = styled.div`
    background-color: rgba(22, 23, 23, 0.12);
    color: #f9f8f6;
    padding: 5px 20px;
    margin: 8px 0;
    border: none;
    cursor: pointer;
    font-size: 25px;
    font-family: cursive;
    font-weight: 900;
    letter-spacing: 5px;
`;

export const LoadingImg = styled.img`
    width: 200px;
    height: 200px;
`;

export const MainView = styled.div`
    display: flex;
    flex-direction: column;
    color: #FFFFFF;
`;

export const PaginationBox = styled.div`
    display: flex;
    flex-wrap: wrap; 
    justify-content: center; 
    align-items: center;
    margin-top: 20px;
    .pagination {
        display: inline-block;
      }
      
      .pagination button {
        color: #FFFFFF;
        float: left;
        padding: 8px 16px;
        text-decoration: none;
        background-color: rgb(30, 109, 11);
        border-radius: 5px;
        margin: 5px;
      }

      .disabled {
        pointer-events: none;
        cursor: default;
        opacity: 0.6;
      }

      .currentpage {
        pointer-events: none;
        cursor: default;
      }
      
      .pagination button.active {
        background-color: #4CAF50;
        color: white;
        border-radius: 5px;
      }
      
      .pagination button:hover:not(.active) {
        background-color: #ddd;
        border-radius: 5px;
      }
`;