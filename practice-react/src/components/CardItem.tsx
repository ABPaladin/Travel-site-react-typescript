import React from 'react';
import { Link } from 'react-router-dom';

interface CardItemProps {
  path: string;
  label: string;
  src: string;
  text: string;
}

const CardItem: React.FC<CardItemProps> = (props) => {
  return (
    <>
      <li className='cards__item'>
        <Link className='cards__item__link' to={props.path}>
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <img
              className='cards__item__img'
              alt='Travel Image'
              src={props.src}
            />
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;
