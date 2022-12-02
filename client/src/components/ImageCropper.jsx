import React, { useState } from 'react';
import Cropper from 'react-easy-crop';
import getCroppedImg from './cropImage';

function ImageCropper({ image, onCropDone, onCropCancel }) {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedArea, setCroppedArea] = useState(null);
  const [aspectRatio, setAspectRatio] = useState(4 / 3);

  const onCropComplete = (croppedAreaPercentage, croppedAreaPixels) => {
    setCroppedArea(croppedAreaPixels);
  };

  const onAspectRatioChange = (event) => {
    setAspectRatio(event.target.value);
  };

  return (
    <div className="cropper">
      <div>
        <Cropper
          image={image}
          aspect={aspectRatio}
          crop={crop}
          zoom={zoom}
          onCropChange={setCrop}
          onZoomChange={setZoom}
          onCropComplete={onCropComplete}
          style={{
            containerStyle: {
              width: '100%',
              height: '80%',
              backgroundColor: '#fff',
            },
          }}
        />
      </div>

      <div className="action-btns" style={{ zIndex: 1000, position: 'absolute' }}>
        <div className="aspect-ratios" onChange={onAspectRatioChange}>
          {/* <input
          type="range"
          value={zoom}
          min={1}
          max={3}
          step={0.1}
          aria-labelledby="Zoom" */}

          <input type="radio" value={1 / 1} name="ratio" />
          {' '}
          1:1
          <input type="radio" value={5 / 4} name="ratio" />
          {' '}
          5:4s
          <input type="radio" value={4 / 3} name="ratio" />
          {' '}
          4:3
          <input type="radio" value={3 / 2} name="ratio" />
          {' '}
          3:2
          <input type="radio" value={5 / 3} name="ratio" />
          {' '}
          5:3
          <input type="radio" value={16 / 9} name="ratio" />
          {' '}
          16:9
          <input type="radio" value={3 / 1} name="ratio" />
          {' '}
          3:1

        </div>

        <button type="button" className="btn btn-outline" onClick={onCropCancel}>
          Cancel
        </button>

        <button
          type="button"
          className="btn"
          onClick={async () => {
            onCropDone(croppedArea);
            const res = await getCroppedImg(image, croppedArea);
            console.log(res);
          }}
        >
          Done
        </button>
      </div>
    </div>
  );
}

export default ImageCropper;
