"use client";
import type React from "react";
import { useEffect, useRef, useState } from "react";
import styles from "@/app/play_ground/_components/WebCamera.module.scss";
import ContentsWrapper from "@/components/common/contents/ContentsWrapper";

const WebCameraTest = () => {
	const videoRef = useRef<HTMLVideoElement>(null);
	const [cameraState, setCameraState] = useState(false);

	useEffect(() => {
		navigator.mediaDevices
			.getUserMedia({
				audio: false,
				video: {
					width: 1000,
					height: 500,
				},
			})
			.then((stream) => {
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
