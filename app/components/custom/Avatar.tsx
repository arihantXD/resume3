import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function CustomAvatar() {
  return (
    <Avatar className="w-[40px] h-[40px] sm:w-[65px] sm:h-[60px]">
      <AvatarImage src="Avatar.jpeg" alt="arihant_avatar" />
      <AvatarFallback>Arihant</AvatarFallback>
    </Avatar>
  );
}
