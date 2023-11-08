import {Modal} from "antd";
import React from "react";

export default function Intercepting({params: {id}}: { params: { id: string } }) {
    return ( <div> Intercepting Route {id}</div>)
}