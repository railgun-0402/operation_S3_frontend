'use client';

import { useEffect, useState } from 'react';

type user = {
  id: string,
  name: string,
  email: string,
  password: string,
  auth: string
}

export default function Home() {
  const [message, setMessage] = useState('');
  const [users, setUsers] = useState<user[]>([]);
  // ユーザー名
  const [name, setName] = useState('');
  // 自己紹介
  const [intro, setIntro] = useState('');

  useEffect(() => {
    fetch('http://127.0.0.1:5000')
      .then((res) => res.json())
      .then((data:any) => {        
        // ユーザー名を入れる
        setName(data[0].name)
        // 自己紹介
        setIntro(data[0].email)
      });
  }, []);

  const handleUpdate = () => {
    alert('更新しました');
  }

  return (    
    <>
      <div className="container mt-4">
        <div className="row justify-content-center">
          <div className="col-md-9">            
            <h2>マイページ</h2>

            {/* 名前入力フォーム */}
            <div className="mb-4">
              <label htmlFor="nameFormInput" className="form-label">名前</label>
              <input type="text" className="form-control" id="nameFormInput" placeholder="Input Your Name" defaultValue={name} onChange={(e) => setName(e.target.value)} />
            </div>

            {/* 性別選択 */}
            <label htmlFor="nameFormInput" className="form-label">性別</label>
            <div className="form-check">
              <input type="radio" className="form-check-input" name='flexRadioDefault' id='flexSexRadio1' defaultChecked />
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
              <textarea className="form-control" id="introFormInput" rows={3} defaultValue={intro} onChange={(e) => setName(e.target.value)}></textarea>
            </div>

            <div className="center-block">
              <button type='submit' onClick={handleUpdate} className="btn btn-primary">更新する</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
