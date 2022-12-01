import React from 'react';

export default function SignUpTwo() {
  return (
    <div className="main">
      <p>Регистрация</p>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(Object.fromEntries(new FormData(e.target)));
        }}
        className="form"
        action=""
        method="post"
      >
        <div>Образование</div>
        <input name="education" className="input" type="text" />
        <br />
        {' '}
        <br />
        <div>Место работы</div>
        <input name="job" className="input" type="text" />
        <br />
        {' '}
        <br />
        <div>Профессиональная область</div>
        <input name="profArea" className="input" type="text" />
        <br />
        {' '}
        <br />
        <div>Профессиональные навыки</div>
        <input name="profScill" className="input" type="text" />
        <br />
        {' '}
        <br />
        <div>О себе</div>
        <textarea name="aboutMe" className="input" type="text" />
        <br />
        {' '}
        <br />
        <div>Портфолио</div>
        <input name="portfolio" id="p1" className="input" type="text" placeholder="Введите ссылку" />
        <br />
        {' '}
        <br />
        <div>Повторный ввод пароля</div>
        <input name="repeatPassword" id="p2" className="input" type="password" />
        <br />
        {' '}
        <br />
        <button className="btn" type="submit">Регистрация</button>
      </form>
    </div>

  );
}
