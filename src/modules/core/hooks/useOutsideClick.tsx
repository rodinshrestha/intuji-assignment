import React from 'react';

type Ref = React.RefObject<HTMLDivElement>;
type Cb = () => void;
type Opt = {
  [key: string]: React.RefObject<HTMLDivElement>;
};

/**
 *
 * @param ref Pass the reference of HTML element
 * @param cb Callback function
 * @param opt Its optional reference
 *
 *
 */
const useOutsideClick = (ref: Ref, cb: Cb, opt?: Opt) => {
  React.useEffect(() => {
    const listener = (e: TouchEvent | MouseEvent) => {
      if (!ref.current || ref.current.contains(e.target as Node)) {
        return;
      }

      //for other refs
      if (opt && Object.keys(opt).length) {
        for (const ref in opt) {
          if (opt[ref].current?.contains(e.target as Node)) {
            return;
          }
        }
      }
      cb();
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, cb, opt]);
};

export default useOutsideClick;
