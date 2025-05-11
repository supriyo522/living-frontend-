import API from '../api';
import './UploadForm.css';


const UploadForm = () => {
  const handleUpload = async e => {
    const formData = new FormData();
    formData.append('file', e.target.files[0]);

    await API.post('/tasks/upload', formData);
    alert('Upload successful');
    window.location.reload();
  };

  return (
    <div className="upload-form-container">
      <h3>Upload Tasks (CSV)</h3>
      <input type="file" accept=".csv" onChange={handleUpload} />
    </div>
  );
};

export default UploadForm;
