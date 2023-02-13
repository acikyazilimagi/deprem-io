import {
  useState,
  useEffect,
  useRef,
  ReactElement,
  Ref,
  ReactNode,
  RefObject,
  MutableRefObject,
  SyntheticEvent,
} from 'react';

type Handler = (target: HTMLElement) => void;
// Hook
export function useOnClickOutside(ref: any, handler: Handler) {
  useEffect(
    () => {
      const listener = (event: MouseEvent | TouchEvent): void => {
        const target = event.target as HTMLElement;
        // Do nothing if clicking ref's element or descendent elements
        if (!ref?.current || ref?.current?.contains(target)) {
          return;
        }

        handler(target);
      };

      document.addEventListener('mousedown', listener);
      document.addEventListener('touchstart', listener);

      return () => {
        document.removeEventListener('mousedown', listener);
        document.removeEventListener('touchstart', listener);
      };
    },
    // Add ref and handler to effect dependencies
    // It's worth noting that because passed in handler is a new ...
    // ... function on every render that will cause this effect ...
    // ... callback/cleanup to run every render. It's not a big deal ...
    // ... but to optimize you can wrap handler in useCallback before ...
    // ... passing it into this hook.
    [ref, handler]
  );
}
