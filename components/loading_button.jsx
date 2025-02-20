import Link from "next/link";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function LoadingButton({ isLoading, className, link, onClick, buttonText }) {
  return (
    isLoading ? (
      <Button className={className} disabled>
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        로딩중..
      </Button>
    ) : (
      <Button className={className} onClick={onClick}>
        {buttonText? buttonText : "SetButton Text"}
      </Button>
    )
  );
}
