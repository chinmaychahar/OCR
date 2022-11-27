import { useEffect, useState } from 'react';
import { createWorker } from 'tesseract.js';
import { useSpeechSynthesis } from 'react-speech-kit';
import './App.css';
function App() {
  const [ocr, setOcr] = useState('');
  const [imageData, setImageData] = useState(null);
  const [progress, setProgress] = useState(0);
  const [textt, settText] = useState('');
  const { speak } = useSpeechSynthesis();

  const worker = createWorker({
    logger: (m) => {
      console.log(m);
      setProgress(parseInt(m.progress * 100));
    },
  });

  const handleOnClick = () => {
    speak({ text: ocr });
  };

  const convertImageToText = async () => {
    if (!imageData) return;
    await worker.load();
    await worker.loadLanguage('eng');
    await worker.initialize('eng');
    const {
      data: { text },
    } = await worker.recognize(imageData);
    setOcr(text);
  };

  useEffect(() => {
    convertImageToText();
  }, [imageData]);

  function handleImageChange(e) {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      const imageDataUri = reader.result;
      console.log({ imageDataUri });
      setImageData(imageDataUri);
    };
    reader.readAsDataURL(file);
  }

  return (
    <div className="App">
      <div>
        <p className="Heading">UPLOAD AN IMAGE</p>
        <label class="custom-file-upload">
          <input
            type="file"
            name=""
            id=""
            onChange={handleImageChange}
            accept="image/*"
          />
        </label>
      </div>

      {progress < 100 && progress > 0 && (
        <div>
          <div className="progress-label">Progress ({progress}%)</div>
          <div className="progress-bar">
            <div className="progress" style={{ width: `${progress}%` }}></div>
          </div>
        </div>
      )}
      <div className="display-flex">
        <img src={imageData} alt="" srcset="" />
        <p>
          <b>Rendered Text:</b> {ocr}
        </p>
        <div>
          <p>
            <h1>Text to Speech Converter in React</h1>
            <textarea className="textAreaStyle" placeholder={ocr}></textarea>
            <button
              className="buttonStyle"
              onClick={() => {
                handleOnClick();
              }}
            >
              Listen
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
export default App;
