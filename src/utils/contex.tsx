import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

type AppContextType = {
  sizeInReadableUnits?: string;
  spazioOccupato: string;
  dataUser?: UserFormValues[];
  setDataUser: React.Dispatch<React.SetStateAction<UserFormValues[]>>;
  isSave?: boolean;
  setIsSave: React.Dispatch<React.SetStateAction<boolean>>;
};

interface UserFormValues {
  id: string;
  name: string;
  anniServizio: string;
  contratto: string;
}

interface AppProviderProps {
  children: ReactNode;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

/* ========== scrivi qui le funzioni da utilizzare in tutti i componenti ========== */

// calcola quanto spazio occupo in localStorage
function getLocalStorageSize() {
  let totalSize = 0;

  for (const key in localStorage) {
    if (localStorage.hasOwnProperty.call(localStorage, key)) {
      const itemSize = (localStorage[key].length + key.length) * 2; // in bytes
      totalSize += itemSize;
    }
  }

  return totalSize;
}
// formatta i bytes in megabyte o kilobyte
function formatSizeUnits(bytes: number) {
  if (bytes >= 1048576) {
    return (bytes / 1048576).toFixed(2) + " MB";
  } else if (bytes >= 1024) {
    return (bytes / 1024).toFixed(2) + " KB";
  } else {
    return bytes + " bytes";
  }
}

const sizeInBytes = getLocalStorageSize();
const sizeInReadableUnits = formatSizeUnits(sizeInBytes);
const spazioOccupato = `Spazio utilizzato in localStorage: ${sizeInReadableUnits}`;

/* ==================== APP PROVIDER  ==================== */
const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [dataUser, setDataUser] = useState<UserFormValues[]>([]);
  // controlla il salvataggio degli utenti
  const [isSave, setIsSave] = useState(false);

  // recupera e salva i dati da localStorage nello stato al caricamento della pagina
  useEffect(() => {
    const storeData = localStorage.getItem("user");
    if (storeData) {
      setDataUser(JSON.parse(storeData));
    }
  }, []);

  // salva i dati in localStorage quando il valore di isSave o dataUser cambia
  useEffect(() => {
    if (isSave) {
      localStorage.setItem("user", JSON.stringify(dataUser));
      const timer = setTimeout(() => {
        setIsSave(false);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [isSave, dataUser]);

  return (
    <AppContext.Provider
      value={{ spazioOccupato, dataUser, setDataUser, isSave, setIsSave }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  const context = useContext(AppContext);
  // controlla se context esiste
  if (!context) {
    throw new Error("useGlobalContext must be used within a AppProvider");
  }
  return context;
};

// eslint-disable-next-line react-refresh/only-export-components
export { AppProvider, useGlobalContext };