import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

export function SliderDemo() {
  return (
    <div className="space-y-4 min-w-[300px]">
      <Label>Simple slider</Label>
      <Slider defaultValue={[25]} aria-label="Simple slider" />
    </div>
  );
}
