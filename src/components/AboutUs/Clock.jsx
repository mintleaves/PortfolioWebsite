import React, { useEffect, useRef } from 'react';

const Clock = () => {
  const hoursContainer = useRef(null);
  const minutesContainer = useRef(null);
  const secondsContainer = useRef(null);

  useEffect(() => {
    const tickElements = Array.from(document.querySelectorAll('.tick'));
    let last = new Date(0);
    last.setUTCHours(-1);

    const updateTime = () => {
      const now = new Date();

      const lastHours = last.getHours().toString().padStart(2, '0');
      const nowHours = now.getHours().toString().padStart(2, '0');
      if (lastHours !== nowHours) {
        updateContainer(hoursContainer.current, nowHours);
      }

      const lastMinutes = last.getMinutes().toString().padStart(2, '0');
      const nowMinutes = now.getMinutes().toString().padStart(2, '0');
      if (lastMinutes !== nowMinutes) {
        updateContainer(minutesContainer.current, nowMinutes);
      }

      const lastSeconds = last.getSeconds().toString().padStart(2, '0');
      const nowSeconds = now.getSeconds().toString().padStart(2, '0');
      if (lastSeconds !== nowSeconds) {
        tick();
        updateContainer(secondsContainer.current, nowSeconds);
      }

      last = now;
    };

    const tick = () => {
      tickElements.forEach(t => t.classList.toggle('tick-hidden'));
    };

    const updateContainer = (container, newTime) => {
      const time = newTime.split('');

      const first = container.firstElementChild;
      if (first.lastElementChild.textContent !== time[0]) {
        updateNumber(first, time[0]);
      }

      const last = container.lastElementChild;
      if (last.lastElementChild.textContent !== time[1]) {
        updateNumber(last, time[1]);
      }
    };

    const updateNumber = (element, number) => {
      const second = element.lastElementChild.cloneNode(true);
      second.textContent = number;

      element.appendChild(second);
      element.classList.add('move');

      setTimeout(() => {
        element.classList.remove('move');
        element.removeChild(element.firstElementChild);
      }, 990);
    };

    setInterval(updateTime, 1000);
    updateTime();
  }, []);

  return (
    <div className="clock text-gray-400">
      <div className="hours" ref={hoursContainer}>
        <div className="first">
          <div className="number">0</div>
        </div>
        <div className="second">
          <div className="number">0</div>
        </div>
      </div>
      <div className="tick">:</div>
      <div className="minutes" ref={minutesContainer}>
        <div className="first">
          <div className="number">0</div>
        </div>
        <div className="second">
          <div className="number">0</div>
        </div>
      </div>
      <div className="tick">:</div>
      <div className="seconds" ref={secondsContainer}>
        <div className="first">
          <div className="number">0</div>
        </div>
        <div className="second infinite">
          <div className="number">0</div>
        </div>
      </div>
    </div>
  );
};

export default Clock;
