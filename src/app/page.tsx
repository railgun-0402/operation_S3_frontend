import Form from 'react-bootstrap/Form';

export default function Home() {
  return (
    <>
      <div className="container mt-4">
        <div className="row justify-content-center">
          <div className="col-md-9">
            <h2>マイページ</h2>

            {/* 名前入力フォーム */}
            <div className="mb-4">
              <label htmlFor="nameFormInput" className="form-label">名前</label>
              <input type="text" className="form-control" id="nameFormInput" placeholder="Input Your Name" />
            </div>

            {/* 性別選択 */}
            <label htmlFor="nameFormInput" className="form-label">性別</label>
            <div className="form-check">
              <input type="radio" className="form-check-input" name='flexRadioDefault' id='flexSexRadio1' />
              <label htmlFor="flexSexRadio" className="form-check-label1">男性</label>
            </div>

            <div className="form-check">
              <input type="radio" className="form-check-input" name='flexRadioDefault' id='flexSexRadio2' />
              <label htmlFor="flexSexRadio" className="form-check-label2">女性</label>
            </div>

            <div className="form-check">
              <input type="radio" className="form-check-input" name='flexRadioDefault' id='flexSexRadio3' />
              <label htmlFor="flexSexRadio" className="form-check-label3">その他</label>
            </div>
            <br />

            {/* 自己紹介入力フォーム */}
            <div className="mb-3">
              <label htmlFor="introFormInput" className="form-label">自己紹介</label>
              <textarea className="form-control" id="introFormInput" rows={3}></textarea>
            </div>

            <div className="center-block">
              <button type='submit' className="btn btn-primary">更新する</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
