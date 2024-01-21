import React, { ChangeEvent, useState } from "react";
import MyCheckBox from "../atoms/MyCheckBox";
import { createBoolArray, extractHaveTrue } from "../../utils/convertForSend";
import FlexBox from "../atoms/FlexBox";

const Form = () => {
  const list = [
    { id: "male", label: "男" },
    { id: "female", label: "女" },
    { id: "other", label: "不明" },
  ];

  // createBoolArray 関数を使用して初期状態を設定
  const initialCheckBoxState = createBoolArray(list);
  const [gender, setGender] = useState(initialCheckBoxState);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, checked } = e.target;
    setGender({ ...gender, [id]: checked });
  };

  const extractVal = extractHaveTrue(gender);

  const onSubmitButton = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(gender);
    console.log(extractVal);
  };

  return (
    <form onSubmit={onSubmitButton}>
      <FlexBox>
        {list.map((item) => (
          <MyCheckBox
            key={item.id}
            id={item.id}
            label={item.label}
            checked={gender[item.id]}
            onChange={handleChange}
          />
        ))}
      </FlexBox>
      <button type="submit">送信</button>
    </form>
  );
};

export default Form;
