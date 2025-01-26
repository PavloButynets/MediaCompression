import type { ConversionSettings } from '../types';
import { styles } from './VideoSettings.styles.ts';

interface MediaSettingsProps {
  settings: ConversionSettings;
  onSettingsChange: (settings: ConversionSettings) => void;
}

export default function MediaSettings({ settings, onSettingsChange }: MediaSettingsProps) {
  const handleSettingChange = (key: keyof ConversionSettings, value: string) => {
    onSettingsChange({ ...settings, [key]: value });
  };

  const renderCompressionControl = () => {
    switch (settings.compressionMethod) {
      case 'percentage':
        return (
          <div style={styles.inputWrapper}>
            <label style={styles.label}>Target Quality Percentage</label>
            <input
              style={styles.input}
              type="range"
              min="1"
              max="100"
              value={settings.targetPercentage || '100'}
              onChange={(e) => handleSettingChange('targetPercentage', e.target.value)}
            />
            <div style={styles.textSmall}>
              {settings.targetPercentage || '100'}% quality
            </div>
            <p style={styles.description}>
              Adjust the quality percentage where 100% maintains highest quality and 1% gives maximum compression.
              Lower values result in smaller files but may reduce video quality.
            </p>
          </div>
        );
      case 'filesize':
        return (
          <div style={styles.inputWrapper}>
            <label style={styles.label}>Target File Size (MB)</label>
            <input
              style={styles.input}
              type="number"
              min="1"
              max="10240"
              value={settings.targetFilesize || '100'}
              onChange={(e) => handleSettingChange('targetFilesize', e.target.value)}
            />
            <p style={styles.description}>
              Enter desired video file size in MB (Megabytes). Larger sizes maintain better quality.
              Maximum 10240MB (10GB).
            </p>
          </div>
        );
      case 'crf':
        return (
          <div style={styles.inputWrapper}>
            <label style={styles.label}>Video Quality (QP)</label>
            <select
              style={styles.select}
              value={settings.crfValue || '23'}
              onChange={(e) => handleSettingChange('crfValue', e.target.value)}
            >
              {Array.from({ length: 34 }, (_, i) => i + 18).map((value) => (
                <option key={value} value={value.toString()}>
                  {value} {value === 18 ? '(Best Quality)' : value === 51 ? '(Smallest Size)' : ''}
                </option>
              ))}
            </select>
            <p style={styles.description}>
              Lower values mean better quality but larger file size. 18 is visually lossless, 51 is worst quality.
            </p>
          </div>
        );
      case 'bitrate':
        return (
          <div style={styles.inputWrapper}>
            <label style={styles.label}>Video Bitrate</label>
            <select
              style={styles.select}
              value={settings.videoBitrate}
              onChange={(e) => handleSettingChange('videoBitrate', e.target.value)}
            >
              <option value="300k">300 Kbps</option>
              <option value="1000k">1 Mbps</option>
              <option value="2500k">2.5 Mbps</option>
              <option value="5000k">5 Mbps</option>
              <option value="8000k">8 Mbps</option>
            </select>
          </div>
        );
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Conversion Settings</h2>
      <div>
        <div style={styles.inputWrapper}>
          <label style={styles.label}>Compression Method</label>
          <select
            style={styles.select}
            value={settings.compressionMethod || 'bitrate'}
            onChange={(e) => handleSettingChange('compressionMethod', e.target.value)}
          >
            <option value="bitrate">Target a max bitrate</option>
            <option value="percentage">Target a quality percentage</option>
            <option value="filesize">Target a file size (MB)</option>
            <option value="crf">Target a video quality (QP)</option>
          </select>
        </div>

        <div>
          {renderCompressionControl()}
        </div>

        <div style={styles.inputWrapper}>
          <label style={styles.label}>Video Codec</label>
          <select
            style={styles.select}
            value={settings.videoCodec}
            onChange={(e) => handleSettingChange('videoCodec', e.target.value)}
          >
            <option value="libx264">H.264</option>
            <option value="libx265">H.265</option>
          </select>
        </div>

        <div style={styles.inputWrapper}>
          <label style={styles.label}>Audio Codec</label>
          <select
            style={styles.select}
            value={settings.audioCodec}
            onChange={(e) => handleSettingChange('audioCodec', e.target.value)}
          >
            <option value="aac">AAC</option>
            <option value="mp3">MP3</option>
          </select>
        </div>

        <div style={styles.inputWrapper}>
          <label style={styles.label}>Audio Bitrate</label>
          <select
            style={styles.select}
            value={settings.audioBitrate}
            onChange={(e) => handleSettingChange('audioBitrate', e.target.value)}
          >
            <option value="64k">64 kbps</option>
            <option value="96k">96 kbps</option>
            <option value="128k">128 kbps</option>
            <option value="192k">192 kbps</option>
            <option value="256k">256 kbps</option>
          </select>
        </div>

        <div style={styles.inputWrapper}>
          <label style={styles.label}>Frame Rate</label>
          <select
            style={styles.select}
            value={settings.frameRate}
            onChange={(e) => handleSettingChange('frameRate', e.target.value)}
          >
            <option value="24">24 fps</option>
            <option value="30">30 fps</option>
            <option value="60">60 fps</option>
          </select>
        </div>

        <div style={styles.inputWrapper}>
          <label style={styles.label}>Max Resolution</label>
          <select
            style={styles.select}
            value={settings.resolution}
            onChange={(e) => handleSettingChange('resolution', e.target.value)}
          >
            <option value="1920x1080">1080p (1920px)</option>
            <option value="1280x720">720p (1280px)</option>
            <option value="854x480">480p (854px)</option>
          </select>
        </div>
      </div>
      <p style={styles.note}>Note: Resolution scaling maintains the original aspect ratio</p>
    </div>
  );
}
