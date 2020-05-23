import styled from 'styled-components';

export const SearchBox = styled.div`
width: 100%;
display: flex;
margin: 0 auto;
justify-content: center;
@media only screen and (max-width: 600px) {
    width: 100%;
    margin: 0 5px;
    flex-direction: column;
}
.custom-select {
    position: relative;
    font-family: Arial;
    width: 200px;
    height: 35px;
  }
  .search-bar{
    @media only screen and (max-width: 600px) {
        width: 80%;
    }
    width: 35%;
    border-radius: 5px;
    border-color: transparent;
    padding: 10px;
    height: 35px;
    margin-top: 6px;
  }
  .search-text{
    border-radius: 5px;
    border-color: transparent;
    padding: 10px;
    height: 35px;
  }
  .search-btn{
    display: inline-block;
    background-color: rgb(30, 109, 11);
    color: white;
    padding: 5px 20px;
    margin: 8px 0;
    border: none;
    cursor: pointer;
    font-size: 12px;
    margin: 10px;
    border-radius: 10px;
    font-weight: 500;
  }

`;

export const Icon = styled.div`
    color: #dcdcdc;
    background-color: linear-gradient(45deg, #044348b3, #ad84397a);
    font-size: 28px;
    margin: 5px 10px 0 10px;
    position: relative;
    float: right;
    top: -47px;
    right: -17px;
`;

export const HistoryBox = styled.div`
    color: #5a574e;
    width: 48%;
    .del-all{
        display: flex;
        justify-content: flex-end;
        cursor: pointer;
    }
    .del-one{
        position: absolute;
        right:0;
        cursor: pointer;
    }
`;

export const HistoryList = styled.div`
    position: relative; 
`;


