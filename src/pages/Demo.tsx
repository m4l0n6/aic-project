import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { useState, useEffect, useRef} from "react";
import WaveSurfer from "wavesurfer.js";
import {
  Dropzone,
  DropzoneContent,
  DropzoneEmptyState,
} from "@/components/ui/shadcn-io/dropzone";
import { Button } from "../components/ui/button";
import { toast } from "sonner";
import { Link } from "react-router-dom";
import { Loader2Icon, ArrowLeft, Play, X, Pause } from "lucide-react";

// Custom hook cho mỗi waveform
function useWaveform() {
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

const Demo = () => {
  const teacher = useWaveform();
  const student = useWaveform();
  const [isSummit, setIsSummit] = useState(false);

  const handleSummit = () => {
    if (!teacher.files || !student.files) {
      toast.error("Please upload both teacher and student files");
      return;
    }
    setIsSummit(true);
  };

  return (
    <div className="relative flex flex-col justify-center items-center mx-10 min-h-screen">
      <h1 className="mb-4 font-bold text-4xl">AI analysis piano files</h1>
      <p>Upload teacher and student piano files in MIDI format</p>
      <ResizablePanelGroup
        direction="horizontal"
        className="mt-10 rounded-lg md:min-w-[450px] min-h-[450px]"
      >
        {/* Student Panel */}
        <ResizablePanel defaultSize={50} className="relative flex justify-center items-center">
          {student.files && (
            <Button className="top-10 right-2 z-10 absolute" size="icon" variant="destructive" onClick={student.handleRemove}>
              <X />
            </Button>
          )}
          <div className="flex flex-col items-center w-full h-full">
            <h2 className="mb-2 font-bold text-xl">Student audio file</h2>
            {student.files ? (
              <div className="flex flex-col justify-center items-center w-full h-full">
                <div ref={student.waveformRef} className="bg-gray-900 mt-6 mb-4 rounded-md w-full" />
                <Button onClick={student.togglePlay} size="icon" variant="outline">
                  {student.isPlaying ? <Pause /> : <Play />}
                </Button>
              </div>
            ) : (
              <Dropzone
                maxFiles={3}
                onDrop={student.handleDrop}
                onError={console.error}
                src={student.files}
                className="w-full h-[calc(100%-40px)]"
              >
                <DropzoneEmptyState />
                <DropzoneContent />
              </Dropzone>
            )}
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle className="mx-5 mt-10" />
        {/* Teacher Panel */}
        <ResizablePanel defaultSize={50} className="relative flex justify-center items-center">
          {teacher.files && (
            <Button className="top-12 right-5 z-10 absolute" variant="destructive" onClick={teacher.handleRemove} size="icon">
              <X />
            </Button>
          )}
          <div className="flex flex-col items-center w-full h-full">
            <h2 className="mb-2 font-bold text-xl">Teacher audio file</h2>
            {teacher.files ? (
              <div className="flex flex-col justify-center items-center w-full h-full">
                <div ref={teacher.waveformRef} className="bg-gray-900 mt-6 mb-4 rounded-md w-full" />
                <Button onClick={teacher.togglePlay} size="icon" variant="outline">
                  {teacher.isPlaying ? <Pause /> : <Play />}
                </Button>
              </div>
            ) : (
              <Dropzone
                maxFiles={3}
                onDrop={teacher.handleDrop}
                onError={console.error}
                src={teacher.files}
                className="h-[calc(100%-40px)]"
              >
                <DropzoneEmptyState />
                <DropzoneContent />
              </Dropzone>
            )}
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
      <div className="mt-5 text-muted-foreground text-sm">
        <Button size="lg" className="bg-gradient-primary" onClick={handleSummit}>
          {isSummit ? (
            <>
              <Loader2Icon className="animate-spin" />
              Please wait
            </>
          ) : (
            "Start"
          )}
        </Button>
      </div>
      <Link to="/" className="top-5 -left-5 absolute">
        <Button variant="outline" size="sm">
          <ArrowLeft />
          Return to Home
        </Button>
      </Link>
    </div>
  );
};

export default Demo;
