import React, { useState } from 'react';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import UploadIcon from '@mui/icons-material/Upload';

interface MediaUploaderProps {
  file: File | null;
  onFileChange: (file: File | null) => void;
  error: string | null;
  loading: boolean;
  progress: number;
  isLoadingFFmpeg: boolean;
}

export default function MediaUploader({
  file,
  onFileChange,
  error,
  loading,
  progress,
  isLoadingFFmpeg
}: MediaUploaderProps) {
  const [isDragging, setIsDragging] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile && selectedFile.type.startsWith('video/')) {
      onFileChange(selectedFile);
    } else {
      onFileChange(null);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile && droppedFile.type.startsWith('video/')) {
      onFileChange(droppedFile);
    } else {
      onFileChange(null);
    }
  };

  return (
    <>
      <div 
        id="video-uploader-area"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          border: '2px dashed',
          borderRadius: '8px',
          padding: '3rem',
          backgroundColor: '#f9fafb',
          borderColor: isDragging ? '#10b981' : '#d1d5db'
        }}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <input
          type="file"
          accept="video/*"
          onChange={handleFileChange}
          style={{ display: 'none' }}
          id="video-input"
        />
        <label
          htmlFor="video-input"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            cursor: 'pointer'
          }}
        >
          <UploadIcon style={{ width: '3rem', height: '3rem', color: '#9ca3af', marginBottom: '1rem' }} />
          <span style={{ fontSize: '0.875rem', color: '#4b5563' }}>
            {file ? file.name : 'Drop your video here or click to browse'}
          </span>
        </label>
      </div>

      {error && (
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', backgroundColor: '#fef2f2', padding: '1rem', borderRadius: '8px' }}>
          <ErrorOutlineIcon style={{ width: '1.25rem', height: '1.25rem' }} />
          <span style={{ color: '#b91c1c' }}>{error}</span>
        </div>
      )}

      {(loading || isLoadingFFmpeg) && (
        <div style={{ marginTop: '1rem' }}>
          <div style={{ height: '0.5rem', backgroundColor: '#e5e7eb', borderRadius: '9999px', overflow: 'hidden' }}>
            <div
              style={{
                height: '100%',
                backgroundColor: '#2563eb',
                transition: 'all 0.3s',
                width: `${isLoadingFFmpeg ? 100 : progress}%`
              }}
            ></div>
          </div>
          <p style={{ fontSize: '0.875rem', color: '#4b5563', textAlign: 'center' }}>
            {isLoadingFFmpeg ? 'Loading FFmpeg...' : `Converting... ${progress}%`}
          </p>
        </div>
      )}
    </>
  );
}
