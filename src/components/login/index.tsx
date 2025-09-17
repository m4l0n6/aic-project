import { GalleryVerticalEnd } from "lucide-react";
import { LoginForm } from "./components/login-form";
import { APP_INFO } from "@/lib/constants/app";
import { Link } from "react-router-dom";

export default function LoginPage() {
  return (
    <div className="flex flex-col justify-center items-center gap-6 bg-muted p-6 md:p-10 min-h-svh">
      <div className="flex flex-col gap-6 w-full max-w-sm">
        <Link to="/" className="flex items-center self-center gap-2 font-medium">
          <div className="flex justify-center items-center bg-gradient-primary rounded-md size-6 text-primary-foreground">
            <GalleryVerticalEnd className="bg-gradient-primary size-4" />
          </div>
          {APP_INFO.NAME}
        </Link>
        <LoginForm />
      </div>
    </div>
  );
}