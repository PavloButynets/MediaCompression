import { useState } from 'react';
import VideocamIcon from '@mui/icons-material/Videocam';
import MediaUploader from './VideoUploader';
import MediaSettings from './VideoSettings';
import { useFFmpeg } from '../hooks/useFFmpeg';
import type { ConversionSettings } from '../types';

import { styles } from './MediaConverter.styles';
import Button from '~/components/button/Button';

const defaultSettings: ConversionSettings = {
  videoCodec: 'libx264',
  audioCodec: 'aac',
  videoBitrate: '2500k',
  audioBitrate: '128k',
  frameRate: '30',
  resolution: '1280x720',
  compressionMethod: 'bitrate'
};

export default function MediaConverter() {
  const [file, setFile] = useState<File | null>(null);
  const [settings, setSettings] = useState<ConversionSettings>(defaultSettings);
  const [showSettings, setShowSettings] = useState(false);

  const {
    convert,
    error,
    loading,
    progress,
    isLoadingFFmpeg,
    fileSizes,
    formatFileSize
  } = useFFmpeg();

  const handleConvert = async () => {
    if (!file) return;
    await convert(file, settings);
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <VideocamIcon style={styles.headerIcon} />
        <h1 style={styles.headerTitle}>Video Converter</h1>
      </div>
      <div style={styles.buttonWrapper}>
        {file && (
          <Button
            sx={styles.resetButton}
            variant='primary'
            onClick={() => {
              setFile(null);
              setSettings(defaultSettings);
              setShowSettings(false);
            }}
          >
            Reset
          </Button>
        )}
        <Button
          sx={styles.settingsButton}
          size='sm'
          onClick={() => setShowSettings(!showSettings)}
        >
          Settings
        </Button>
      </div>

      {showSettings && (
        <div>
          <MediaSettings
            settings={settings}
            onSettingsChange={setSettings}
          />
        </div>
      )}

      <div style={styles.uploaderWrapper}>
        <MediaUploader
          file={file}
          onFileChange={setFile}
          error={error}
          loading={loading}
          progress={progress}
          isLoadingFFmpeg={isLoadingFFmpeg}
        />

        {fileSizes.converted !== null && (
          <div style={styles.fileSizeInfo}>
            <div>
              <span>Original size: {formatFileSize(fileSizes.original)}</span>
              <span>Converted size: {formatFileSize(fileSizes.converted)}</span>
            </div>
            <div>
              {fileSizes.converted < fileSizes.original ? 'Saved: ' : 'Increased: '}
              {formatFileSize(Math.abs(fileSizes.converted - fileSizes.original))}
              ({Math.abs(Math.round((1 - fileSizes.converted / fileSizes.original) * 100))}%)
            </div>
          </div>
        )}

        <div style={styles.convertButtonWrapper}>
          <Button
            sx={styles.convertButton}
            onClick={handleConvert}
            disabled={!file || loading || isLoadingFFmpeg}
          >
            {isLoadingFFmpeg ? 'Loading FFmpeg...' : loading ? 'Compressing...' : 'Compress'}
          </Button>
        </div>
      </div>
    </div>
  );
}
