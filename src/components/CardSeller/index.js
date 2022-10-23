import { Avatar } from '../Avatar';
import { Tags } from '../Tags';
import { Rating } from '../Rating';
import { Wrapper, CategoriesWrapper, MarketInfos, MarketWrapper, SellerAvatar } from './styles';
import { useTheme } from 'styled-components';
import { useState } from 'react';

export const CardSeller = ({ seller }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const theme = useTheme();

  return (
    <Wrapper>
      <SellerAvatar>
        <Avatar size="small" backgroundColor={theme.palettes.primaryGreen.v4} />
        <span>0 km</span>
      </SellerAvatar>

      <MarketWrapper>
        <MarketInfos>
          <div>
            {/* temporario enquanto ainda não existe o componente estrela */}
            <Rating size="small" rating={seller?.rating} />
            <h2>{seller.contact.name}</h2>
          </div>
          <img
            src={isFavorite ? 'assets/icons/icons-card/heartFill.svg' : '/assets/icons/icons-card/heart.svg'}
            alt="coração favoritar"
            onClick={() => setIsFavorite(prev => !prev)}
          />
        </MarketInfos>

        <CategoriesWrapper>
          <Tags categorys={seller.category} />
        </CategoriesWrapper>
      </MarketWrapper>
    </Wrapper>
  );
};
