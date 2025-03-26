"use client";
import ContentsWrapper from "@/components/common/contents/ContentsWrapper";
import type React from "react";
import { useEffect, useRef, useState } from "react";
import styles from "@/app/play_ground/_components/WebCamera.module.scss";

const WebCameraTest = () => {
	const constraints = {
		audio: false,
		video: {
			width: 1000,
			height: 500,
		},
	};

	const videoRef = useRef<HTMLVideoElement>(null);
	//カメラとマイクのon/offボタンのstateを管理
	const [cameraState, setCameraState] = useState(false);

	//カメラのon/offボタンの実装
	useEffect(() => {
		navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
			if (videoRef.current === null) return;
			videoRef.current.srcObject = cameraState ? stream : null;
		});
	}, [cameraState]);

	return (
		<ContentsWrapper
			created="2025-03-27"
			title="Webカメラへの接続"
			height={600}
		>
			<div className={styles.camera_wrapper}>
				<video
					ref={videoRef}
					id="local-video"
					autoPlay
					playsInline
					muted
					width={1200}
					height={500}
				/>
				<br />
				<button type="button" onClick={() => setCameraState(!cameraState)}>
					カメラ
				</button>
			</div>
		</ContentsWrapper>
	);
};

export default WebCameraTest;
