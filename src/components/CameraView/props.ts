import { Camera } from "expo-camera/legacy";

export interface CameraViewProps {
  cameraRef: React.RefObject<Camera>;
  isRecording: boolean;
  onRecord: () => void;
  onStopRecording: () => void;
}
