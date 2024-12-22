import React from "react";

export type UserCardProps = {
  data: {
    avatar: string;
    email: string;
    first_name: string;
    id: number;
    last_name: string;
  };
  onClick: (id: number) => void;
  handleOnEdit: (id: number) => void;
  innerRef?: React.Ref<HTMLDivElement>
};