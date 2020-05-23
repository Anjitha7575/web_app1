import styled from 'styled-components';
import img from '../../../assets/green1.jpg';

export const Grid = styled.div`
    width: 100%;
    margin-left: 10%;
    .m-tooltip{
        width: 200px;
    }
`;

export const Box = styled.div`
    background: linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url(${img}) no-repeat center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    width: 25%;
    height: 120px;
    margin: 25px;
    float: left;
    box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
    // box-shadow: 0 19px 38px rgba(0, 0, 0, 0.95), 0 15px 12px rgba(1, 0, 0, 1);
    position: relative;
    padding: 10px;
`;

export const Title = styled.div`
    font-family: monospace;
    font-size: 18px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const Lang = styled.div`
    position: absolute;
    bottom: 0;
    right: 0;
    background-color: rgb(30, 109, 11);
    padding: 5px;
    text-transform: uppercase;
`;

export const Rate = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 5px;
    text-transform: uppercase;
    font-size: 30px;
    color: #5a5757;
`;


export const ViewDetails = styled.div`
    margin-top: 20px;   
`;