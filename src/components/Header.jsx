import searchIcon from '../assets/search.svg';
import bellIcon from '../assets/bell.svg';

export default function Header() {
  return (
    <header className='header-container'>
      <div className='searchbar-wrapper'>
        <span className='icon-left'><img src={searchIcon} alt="search" /></span>
        <input type='text' className='searchbar' placeholder='Search' />
        <span className='icon-right'><img src={bellIcon} alt="bell" /></span>
      </div>
    </header>
  );
}
