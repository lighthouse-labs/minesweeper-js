
// ????????????????????????????????????????????????????????????????
// ?????????????????????????? Info Box ????????????????????????????
// ????????????????????????????????????????????????????????????????

// ??????????????????????? Vendor Modules ?????????????????????????
import React from 'react';

// ???????????????????????? File Modules ??????????????????????????

// ?? Styles
import './InfoBox.scss'

const InfoBox = (props) => {

  const { 
    info,
    isBomb
  } = props
  return (
    <div className='InfoBox'>
      {isBomb && <div className="InfoBox__img"><i className="fas fa-bomb"></i></div>}
      <div className="InfoBox__time">
        <span>
          {info}
        </span>
      </div>
    </div>
  )
}

export default InfoBox