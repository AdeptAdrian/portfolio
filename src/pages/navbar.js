function navbar() {
  return (
    <>
      <nav className="navbar">
        <ul className="fixed top-0 left-1/2 transform -translate-x-1/2 flex items-center justify-between">
          <li className="p-4">Home</li>
          <li className="p-4">About</li>
          <li className="p-4">Projects</li>
          <li className="p-4">Contact</li>
        </ul>
      </nav>
    </>
  );
}

export default navbar;
