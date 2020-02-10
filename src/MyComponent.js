import React from 'react';
import PropTypes from 'prop-types';

// const MyComponent = ({ name, favoriteNumber, children }) => {
//   // 비구조화 할당 (destructuring assignment), 구조 분해 문법
//   return (
//     <div>
//       안녕하세요 {name}, 제 이름은 {children}입니다.
//       <br />
//       제가 좋아하는 숫자는 {favoriteNumber}입니다.
//     </div>
//   );
// };

class MyComponent extends React.Component {
  static defaultProps = {
    name: '진성'
  };

  static propTypes = {
    name: PropTypes.number,
    favoriteNumber: PropTypes.number.isRequired
  };

  render() {
    const { name, favoriteNumber, children } = this.props;
    return (
      <div>
        안녕하세요 {name}, 저는 {children}입니다.
        <br />
        제가 좋아하는 숫자는 {favoriteNumber}입니다.
      </div>
    );
  }
}

export default MyComponent;
