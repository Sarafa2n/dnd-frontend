'use client'

import React from "react";
import {useAppearance} from "@vkontakte/vkui";

export default function Home({ params }: { params: { slug: string } }) {
    return (
        <div>{params.slug}</div>
    );
}
