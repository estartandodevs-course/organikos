import { Avatar } from '../Avatar';
import { Tags } from '../Tags';
import { Rating } from '../Rating';
import { Wrapper, CategoriesWrapper, MarketInfos, MarketWrapper, SellerAvatar } from './styles';
import { useTheme } from 'styled-components';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Typography } from '../Typography';
import { FilterContext } from '../../contexts/FilterContext';

export const CardSeller = ({ seller }) => {
  const [isFavorite, setIsFavorite] = useState(seller?.rating);
  const { resetSearchTerm } = useContext(FilterContext);
  const theme = useTheme();

  return (
    <Wrapper>
      <SellerAvatar>
        <Avatar size="small" backgroundColor={theme.palettes.primaryGreen.v4} />
        <span>0 km</span>
        {seller?.certificate && (
          <img src="../assets/icons/icons-card/produto-organico.svg" alt="selo produto orgânico" />
        )}
      </SellerAvatar>

      <MarketWrapper>
        <MarketInfos>
          <div>
            <Rating size="small" rating={seller?.rating} />
            <Link to={`/seller/${seller?.sellerId}`} onClick={resetSearchTerm}>
              <Typography variant={'h2Medium'}>{seller?.contact?.name}</Typography>
            </Link>
          </div>
          <img
            src={isFavorite ? '/assets/icons/icons-card/heart.svg' : 'assets/icons/icons-card/heartFill.svg'}
            alt="coração favoritar"
            onClick={() => setIsFavorite(prev => !prev)}
          />
        </MarketInfos>

        <CategoriesWrapper>
          <Tags categorys={seller?.category} />
        </CategoriesWrapper>
      </MarketWrapper>
    </Wrapper>
  );
};
