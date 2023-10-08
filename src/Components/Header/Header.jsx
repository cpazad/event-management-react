

const Header = ({pageName}) => {
  return (
    <div
      className="hero h-64"
      style={{
        backgroundImage:
          "url(https://i.ibb.co/qRNNkBw/pagebanner.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold text-white">{pageName}</h1>
          
          
        </div>
      </div>
    </div>
  );
};

export default Header;
