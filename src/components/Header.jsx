import React from 'react';
import { Link } from 'react-router-dom';
import myDesireLogo from '/logo1.png';

const Header = () => {
  return (
    <div className="bg-amber-200/80 p-4 flex justify-between items-center">
      <div className="flex items-center">
        <Link to="/home" className="flex items-center">
          <div className="h-12 w-12 mr-3">
            <img src={myDesireLogo} alt="MyDesire Logo" className="h-full w-full object-contain" />
          </div>
          <div className="text-xl font-medium text-gray-800">
            My<span className="text-red-600">Desire</span>.now
          </div>
        </Link>
      </div>
      <div className="relative">
        <div className="w-10 h-10 rounded-full bg-amber-500/50 flex items-center justify-center text-white">
          <span className="text-sm">Profil</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
