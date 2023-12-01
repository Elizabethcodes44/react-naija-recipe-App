import "./header.css";


function Header() {
  return (
    <>
      <header>
        <div className="headeritems">
          <input type="text" placeholder="Search for a food" value="" />
        </div>
        <div className="dataitems"></div>
      </header>
    </>
  );
}

export default Header;
