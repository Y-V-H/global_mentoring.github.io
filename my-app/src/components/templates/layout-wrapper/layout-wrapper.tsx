import { SearchBlock } from '../../organisms/search-block/search-block';
import { filmsDataProps } from '../../../toolkit-store/index';

export default function LayoutWrapper({children}: any) {

  return (
    <>
      <SearchBlock />
      {children}
    </>
  )
}