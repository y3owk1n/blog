"use client";

import { List } from "@/components/typography/List";
import React from "react";

const listContents = [
    "1st level of puns: 5 gold coins",
    "2nd level of jokes: 10 gold coins",
    "3rd level of one-liners : 20 gold coins",
];

const ListDemo = () => {
    return <List contents={listContents} />;
};

export default ListDemo;
