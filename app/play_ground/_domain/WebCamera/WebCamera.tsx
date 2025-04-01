"use client";
import type React from "react";
import { useEffect, useRef, useState } from "react";
import styles from "@/app/play_ground/_domain/WebCamera/WebCamera.module.scss";
import Button from "@/components/base/Button1/Button";
import ContentCard from "@/components/base/Card1/ContentCard";

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
	const [isAccessToCamera, setIsAccessToCamera] = useState(true);

	//カメラのon/offボタンの実装
	useEffect(() => {
		const accessToCamera = async () => {
			try {
				const stream = await navigator.mediaDevices.getUserMedia({
					audio: false,
					video: {
						width: 1000,
						height: 500,
					},
				});
				if (videoRef.current === null) return;
				videoRef.current.srcObject = cameraState ? stream : null;
			} catch (error) {
				console.error(error);
				setIsAccessToCamera(false);
			}
		};

		accessToCamera();
	}, [cameraState]);

	return (
		<ContentCard created="2025-03-27" title="Webカメラへの接続" height={600}>
			<div className={styles.camera_wrapper}>
				{isAccessToCamera ? (
					<>
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
						<Button
							title={"カメラ"}
							onClick={() => setCameraState(!cameraState)}
						/>
					</>
				) : (
					<p>カメラに接続できませんでした。</p>
				)}
			</div>
		</ContentCard>
	);
};

export default WebCameraTest;
