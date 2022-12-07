import React, { useState, useEffect } from 'react';

function SoundList() {
  const [isListening, setIsListening] = useState(false);

  let speechRecognition;
  let recognition;
  let final_transcript = '';

  let recognizing = true; // флаг идет ли распознование

  useEffect(() => {
    console.log(window);
    speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    console.log(speechRecognition);

    // Создаем экземпляр `SpeechRecognition`
    // eslint-disable-next-line new-cap
    recognition = new speechRecognition();
    // Свойство `continuous` определяет, продолжается ли распознавание речи после получения первого финального результата
    // не хотим чтобы когда пользователь прикратил говорить, распознование закончилось
    recognition.continuous = false;
    // обработка промежуточных результатов
    /// / хотим видеть промежуточные результаты. Т.е. мы можем некоторое время видеть слова, которые еще не были откорректированы
    recognition.interimResults = true;
    // максимальное количество альтернатив распознанного слова
    recognition.maxAlternatives = 3;
    // язык
    recognition.lang = 'ru-RU';
  }, []);

  // обработчик состояний
  // useEffect(() => {
  //   recognition.onstart = () => {
  //     console.log("Распознавание голоса запущено");
  //   };
  //   recognition.onerror = ({ error }) => {
  //     console.error(error);
  //   };
  //   recognition.onend = () => {
  //     console.log("Распознавание голоса закончено");
  //     //  // Снова запускаем распознавание, если индикатор имеет значение `true`
  //     if (!recognizing) return;
  //     recognition.start();
  //   };
  // // }, [])

  const handleListen = () => {
    console.log(recognition);
    recognition.onstart = () => {
      console.log('Распознавание голоса запущено');
    };
    useEffect(() => {
      handleListen();
    }, []);

    recognition.onerror = ({ error }) => {
      console.error(error);
    };

    recognition.onend = () => {
      console.log('Распознавание голоса закончено');
      //  // Снова запускаем распознавание, если индикатор имеет значение `true`
      if (!recognizing) return;
      recognition.start();
    };

    // показ нужного сообщения
    recognition.onresult = (e) => {
      /// / Промежуточные результаты обновляются на каждом цикле распознавания
      let interim_transcript = '';
      // Перебираем результаты с того места, на котором остановились в прошлый раз
      for (let i = e.resultIndex; i < e.results.length; i++) {
        // `isFinal` является индикатором того, что речь закончилась
        if (e.results[i].isFinal) {
          /// / Редактируем промежуточные результаты
          const result = editInterim(e.results[i][0].transcript);
          // // и добавляем их к финальному результату
          final_transcript += result;
        } else {
          // В противном случае, записываем распознанные слова в промежуточный результат
          interim_transcript += e.results[i][0].transcript;
        }
      }
      final_transcript = editFinal(final_transcript);
      final_text.value = final_transcript;
      interim_text.value = interim_transcript;
    };

    // распознавалка не понимает" знаков препинания. Для того, чтобы помочь ему в этом определим словарь в виде объекта:

    const DICTIONARY = {
      точка: '.',
      запятая: ',',
      вопрос: '?',
      восклицание: '!',
      двоеточие: ':',
      тире: '-',
      абзац: '\n',
      отступ: '\t',
    };

    // Функция editInterim() разбивает фразу на массив слов, перебирает слова, удаляет
    // пробелы в начале и конце слова и заменяет символом из словаря
    // при совпадении. Обратите внимание, что мы приводим слово в нижний регистр только
    // при поиске совпадения. Если мы сделаем это в строке word = word.trim(),
    // то нивелируем автоматическую "капитализацию" строки, выполняемую браузером.

    function editInterim(s) {
      return s
        .split(' ')
        .map((word) => {
          word = word.trim();
          return DICTIONARY[word] ? DICTIONARY[word] : word;
        })
        .join(' ');
    }

    // Функция editInterim() разбивает фразу на массив слов, перебирает слова,
    // удаляет пробелы в начале и конце слова и заменяет символом из словаря при
    // совпадении. Обратите внимание, что мы приводим слово в нижний регистр только
    // при поиске совпадения. Если мы сделаем это в строке word = word.trim(), то
    // нивелируем автоматическую "капитализацию" строки, выполняемую браузером.

    function editFinal(s) {
      return s.replace(/\s([\.+,?!:-])/g, '$1');
    }
  };

  // const click
  Handler =() => {
  //   final_transcript = "";
  //   recognition.start();
  //   recognizing = true;
  //   final_text.value = "";
  //   interim_text.value = "";
  // }

  return (
    <div id="wrapper" className="jNudlt">
      <div className="irzWzB">
        <div className="xCnor">

          <div id="buttons">
            <button
              type="submit"
              className="start"
              onClick={() => {
                final_transcript = '';
                recognition.start();
                final_text.value = '';
                interim_text.value = '';
                recognizing = true;
              }}
            >
              <div width="63px" height="64px" className="sc-dkiSSI mjGfG">
                <svg
                  width="63"
                  height="64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  transform="scale(1.3)"
                >
                  <path
                    d="M31.5 2.908a7.875 7.875 0 00-7.875 7.875v21a7.875 7.875 0 0015.75 0v-21A7.875 7.875 0 0031.5 2.908v0z"
                    stroke="#226AF1"
                    strokeWidth="2.779"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M49.875 26.533v5.25a18.375 18.375 0 11-36.75 0v-5.25M31.5 50.158v10.5M21 60.658h21"
                    stroke="#226AF1"
                    strokeWidth="2.779"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                </svg>
              </div>
            </button>

            <div className="kPqvjK" />
            <button
              type="submit"
              className="stop button is-primary"
              onClick={() => {
                recognition.stop();
                recognizing = false;
              }}
            >
              Stop
            </button>

            <button type="submit" className="clear button is-danger" onClick={() => { final_text.value = ''; }}>Delete</button>

          </div>
          <input className="input is-link" type="text" id="interim_text" />
        </div>
      </div>
      <textarea className="textarea is-info is-small" id="final_text" cols="30" rows="10" />
    </div>
  );
}

// return (
//   <>
// <div id="wrapper">
//     <h1>Speech Recognition</h1>
//     <textarea id="final_text" cols="30" rows="10"></textarea>
//     <input type="text" id="interim_text" />
//     <div id="buttons">
//       <button className="start" onClick={()=> {
//           final_transcript = "";
//           recognition.start();
//           recognizing = true;
//           final_text.value = "";
//           interim_text.value = "";
//       }}>Старт</button>
//       <button className="stop" onClick={()=> {
//             recognition.stop();
//             recognizing = false;
//       }}>Стоп</button>
//       <button className="clear" onClick={()=> {final_text.value = ""}}>Очистить</button>
//     </div>
//     </div>
//   </>
// )
// }

// return (
//   <>
//     <h1>Voice Notes</h1>
//     <div className="container">
//       <div className="box">
//         <h2>Current Note</h2>
//         {isListening ? <span>Кнопка микрофона</span> : <span>🛑🎙️</span>}
//         <button onClick={handleSaveNote} disabled={!note}>
//           Save Note
//         </button>
//         <button onClick={() => setIsListening((prevState) => !prevState)}>
//           Start/Stop
//         </button>
//         <button onClick={() => {
//         }}>
//           Start
//         </button>
//         <p>{note}</p>
//       </div>
//       <div className="box">
//         <h2>Notes</h2>
//         {savedNotes.map((el) => (
//           <p key={el}>{el}</p>
//         ))}
//       </div>
//     </div>
//   </>
// );
// }

export default SoundList;
