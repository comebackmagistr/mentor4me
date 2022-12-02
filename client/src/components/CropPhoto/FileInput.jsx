import React, { useRef } from 'react';

function FileInput({ onImageSelected }) {
  // useRef - хранение ссылки на html-элементы внутри компонента
  const inputRef = useRef();

  // Навешиваем событие на кнопку загрузки файлов
  const handleOnChange = (event) => {
    if (event.target.files && event.target.files.length > 0) {
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = () => {
        onImageSelected(reader.result);
      };
    }
  };

  const onChooseImg = () => {
    inputRef.current.click();
  };

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        name="filename"
        ref={inputRef}
        onChange={handleOnChange}
        style={{ display: 'none' }}
      />
      <button type="button" className="btn" onClick={onChooseImg}>
        Choose Image
      </button>
    </div>
  );
}

export default FileInput;
