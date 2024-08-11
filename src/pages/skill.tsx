import React, { useState, useCallback, useRef, useDebugValue, memo } from "react";
import { Box, Flex, Text, Button, Link } from "@chakra-ui/react";

// カスタムフック
const useCustomCounter = (initialValue = 0) => {
  const [count, setCount] = useState(initialValue);

  // useDebugValueでデバッグ情報を設定
  useDebugValue(count > 5 ? "High" : "Low");

  const increment = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  return { count, increment };
};

export default function Skill() {
  return (
    <>
      <UseCallbackComponent />
      <UseRefComponent />
    </>
  );
}

export const UseRefComponent = () => {
  const inputEl = useRef(null);
  const handleClick = () => {
    // current の要素を参照
    if (inputEl.current) {
      (inputEl.current as HTMLInputElement).focus();
    }
  };
  return (
    <div>
      <input className="input" ref={inputEl} type="text" />
      <button className="button" onClick={handleClick}>
        input要素にフォーカスする
      </button>
    </div>
  );
};

// memoでラップ
const ChildComponent = memo(({ name, handleClick }: { name: string; handleClick: () => void }) => {
  console.log(`子コンポーネント「${name}」が再レンダリングされました`);
  return (
    <Box pt={10} as={Link} onClick={handleClick}>
      <Button>{name}を+1</Button>
    </Box>
  );
});

/**
 * 数値を表示するコンポーネントです。
 * 子コンポーネントに、クリックすると
 * 数値が増えるボタンを持っています。
 */
// Counterコンポーネント（親）
export const UseCallbackComponent = () => {
  // カスタムフックを使用
  const counter1 = useCustomCounter();
  const counter2 = useCustomCounter();

  //子コンポーネントを呼び出す
  return (
    <Box p={10}>
      <div>
        {counter1.count} , {counter2.count}
      </div>
      <div className="buttonGroup">
        <ChildComponent name="カウンタ1" handleClick={counter1.increment} />
        <ChildComponent name="カウンタ2" handleClick={counter2.increment} />
      </div>
    </Box>
  );
};
