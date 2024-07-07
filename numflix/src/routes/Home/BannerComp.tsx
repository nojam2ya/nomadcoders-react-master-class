import { IMove } from '@src/apis';
import { Banner, Overview, Title } from '@src/routes/Home/style';
import { makeImagePath } from '@src/utils';

const BannerComp = ({ data }: { data: IMove }) => {
  return (
    <Banner $bgPhoto={makeImagePath(data.backdrop_path || '')}>
      <Title>{data.title}</Title>
      <Overview>{data.overview}</Overview>
    </Banner>
  );
};

export default BannerComp;
