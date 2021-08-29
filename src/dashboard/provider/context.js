import React from 'react';
import { useHistory } from 'react-router-dom';

// create new context
const Context = React.createContext({});

export default function DashboardProvider({ children }) {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef(null);
  const history = useHistory();

  const toggle = React.useCallback(() => {
    setOpen((prevState) => !prevState);
  }, []);

  // set the html tag overflow to hidden
  // close side navigation when you click on a sidenav item.
  React.useEffect(() => {
    document.documentElement.style.overflow = 'hidden';
    return history.listen(() => {
      if (open) {
        setOpen(false);
      }
    });
  }, [history, open]);

  // close side navigation on click outside, 
  // uses optional chaining operator, if current ref element does not contain the event element
  React.useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!ref.current?.contains(event.target)) {
        if (!open) return;
        setOpen(false);
      }
    };
    window.addEventListener('click', handleOutsideClick);
    return () => window.removeEventListener('click', handleOutsideClick);
  }, [open, ref]);
// open state, ref, and history is the context being passed down from here
  return (
    <Context.Provider value={{ open, ref, toggle }}>
      {children}
    </Context.Provider>
  );
}

// export custom context hook to use/consume all context values { open, ref, toggle } in consumer components
export function useToggle() {
  return React.useContext(Context);
}
