import React from 'react';

interface TapButtonProps {
  onTap: () => void;
}

const TapButton: React.FC<TapButtonProps> = ({ onTap }) => (
  <button className="tap-button" onClick={onTap}>Tap Me!</button>
);

export default TapButton;
