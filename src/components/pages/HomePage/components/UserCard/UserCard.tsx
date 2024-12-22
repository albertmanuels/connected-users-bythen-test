import Card from "@/components/shared/Card";
import Image from "next/image";
import React from "react";
import { UserCardProps } from "./UserCard.types";

const UserCard = (props: UserCardProps) => {
  const { onClick, handleOnEdit, data } = props;

  return (
    <Card className="min-w-min" onClick={() => onClick(data.id)}>
      <div className="mb-5">
        <Image
          src={data.avatar || "/icons/user_placeholder.png"}
          alt="user photo"
          width={80}
          height={80}
          className="mx-auto rounded-full"
        />
      </div>

      <div className="mb-5 text-center">
        <h3 className="text-xl">{`${data.first_name} ${data.last_name}`}</h3>
        <span className="text-lg">{data.email}</span>
      </div>
      <button
        className="rounded-md border-none bg-green-400 px-3 py-1 hover:bg-green-500"
        onClick={(e) => {
          e.stopPropagation();
          handleOnEdit(data.id);
        }}
      >
        Edit
      </button>
    </Card>
  );
};

export default UserCard;
