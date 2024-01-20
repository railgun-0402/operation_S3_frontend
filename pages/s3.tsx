'use client';

import 'bootstrap/dist/css/bootstrap.min.css'

export default function S3Page() {
    
    const handleDownloadFromS3 = () => {
        fetch('http://127.0.0.1:5000/s3')
        .then((res) => res.text())
        .then((data:any) => {        
            console.log(data);
        });
    };

    return (
      <div>        
        <div className='container mt-4'>            
            <div className='row justify-content-center'>
                <div className="col-md-9">
                    {/* title */}
                    <h2>S3ページ</h2>
                    <br />
                        
                    {/* ファイルアップロード */}
                    <div className="mb-3">
                        <label htmlFor="formFileDisabled" className="form-label">S3へアップロード</label>
                        <input className="form-control" type="file" id="formFileDisabled" />
                    </div>
                        
                    <hr />
                    <h5>S3からファイルをダウンロードするサンプル</h5>
                    {/* ファイルアップロード */}
                    <div className="mb-3">                     
                        <button onClick={handleDownloadFromS3} className='btn btn-primary'>S3 Download</button>
                    </div>
                </div>    
            </div>                
        </div>                    
      </div>
    );
  }