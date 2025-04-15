import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import ExperienceData from "../custom/ExperienceData";

const ExperienceModal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <span className="cursor-pointer hover:underline text-light-gray font-medium">
          More Details...
        </span>
      </DialogTrigger>
      <DialogContent className="w-[97%] min-h-[500px] h-[80vh] overflow-y-auto text-sm">
        <DialogHeader>
          <DialogTitle className="text-black font-medium text-lg test">
            Work Experience
          </DialogTitle>
        </DialogHeader>
        <ExperienceData />
        <DialogTrigger asChild>
          <span className="cursor-pointer hover:underline text-light-gray font-medium">
            Close
          </span>
        </DialogTrigger>
      </DialogContent>
    </Dialog>
  );
};

export default ExperienceModal;
