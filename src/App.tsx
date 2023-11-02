import { createRef, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';
import './App.css';
import {
  KolButton,
  KolInputPassword,
  KolInputText,
  KolKolibri,
} from '@public-ui/react';
import { Modal } from './Modal';
import Badge from './Badge';

function App() {
  const [count, setCount] = useState(0);
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);

  const label = `Count is ${count}`;

  const inputProps = {
    _label: 'Password',
    _required: true,
    _icon: {
      left: 'codicon codicon-key',
    },
    _smartButton: {
      _label: isPasswordHidden ? 'Passwort einblenden' : 'Passwort ausblenden',
      _icon: 'codicon codicon-eye',
      _on: {
        onClick: (event: Event) => {
          setIsPasswordHidden(!isPasswordHidden);
        },
      },
    },
    _value: 'password',
  };

  return (
    <div className="font-sans m-10 text-center">
      <div className="flex align-center gap-10 justify-center">
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="block w-20 logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img
            src={reactLogo}
            className="block w-20 logo rotate"
            alt="React logo"
          />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <KolKolibri className="block w-20 logo" />
        </a>
      </div>
      <h1>Vite + React + KoliBri</h1>
      <div className="grid gap-8 items-center justify-center">
        <div className="container my-4 d-grid gap-4">
          <Badge label="Test Badge" variant="white" />
          <Badge label="Test Badge" variant="grey" />
          <Badge label="Test Badge" variant="green" />
          <Badge label="Test Badge" variant="blue" />
          <Badge label="Test Badge" variant="violet" />
          <Badge label="Test Badge" variant="red" />
          <Badge label="Test Badge" variant="orange" />
          <Badge label="Test Badge" variant="yellow" />
        </div>
        <div>
          <Modal />
        </div>
        <div>
          <Modal />
        </div>
        <div>
          <button onClick={() => setCount((count) => count + 1)}>
            {label}
          </button>
        </div>
        <div className="flex justify-center">
          <div className="flex gap-8">
            <KolButton
              _label={label}
              _on={{
                onClick: () => setCount((count) => count + 1),
              }}
            />
            <KolButton
              _label={label}
              _hideLabel
              _variant="danger"
              _icon="codicon codicon-check"
              _on={{
                onClick: () => setCount((count) => count + 1),
              }}
            />
          </div>
        </div>
        <div className="text-left">
          {isPasswordHidden ? (
            <KolInputPassword {...inputProps} />
          ) : (
            <KolInputText {...inputProps} />
          )}
        </div>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="text-gray text-sm">
        Click on the <strong>Vite</strong>, <strong>React</strong> and{' '}
        <strong>KoliBri</strong> logos to learn more
      </p>
    </div>
  );
}

export default App;
