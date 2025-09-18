import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { useWaveform } from "../hooks/useWaveform";
import {
  Dropzone,
  DropzoneContent,
  DropzoneEmptyState,
} from "@/components/ui/shadcn-io/dropzone";
import { useState } from "react";
import { Button } from "../components/ui/button";
import { toast } from "sonner";
import { Link, useNavigate } from "react-router-dom";
import { Loader2Icon, ArrowLeft, Play, X, Pause } from "lucide-react";
import { LoadingProgress } from "@/components/ui/shadcn-io/loading-process.";

const Demo = () => {
  const teacher = useWaveform();
  const student = useWaveform();
  const navigate = useNavigate();

  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState("");
  const startLoading = () => {
    setIsLoading(true);
    setProgress(0);
    setStatus("Connecting to server...");

    // Simulate different loading stages
    setTimeout(() => {
      setProgress(25);
      setStatus("Fetching data...");
    }, 1000);

    setTimeout(() => {
      setProgress(50);
      setStatus("Processing results...");
    }, 1600);

    setTimeout(() => {
      setProgress(75);
      setStatus("Preparing display...");
    }, 2800);

    setTimeout(() => {
      setProgress(100);
      setStatus("Complete!");
      setTimeout(() => {
        navigate("/result");
      }, 1000);
    }, 3600);
  };

  const handleSummit = () => {
    if (!teacher.files || !student.files) {
      toast.error("Please upload both teacher and student files");
      return;
    }
    startLoading();
  };

  function Loader() {
    return (
      <div className="flex justify-center items-center w-full h-screen">
        <div>
          <img src="ai-analysis.gif" alt="" className="w-full"/>
          <LoadingProgress value={progress} className="w-[500px]" />
          <div className="mt-5 text-center">
            <p className="pb-4 text-muted-foreground text-sm">{status}</p>
            {progress < 100 && (
              <p className="mt-1 text-muted-foreground">Please wait...</p>
            )}
          </div>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return <Loader />;
  } 

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
          {isLoading ? (
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
