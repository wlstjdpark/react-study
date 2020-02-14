import React, { useState, useEffect } from 'react';

const Info = () => {
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');
  useEffect(() => {
    console.log('렌더링이 완료 되었습니다.');
    console.log({
      name,
      nickname
    });
    return () => {
      console.log('clean up');
      console.log(name);
    };
  }, []);

  const onChangeName = e => {
    setName(e.target.value);
  };

  const onChangeNickname = e => {
    setNickname(e.target.value);
  };

  return (
    <div>
      <input onChange={onChangeName}></input>
      <input onChange={onChangeNickname}></input>
      <div>
        <div>
          <b>이름: {name}</b>
        </div>
        <div>
          <b>닉네임: {nickname}</b>
        </div>
      </div>
    </div>
  );
};

export default Info;
