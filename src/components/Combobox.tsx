import { Dispatch, SetStateAction, useCallback } from "react";
import useClickOutSide from "../hooks/useClickOutSide";
import classnames from "classnames";
interface Props {
  title: string;
  data: string[]; // for view
  multiSelect: boolean;
  listSelected: string[];
  setListSelected: Dispatch<SetStateAction<string[]>>;
  isOpen: boolean;
  close: () => void;
  open: () => void;
}
const Combobox = ({
  title,
  data,
  multiSelect = false,
  listSelected,
  setListSelected,
  isOpen,
  close,
  open,
}: Props) => {
  const refCloseCombobox = useClickOutSide(() => {
    // close();
  });

  const handleClickItem = useCallback(
    (item: string) => {
      if (!listSelected.some((i) => i === item)) {
        if (!multiSelect) {
          setListSelected([item]);
          close()
        } else {
          setListSelected([...listSelected, item]);
        }
      } else {
        let copyData = [...listSelected];
        copyData = copyData.filter((i) => i !== item);
        setListSelected([...copyData]);
      }
    },
    [close, listSelected, multiSelect, setListSelected]
  );
  const handleSelected = useCallback(
    (item: string) => {
      if (listSelected.some((i) => i === item)) {
        return true;
      }
      return false;
    },
    [listSelected]
  );

  return (
    <div className="combobox mx-3" ref={refCloseCombobox}>
      <strong>{title}</strong>
      <div
        className="combobox-field flex justify-between items-center px-1 rounded bg-gray-600 text-white py-3"
        onClick={() => open()}
      >
        <div className="selected">
          {listSelected.length > 0 && listSelected.length > 3
            ? `than more ${listSelected.length}`
            : listSelected.join(",")}
        </div>
        <div>{isOpen ? "close" : "open"}</div>
      </div>
      <div
        className={classnames("combobox-items py-1 px-1 bg-gray-100 rounded", {
          block: isOpen,
          hidden: !isOpen,
        })}
      >
        <ul>
          {data.map((i: string, index: number) => {
            return (
              <li
                key={index}
                className="my-1"
                onClick={() => handleClickItem(i)}
              >
                {multiSelect && (
                  <input
                    type={"checkbox"}
                    checked={handleSelected(i)}
                    className="mx-2"
                    readOnly
                  />
                )}
                <span>{i}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Combobox;
