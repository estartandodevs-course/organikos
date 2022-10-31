import { Avatar } from '../Avatar';
import { Tags } from '../Tags';
import { Rating } from '../Rating';
import { Wrapper, CategoriesWrapper, MarketInfos, MarketWrapper, SellerAvatar } from './styles';
import { useTheme } from 'styled-components';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export const CardSeller = ({ seller }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const theme = useTheme();

  return (
    <Wrapper>
      <SellerAvatar>
        <Avatar size="small" backgroundColor={theme.palettes.primaryGreen.v4} />
        <span>0 km</span>
        {seller?.organic && <img src="../assets/icons/icons-card/produto-organico.svg" alt="selo produto orgânico" />}
      </SellerAvatar>

      <MarketWrapper>
        <MarketInfos>
          <div>
            <Rating size="small" rating={seller?.rating} />
            <Link to={`/seller/${seller.sellerId}`}>
              <h2>{seller.contact.name}</h2>
            </Link>
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
