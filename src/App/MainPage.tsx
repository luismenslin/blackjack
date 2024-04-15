import React, {useState} from 'react';
import './MainPage.module.scss';
import MoneyInput from "./Components/MoneyInput";

const MainPage = () => {
  const [value, setValue] = useState(0);

  return (
      <>
        <MoneyInput value={value} />
      </>
  )
}

export { MainPage };
