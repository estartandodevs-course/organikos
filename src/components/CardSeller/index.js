import { Avatar } from '../Avatar';
import { Tags } from '../Tags';
import { Wrapper, CategoriesWrapper, MarketInfos, MarketWrapper, SellerAvatar } from './styles';

export const CardSeller = ({ seller }) => {
  return (
    <Wrapper>
      <SellerAvatar>
        <Avatar size="small" backgroundColor={({ theme }) => theme.palettes.primaryGreen.v4} />
        <span>{seller.location}</span>
      </SellerAvatar>

      <MarketWrapper>
        <MarketInfos>
          <div>
            {/* temporario enquanto ainda não existe o componente estrela */}
            <p>ESTRELA</p>
            <h2>{seller.name}</h2>
          </div>
          <img src={seller.image} alt="coração favoritar" />
        </MarketInfos>

        <CategoriesWrapper>
          <Tags categorys={seller.category} />
        </CategoriesWrapper>
      </MarketWrapper>
    </Wrapper>
  );
};
