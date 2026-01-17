import React from 'react';

const Keyboard: React.FC = () => {
  // Base key styles corresponding to .key
  const keyBaseClass = `
    bg-[#f0f0f0] 
    border border-[#bbb] 
    rounded-md 
    shadow-[0_2px_5px_rgba(0,0,0,0.15)] 
    min-w-[35px] 
    text-center 
    px-[5px] py-[8px] 
    text-[10px] 
    text-[#333] 
    cursor-pointer 
    transition-all duration-200 
    hover:bg-[#e0e0e0] hover:-translate-y-[2px] 
    active:translate-y-[2px]
  `;

  // Specific key overrides
  const functionKeyClass = `${keyBaseClass} max-h-[25px] p-[4px]`;
  const ejectKeyClass = `${keyBaseClass} ml-[15px] px-[20px] py-[4px]`; // Override padding
  const deleteKeyClass = `${keyBaseClass} px-[20px] py-[8px]`;
  
  // Flex grow classes
  const flex2KeyClass = `${keyBaseClass} flex-[2]`;
  const flex3KeyClass = `${keyBaseClass} flex-[3]`;
  
  const spaceKeyClass = `${keyBaseClass} flex-[5] p-[8px] min-w-[175px]`;
  const commandAltKeyClass = `${keyBaseClass} min-w-[35px] p-[2px] text-[16px]`;
  const arrowKeyClass = `${keyBaseClass} min-w-[30px]`;

  return (
    <div className="keyboard flex flex-col gap-[5px] p-[20px] rounded-2xl bg-[#d3d3d3] shadow-[0_4px_10px_rgba(0,0,0,0.15)] w-[600px] select-none">
      {/* Row 1: Function Keys */}
      <div className="row flex gap-[3px]">
        <div className={functionKeyClass}>esc</div>
        <div className={functionKeyClass}>F1</div>
        <div className={functionKeyClass}>F2</div>
        <div className={functionKeyClass}>F3</div>
        <div className={functionKeyClass}>F4</div>
        <div className={functionKeyClass}>F5</div>
        <div className={functionKeyClass}>F6</div>
        <div className={functionKeyClass}>F7</div>
        <div className={functionKeyClass}>F8</div>
        <div className={functionKeyClass}>F9</div>
        <div className={functionKeyClass}>F10</div>
        <div className={functionKeyClass}>F11</div>
        <div className={functionKeyClass}>F12</div>
        <div className={ejectKeyClass}>⏏</div>
      </div>

      {/* Row 2: Numbers */}
      <div className="row flex gap-[3px]">
        <div className={keyBaseClass}>`</div>
        <div className={keyBaseClass}>1</div>
        <div className={keyBaseClass}>2</div>
        <div className={keyBaseClass}>3</div>
        <div className={keyBaseClass}>4</div>
        <div className={keyBaseClass}>5</div>
        <div className={keyBaseClass}>6</div>
        <div className={keyBaseClass}>7</div>
        <div className={keyBaseClass}>8</div>
        <div className={keyBaseClass}>9</div>
        <div className={keyBaseClass}>0</div>
        <div className={keyBaseClass}>-</div>
        <div className={keyBaseClass}>=</div>
        <div className={deleteKeyClass}>delete</div>
      </div>

      {/* Row 3: Tab/QWERTY */}
      <div className="row flex gap-[3px]">
        <div className={flex2KeyClass}>tab</div>
        <div className={keyBaseClass}>Q</div>
        <div className={keyBaseClass}>W</div>
        <div className={keyBaseClass}>E</div>
        <div className={keyBaseClass}>R</div>
        <div className={keyBaseClass}>T</div>
        <div className={keyBaseClass}>Y</div>
        <div className={keyBaseClass}>U</div>
        <div className={keyBaseClass}>I</div>
        <div className={keyBaseClass}>O</div>
        <div className={keyBaseClass}>P</div>
        <div className={keyBaseClass}>[</div>
        <div className={keyBaseClass}>]</div>
        <div className={flex2KeyClass}>\</div>
      </div>

      {/* Row 4: Caps/ASDF */}
      <div className="row flex gap-[3px]">
        <div className={flex2KeyClass}>caps lock</div>
        <div className={keyBaseClass}>A</div>
        <div className={keyBaseClass}>S</div>
        <div className={keyBaseClass}>D</div>
        <div className={keyBaseClass}>F</div>
        <div className={keyBaseClass}>G</div>
        <div className={keyBaseClass}>H</div>
        <div className={keyBaseClass}>J</div>
        <div className={keyBaseClass}>K</div>
        <div className={keyBaseClass}>L</div>
        <div className={keyBaseClass}>;</div>
        <div className={keyBaseClass}>'</div>
        <div className={flex2KeyClass}>return</div>
      </div>

      {/* Row 5: Shift/ZXCV */}
      <div className="row flex gap-[3px]">
        <div className={flex3KeyClass}>shift</div>
        <div className={keyBaseClass}>Z</div>
        <div className={keyBaseClass}>X</div>
        <div className={keyBaseClass}>C</div>
        <div className={keyBaseClass}>V</div>
        <div className={keyBaseClass}>B</div>
        <div className={keyBaseClass}>N</div>
        <div className={keyBaseClass}>M</div>
        <div className={keyBaseClass}>,</div>
        <div className={keyBaseClass}>.</div>
        <div className={keyBaseClass}>/</div>
        <div className={flex3KeyClass}>shift</div>
      </div>

      {/* Row 6: Bottom Row */}
      <div className="row flex gap-[3px]">
        <div className={keyBaseClass}>fn</div>
        <div className={keyBaseClass}>ctrl</div>
        <div className={commandAltKeyClass}>⌥</div>
        <div className={commandAltKeyClass}>⌘</div>
        <div className={spaceKeyClass} />
        <div className={commandAltKeyClass}>⌘</div>
        <div className={commandAltKeyClass}>⌥</div>
        <div className={arrowKeyClass}>◀</div>
        <div className={arrowKeyClass}>▼</div>
        <div className={arrowKeyClass}>▲</div>
        <div className={arrowKeyClass}>▶</div>
      </div>
    </div>
  );
};

export default Keyboard;