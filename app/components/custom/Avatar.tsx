import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function CustomAvatar() {
  return (
    <Avatar className="w-[70px] h-[70px]">
      <AvatarImage src="Avatar.jpeg" alt="arihant_avatar" />
      <AvatarFallback>Arihant</AvatarFallback>
    </Avatar>
  );
}
