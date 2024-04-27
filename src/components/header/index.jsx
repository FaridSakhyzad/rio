import "./style.scss";

function Header() {
  return (
    <header className="header">
      <div className="header-row">
        <a href="/" className="header-logo">RioConnect</a>

        <button className="header-settings" />
        <button className="header-user">LP</button>
      </div>

      <div className="header-row">
        <input
          type="search"
          placeholder="Search"
          className="header-search"
        />
        <button className="header-filters"/>
      </div>
    </header>
)
}

export default Header;