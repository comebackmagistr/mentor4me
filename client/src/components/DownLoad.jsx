import React from 'react';

export default function DownLoad() {
  return (

    <form encType="multipart/form-data" method="post">
      <p>
        <input type="file" name="f" />
      </p>
    </form>

  );
}
