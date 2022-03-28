import React from 'react';
import {Header} from './CardHeader.styles';

interface CardHeaderProps {
  title: string;
  color: string;
}

const CardHeader: React.FunctionComponent<CardHeaderProps> = ({title, color}) => {
  return (<>
      <Header color={color}>
        {title}
      </Header>
    </>
  );
}

export default CardHeader;