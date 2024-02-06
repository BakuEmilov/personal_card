import React, { useState } from "react";
import { FaRegCopy } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import cls from "./TextData.module.scss";

type ITextData = {
  label: string;
  value: string;
};

const TextData: React.FC<ITextData> = ({ label, value }) => {
  const [showCopyButton, setShowCopyButton] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyText = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setShowCopyButton(false);
      setCopied(true);
      console.log("Текст скопирован:", value);
    } catch (err) {
      console.error("Ошибка копирования текста:", err);
    }
  };

  return (
    <div
      className={cls.containerText}
      onMouseEnter={() => setShowCopyButton(true)}
      onMouseLeave={() => {
        setShowCopyButton(false);
        setCopied(false);
      }}
    >
      <span className="font-medium">{label}:&nbsp;</span>
      <span className={cls.value}>{value}</span>
      {showCopyButton && !copied && (
        <button onClick={handleCopyText}>
          <FaRegCopy color="gray" />
        </button>
      )}
      {copied && (
        <button>
          <FaCheck color="gray" />
        </button>
      )}
    </div>
  );
};

export default TextData;
