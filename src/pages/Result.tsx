import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Contrast, Palette, Zap, AlertCircleIcon, CheckCircle2Icon } from "lucide-react";
import { Button } from "@/components/ui/button";
import CircularProgress from "@/components/ui/shadcn-io/circular";
import * as React from "react";


const analysisData = [
  {
    title: "Time and tempo",
    description: "Analysis of timing and tempo accuracy.",
    score: 75,
  },
  {
    title: "Pitch accuracy",
    description: "Evaluation of pitch accuracy and intonation.",
    score: 80,
  },
  {
    title: "Rhythm and dynamics",
    description: "Assessment of rhythm and dynamic control.",
    score: 70,
  },
  {
    title: "Expression and interpretation",
    description: "Judgment of musical expression and interpretation.",
    score: 85,
  },
  {
    title: "Skill proficiency",
    description: "Overall proficiency in playing the piece.",
    score: 78,
  },
  {
    title: "Technical execution",
    description: "Evaluation of technical skills and execution.",
    score: 82,
  },
];

const items = [
  {
    title: "Is it accessible?",
    content: "Yes. It adheres to the WAI-ARIA design pattern. ",
    icon: Contrast,
  },
  {
    title: "Is it styled?",
    content:
      "Yes. It comes with default styles that matches the other components' aesthetic.",
    icon: Palette,
  },
  {
    title: "Is it animated?",
    content:
      "Yes. It's animated by default, but you can disable it if you prefer.",
    icon: Zap,
  },
];

export default function Result() {
    const [progress, setProgress] = React.useState(0);

    React.useEffect(() => {
      const timer = setTimeout(() => setProgress(66), 500);
      return () => clearTimeout(timer);
    }, []);
  return (
    <div className="flex flex-col justify-center items-center mx-10 my-5">
      <ResizablePanelGroup
        direction="horizontal"
        className="rounded-lg md:min-w-[450px]"
      >
        <ResizablePanel defaultSize={65} className="h-[90svh]">
          <Card className="w-full h-full">
            <CardHeader className="border-b">
              <CardTitle className="text-xl">Analysis Result</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="score" className="w-full">
                <TabsList>
                  <TabsTrigger value="score">Score</TabsTrigger>
                  <TabsTrigger value="detail">Detail</TabsTrigger>
                </TabsList>
                <TabsContent value="score" className="overflow-auto">
                  <div className="flex flex-col justify-center items-center">
                    <CircularProgress
                      value={progress}
                      size={120}
                      showLabel
                      progressClassName="transition-all duration-1000 ease-in-out"
                      labelClassName="text-3xl font-bold"
                    />
                    <p className="text-lg">Student Performance Score</p>
                  </div>
                  <div className="gap-4 grid grid-cols-1 md:grid-cols-3 mt-6">
                    {analysisData.map((item) => (
                      <Card className="gap-2">
                        <CardHeader className="flex flex-row justify-between items-center space-y-0 pb-2">
                          <CardTitle>{item.title}</CardTitle>
                          <Button size="icon">{item.score}</Button>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground text-sm">
                            {item.description}
                          </p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="detail">
                  <Accordion
                    defaultValue="item-0"
                    type="single"
                    collapsible
                    className="my-4 w-full"
                  >
                    {items.map(({ title, content, icon: Icon }, index) => (
                      <Card key={index} className="mb-4 py-2">
                        <CardContent>
                          <AccordionItem key={index} value={`item-${index}`}>
                            <AccordionTrigger>
                              <div className="flex items-start gap-3">
                                <Icon />
                                {title}
                              </div>
                            </AccordionTrigger>
                            <AccordionContent>
                              <Alert variant="default" className="mb-4">
                                <CheckCircle2Icon />
                                <AlertTitle>Heads up!</AlertTitle>
                                <AlertDescription>{content}</AlertDescription>
                              </Alert>
                              <Alert variant="destructive">
                                <AlertCircleIcon />
                                <AlertTitle>Heads up!</AlertTitle>
                                <AlertDescription>{content}</AlertDescription>
                              </Alert>
                            </AccordionContent>
                          </AccordionItem>
                        </CardContent>
                      </Card>
                    ))}
                  </Accordion>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </ResizablePanel>
        <ResizableHandle withHandle className="m-5" />
        <ResizablePanel defaultSize={35}>  
            <Card className="w-full h-full">
              <CardHeader className="border-b">
                <CardTitle className="text-xl">Audio input file</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col justify-center gap-4 h-full">
                <Card>
                  <CardHeader>
                    <CardTitle>Student Audio File</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">
                      This is the audio file uploaded by the student.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Teacher Audio File</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">
                      This is the audio file uploaded by the teacher.
                    </p>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}
