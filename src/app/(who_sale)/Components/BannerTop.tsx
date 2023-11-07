"use client";
import React, {Component} from "react";
import {Image} from "antd";

export class BannerTop extends Component {
    render() {
        return (
            <>
                <Image
                    width={'100%'}
                    src="https://img.webike-cdn.net/sys_images/caimg/20231020_tyre_recommend_1000_45.png"
                    preview={false}
                >
                </Image>
            </>
        );
    }
}
