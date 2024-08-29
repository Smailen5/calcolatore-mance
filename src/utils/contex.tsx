import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

type AppContextType = {
  sizeInReadableUnits?: string;
  spazioOccupato?: string;
  dataUser?: UserFormValues[];
  setDataUser: React.Dispatch<React.SetStateAction<UserFormValues[]>>;
  isSave?: boolean;
  setIsSave: React.Dispatch<React.SetStateAction<boolean>>;
  hours?: number;
  setHours: React.Dispatch<React.SetStateAction<number>>;
  dataUserHoursSession?: UserFormValues[];
  setDataUserHoursSession: React.Dispatch<
    React.SetStateAction<UserFormValues[]>
  >;
  selectedUser: string;
  setSelectedUser: (id: string) => void;
  nameUser: string;
  setNameUser: (name: string) => void;
};

export interface UserFormValues {
  id: string;
  name: string;
  anniServizio: string;
  contratto: string;
  oreLavorate?: number;
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
  const [hours, setHours] = useState<number>(0);
  // salva in session storage i dati degli utenti
  const [dataUserHoursSession, setDataUserHoursSession] = useState<
    UserFormValues[]
  >([]);
  const [selectedUser, setSelectedUser] = useState<string>("");
  const [nameUser, setNameUser] = useState<string>("");

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
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [isSave, dataUser]);

  // RECUPERA I DATI IN SESSION STORAGE ALTRIMENTI LI RECUPERA DA LOCAL STORAGE
  useEffect(() => {
    const storeData = sessionStorage.getItem("user");
    if (storeData) {
      setDataUserHoursSession(JSON.parse(storeData));
      // console.log("dati recuperati da sessionStorage");
    } else {
      // console.log("non ci sono dati in sessionStorage");
    }
  }, []);

  // SALVA I DATI CON LE ORE IN SESSION STORAGE
  useEffect(() => {
    if (isSave) {
      sessionStorage.setItem("user", JSON.stringify(dataUserHoursSession));
      const timer = setTimeout(() => {
        setIsSave(false);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [isSave, dataUserHoursSession]);

  return (
    <AppContext.Provider
      value={{
        spazioOccupato,
        dataUser,
        setDataUser,
        isSave,
        setIsSave,
        hours,
        setHours,
        dataUserHoursSession,
        setDataUserHoursSession,
        selectedUser,
        setSelectedUser,
        nameUser,
        setNameUser,
      }}
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

