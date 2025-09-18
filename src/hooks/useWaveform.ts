import { useEffect, useRef, useState } from "react";
import WaveSurfer from "wavesurfer.js";

export function useWaveform() {
  const waveformRef = useRef<HTMLDivElement>(null);
  const wavesurferRef = useRef<WaveSurfer | null>(null);
  const [files, setFiles] = useState<File[] | undefined>();
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (files && waveformRef.current) {
      const url = URL.createObjectURL(files[0]);
      wavesurferRef.current?.destroy();
      wavesurferRef.current = WaveSurfer.create({
        container: waveformRef.current,
        waveColor: "#333",
        progressColor: "#FFF",
        cursorColor: "#fff",
        barWidth: 3,
        barRadius: 3,
        height: 350,
      });
      wavesurferRef.current.load(url);
    }
  }, [files]);

  const handleDrop = (f: File[]) => setFiles(f);
  const handleRemove = () => setFiles(undefined);
  const togglePlay = () => {
    if (wavesurferRef.current) {
      wavesurferRef.current.playPause();
      setIsPlaying((p) => !p);
    }
  };

  return {
    waveformRef,
    files,
    setFiles,
    handleDrop,
    handleRemove,
    isPlaying,
    togglePlay,
  };
}