import searchIcon from "../assets/search.svg";
import bellIcon from "../assets/bell.svg";
import mobileMenuIcon from "../assets/mobile-menu.svg";

export default function Header({ toggleMobileMenu }) {
  return (
    <header className='header-container'>
      <div
        className='mobile-menu'
        onClick={() => {
          toggleMobileMenu();
        }}
      >
        <img src={mobileMenuIcon} alt='menu' height={"20px"} />
      </div>
      <div className='searchbar-wrapper'>
        <span className='icon-left'>
          <img src={searchIcon} alt='search' />
        </span>
        <input type='text' className='searchbar' placeholder='Search' />
        <span className='icon-right'>
          <img src={bellIcon} alt='bell' />
        </span>
      </div>
    </header>
  );
}
