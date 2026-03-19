import logo from '../assets/logo.png';

const Header = () => {
  return (
    <header style={{
      padding: '0',
      backgroundColor: '#fff',
      position: 'sticky',
      top: 0,
      zIndex: 100
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
          <img src={logo} alt="Make Travel Easy" style={{ height: '120px', objectFit: 'contain' }} />
      </div>
    </header>
  );
};

export default Header;
