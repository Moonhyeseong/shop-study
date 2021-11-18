import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';

let Box = styled.div`
  padding: 20px;
`;
let Title = styled.h4`
  font-size: 25px;
`;
let Alert = styled.div`
  background: #eeeeee;
  padding: 15px;
  border-radius: 5px;
  max-width: 500px;
  width: 100%;
  margin: auto;
`;

function Detail(props) {
  const [toggleAlert, settoggleAlert] = useState(true);
  useEffect(() => {
    //detail 컴포넌트가 렌더링될때 실행되는 코드
    let timer = setTimeout(() => {
      settoggleAlert(false);
    }, 2000);
    //return
    //detail 컴포넌트가 사라질때 실행될 코드
    return () => {
      clearTimeout(timer);
    };
  }, []);
  let { id } = useParams();
  let findingShoes = props.shoes.find(function (shoes) {
    return shoes.id == id;
  });
  let history = useHistory();
  return (
    <div className="container">
      <Box>
        <Title>detail</Title>
      </Box>
      {toggleAlert === true ? <Alert>재고가 얼마 남지 않았습니다.</Alert> : null}
      <div className="row">
        <div className="col-md-6">
          <img src={'https://codingapple1.github.io/shop/shoes' + (findingShoes.id + 1) + '.jpg'} alt="item" width="100%" />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{findingShoes.title}</h4>
          <p>{findingShoes.content}</p>
          <p>{findingShoes.price}</p>
          <button className="btn btn-danger">주문하기</button>
          <button
            className="btn btn-danger"
            onClick={() => {
              history.goBack();
              //history.push(url);
            }}>
            뒤로가기
          </button>
        </div>
      </div>
    </div>
  );
}
export default Detail;
