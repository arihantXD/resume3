import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const ExperienceModal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <span className="cursor-pointer hover:underline text-light-gray font-medium">
          More
        </span>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4"></div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ExperienceModal;

// <div className="flex flex-col gap-2 pt-2">
//   <div>
//     <div className="text-black">
//       <div className="font-semibold text-base">Johny Traveller</div>
//       <div className="font-medium">09/2023 - 12/2023</div>
//     </div>
//     <div className="py-2">
//       Developed an end-to-end project which offered various tours in different
//       modes and difficulties where end users can select tours according.{" "}
//       <ExperienceModal />
//     </div>
//   </div>
//   <div className="border-b-2">
//     <div className="text-black">
//       <div className="font-semibold text-base">Johny Traveller</div>
//       <div className="font-medium">09/2023 - 12/2023</div>
//     </div>
//     <div className="py-2">
//       Developed an end-to-end project which offered various tours in different
//       modes and difficulties where end users can select tours according.{" "}
//       <ExperienceModal />
//     </div>
//   </div>
// </div>;
