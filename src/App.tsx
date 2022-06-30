import { useState } from "react";
import "./app.scss";
import Combobox from "./components/Combobox";
import useToggle from "./hooks/useToggle";
const data = [
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "night",
  "ten",
];
const App = () => {
  // const [state1,toggle1,close1,open1] = useToggle()
  const [state1, setState1] = useState(false);
  const [state2, toggle2, close2, open2] = useToggle();
  const [listSelected, setListSelected] = useState<string[]>([]);
  const [listSelected2, setListSelected2] = useState<string[]>([]);
  console.log(state1);
  return (
    <div className="flex justify-center items-start w-screen h-screen bg-gray-300">
      <Combobox
        data={data}
        listSelected={listSelected}
        setListSelected={setListSelected}
        multiSelect={true}
        title="multi selects combobox"
        isOpen={state1}
        close={() => setState1(false)}
        open={() => setState1(true)}
      />
      <Combobox
        data={data}
        listSelected={listSelected2}
        setListSelected={setListSelected2}
        multiSelect={false}
        title="one select combobox"
        isOpen={state2}
        close={close2}
        open={open2}
      />
    </div>
  );
};

export default App;
